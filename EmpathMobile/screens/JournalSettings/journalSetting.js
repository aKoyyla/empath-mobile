import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {addJournal} from '../../api/journalApi'
import EncryptedStorage from 'react-native-encrypted-storage';

const JournalSetting = () => {
  const [title, setTitle] = useState('');
  const [moodTrigger, setMoodTrigger] = useState('');
  const [platform, setPlatform] = useState('');
  const [feeling, setFeeling] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [entryText, setEntryText] = useState('');


  const image = {
    uri: 'https://cdn.discordapp.com/attachments/1066511724112523265/1158236045138214922/blur.png?ex=651b82e0&is=651a3160&hm=e436035a44de30b6ea0ac5ff63a3cbb47725f05af980e8c119d4ea6615c8fde6&',
  };

  const recommendedTags = ["Family Problems", "Work Politics", "Social media DM", "Soccer Practice", "+3"];
  const navigation = useNavigation();
  // Function to save the current entry
  const saveEntry = async ({route}) => {
    
    console.log('Save button clicked');
    console.log(title);
    //const {text} = route.params
    
    /*
    if (title.trim() === '' || entryText.trim() === '') {
      return; // Don't save empty entries
    }
    */

    // Create a journal entry object
    const journalEntry = {
      title: title,
      text: "test",
      feeling: 2,
      intensity: intensity,
      mood_trigger: moodTrigger,
      platform: platform,
      date: new Date().toISOString(), 
      voice_journal_path: "https://com.com/"
    };

    console.log(journalEntry);
    
    try {

      console.log("in try");


    const token = EncryptedStorage.getItem("userToken");
    console.log("token",token);
    const decodedToken = decodeURIComponent(token);
    console.log(decodedToken[1]);
    const response = await addJournal(journalEntry, decodedToken[1]);

    if (response.ok) {
      // Successfully saved the journal entry
      setTitle('');
      setMoodTrigger('');
      setPlatform('');
      setFeeling(0);
      setIntensity(0);
      setEntryText('');
      navigation.navigate('Home');
    } else {
      // Handle the case when the API call was not successful
      console.error('Failed to save the journal entry:', response);
    }
  } catch (error) {
    console.error('Error saving entry:', error);
  }
};


  return (
    <ImageBackground source={image} style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.navigate('JournalEntry')}}>
            <Text style={styles.icon}>←</Text> 
          </TouchableOpacity>
        </View>

        {/* Journal Title Input */}
        <View style={styles.titleContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.inputTitle}
          placeholder="New Journal"
          placeholderTextColor='#fff'
          value={title}
          onChangeText={setTitle}
        />
        </View>

        {/* Trigger Section */}
        <Text style={styles.label}>What triggered this?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter here..."
          placeholderTextColor='#fff'
          value={moodTrigger}
          onChangeText={setMoodTrigger}
        />

        {/* Recommended Tags */}
        <View style={styles.tagsContainer}>
          {recommendedTags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Rate Feelings Section */}
        <Text style={styles.label}>Rate your feelings</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Happy/Sad: {feeling.toFixed(1)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={-5}
            maximumValue={5}
            step={0.1}
            onValueChange={setFeeling}
            value={feeling}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Intensity: {intensity.toFixed(1)}</Text>
          <Slider
            style={styles.slider}
            minimumValue={-5}
            maximumValue={5}
            step={0.1}
            onValueChange={setIntensity}
            value={intensity}
          />
        </View>

       {/* Platform Selector with Icons */}
        <Text style={styles.label}>Select Platform</Text>
        <View style={styles.platformContainer}>

          <TouchableOpacity>
            <Icon name="youtube" size={30} color="#FF0000"/>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Icon name="instagram" size={40} color="#405DE6"/>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <Icon name='facebook' size={30} color="#1877F2" />
          </TouchableOpacity>
          
          <TouchableOpacity>
          <View style={styles.iconCircle}>
            <Icon name='ban' size={30} color="#FF0000"/>
          </View>
          </TouchableOpacity>

        </View>

        <TextInput
          style={styles.input}
          placeholder="Other Platform (if any)"
          placeholderTextColor='#fff'
          value={platform}
          onChangeText={setPlatform}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveEntry}>
          <Text style={styles.saveButtonText}>Save Journal</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

export default JournalSetting;