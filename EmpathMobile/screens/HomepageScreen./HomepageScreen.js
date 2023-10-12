import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';

import { fetchAllJournals } from '../../api/journalApi';
import EncryptedStorage from 'react-native-encrypted-storage';

import HomeImage from '../../assets/images/HomePage/Home.png';
import PlusButtonImage from '../../assets/images/HomePage/PlusButton.png';
import InsightsImage from '../../assets/images/HomePage/Insights.png';
import Settings from '../../assets/images/HomePage/Settings.png';
import Sliders from '../../assets/images/HomePage/Sliders.png';
import ChevronRight from '../../assets/images/HomePage/Chevron-right.png';
import MurMur from '../../assets/images/HomePage/MurMur.png';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Image source={MurMur} />
      <TouchableOpacity>
        <Image source={Settings} />
      </TouchableOpacity>
    </View>
  )
}

const TabComponent = () => {

  const [selectedTab, setSelectedTab] = useState('Today');
  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Today' && styles.selectedTab]}
        onPress={() => handleTabPress('Today')}
      >
        <Text style={[styles.tabText, selectedTab === 'Today' && styles.selectedTabText]}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'This Week' && styles.selectedTab]}
        onPress={() => handleTabPress('This Week')}
      >
        <Text style={[styles.tabText, selectedTab === 'This Week' && styles.selectedTabText]}>This Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Last 30 Days' && styles.selectedTab]}
        onPress={() => handleTabPress('Last 30 Days')}
      >
        <Text style={[styles.tabText, selectedTab === 'Last 30 Days' && styles.selectedTabText]}>Last 30 Days</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, selectedTab === 'Slider' && styles.selectedTab]}
        onPress={() => handleTabPress('Slider')}
      >
        <Image source={Sliders} />
      </TouchableOpacity>
    </View>
  )
}

const EntryComponent = () => {
  const navigation = useNavigation();
  const [journal, setJournal] = useState([]);

  const fetchJournalEntries = async (storedToken) => {
    try {
      const data = await fetchAllJournals(storedToken);
      setJournal(data);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
    }
  };

  useEffect(() => {
    EncryptedStorage.getItem('userToken').then((storedToken) => {
      if (storedToken) {
        fetchJournalEntries(storedToken);
      } else {
        console.log('No token found');
      }
    });
  }, []);

  const calculateDaysAgo = (entryDate) => {
    const currentDate = new Date();
    const journalDate = new Date(entryDate);
    const timeDifference = currentDate.getTime() - journalDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
  };

  return (
    journal.length > 0 ? (
      <ScrollView contentContainerStyle={styles.entriesContainer}>
        {journal.map(entry => (
          <TouchableOpacity key={entry.journal_id} style={styles.entry} onPress={() => navigation.navigate('JournalDetails', { entry })}>
            <View style={styles.entryTextContainer}>
              <Text style={styles.entryHeader} numberOfLines={1}>{entry.text}</Text>
              <Image source={ChevronRight} />
            </View>
            <View style={styles.entrySubTextContainer}>
              <Text style={styles.entrySubHeader}>{entry.title}</Text>
              <Text style={styles.entryDayCounter}>{calculateDaysAgo(entry.entry_date)} Days ago</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    ) : (
      <View style={styles.emptyEntriesContainer}>
        <Text style={styles.addEntryTextHeader}>Feel like sharing?</Text>
        <Text style={styles.addEntryTextSubHeader}>Go ahead and share your thoughts.</Text>
        <Text style={styles.addEntryTextSubHeader}>We're here for your well being</Text>
      </View>
    )
  );
};

const InsightComponent = () => {
  return (
    <View style={styles.entriesContainer}>
      <Text style={{ color: 'white' }}>Your Insight View</Text>
    </View>
  );
};

const FooterComponent = ({ onToggleView }) => {
  const navigation = useNavigation();
  const [selectedFooter, setSelectedFooter] = useState('My Journal');

  const handleFooterPress = (footer) => {
    setSelectedFooter(footer);
    onToggleView(footer === 'My Journal' ? 'Entry' : 'Insight');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => handleFooterPress('My Journal')}
      >
        <View style={styles.footerItem}>
          <Image source={HomeImage} />
          <Text style={styles.footerText}>My Journal</Text>
        </View>
        {selectedFooter === 'My Journal' && <View style={styles.selectedFooter} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('JournalEntry')}>
        <View>
          <Image style={styles.addButton} source={PlusButtonImage} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => handleFooterPress('Insights')}
      >
        <View style={styles.footerItem}>
          <Image style={styles.footerImage} source={InsightsImage} />
          <Text style={styles.footerText}>Insights</Text>
        </View>
        {selectedFooter === 'Insights' && <View style={styles.selectedFooter} />}
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {

  const [selectedView, setSelectedView] = useState('Entry');

  const toggleView = (view) => {
    setSelectedView(view);
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <SafeAreaView style={{ backgroundColor: '#1F1F1F' }}>
        <StatusBar barStyle="light-content" />
        <HeaderComponent />
      </SafeAreaView>

      {/* Tabs */}
      <TabComponent />

      {/* Journal Entries or Insight Screen */}
      {selectedView === 'Entry' ? <EntryComponent /> : <InsightComponent />}

      {/* Footer */}
      <FooterComponent onToggleView={toggleView} />

    </View>
  );
};

export default HomeScreen;