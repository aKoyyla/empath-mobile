import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import image from '../../assets/images/SummaryPage/background.png';
import {useNavigation} from '@react-navigation/native';

const SummaryScreen = () => {
  const [summaryText, setSummaryText] = useState('');
  const navigation = useNavigation();

  //return to main screen
  const handleBack = () => {
    navigation.navigate('JournalEntry'); //change to main screen later
  }
	
  //generates summary
  const handleSummary = () => {
    setSummaryText('Default range of journal entries is 2 weeks (feature to be added!)');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
				<TouchableOpacity onPress={handleBack}>
	  			<Text style={styles.buttonBack}> ← </Text>
				</TouchableOpacity>
        <Text style={styles.title}>
          Generate a summary of your recent journals
        </Text>
				<View style={{padding:10,}}>
	  			<TextInput
              style={styles.summary}
              placeholder="Choose a date range to generate your summary from..."
              placeholderTextColor="#CECECE"
              multiline
              readOnly
	      			value={summaryText}
              onChangeText={(text) => setSummaryText(text)}
            />
	 			</View>
        <View style={styles.buttonGenerate}>
          <Button title="Generate Summary" color='#fff' onPress={handleSummary} />
        </View>
	    </ImageBackground>
	  </View>
  );
};

export default SummaryScreen;
