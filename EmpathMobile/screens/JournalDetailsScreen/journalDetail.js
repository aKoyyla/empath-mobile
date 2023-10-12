import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {addJournal} from '../../api/journalApi'
import EncryptedStorage from 'react-native-encrypted-storage';

const JournalDetail= ({route}) => {

  
  const requestID = 2;

  // Basic sample data.
const journalData = [
    {
      journalid: 1,
      GivenTitle: 'My EXPERIENCE 1',
      entry: 'this is what\'s inside the journal 1',
      mood: '4',
      Givenintensity: '10',
      platform: 'instagram',
      time: '10:05 PST'
    },
    {
      journalid: 2,
      GivenTitle: 'My EXPERIENCE 2',
      entry : `
This journal entry captures the events and emotions of an eventful day. It began with a bright and sunny morning, which immediately lifted my spirits. I decided to go for a long walk in the nearby park to soak in the natural beauty and clear my mind.\n
As I strolled through the park, I couldn't help but notice the vibrant colors of the flowers in full bloom. The scent of freshly cut grass and the chirping of birds in the trees provided a peaceful soundtrack to my thoughts. It was a perfect moment to reflect on life and its beauty.\n
Later in the day, I met up with some friends for a picnic by the lake. We shared stories, laughter, and delicious food. The sound of children playing nearby added to the joyful atmosphere.
`.trim(),
      mood: '6',
      Givenintensity: '3',
      platform: 'tiktok',
      time: '20:15 PST'


    }
  ];


  //Just getting local data here, will need to find a diff way to get from backend
  //const entry = journalData.find(entry => entry.journalid === requestID );
  const { entry } = route.params;


  if (!entry) {
    return res.status(404).json({ error: 'Journal entry not found' });
  }
  const { title, text: journalEntry, feeling, intensity, platform, updated_at } = entry;

  const [feelingNum] = useState(parseInt(feeling));

  const [intensityNum] = useState(parseInt(intensity));
  const image = {
    uri: 'https://cdn.discordapp.com/attachments/1066511724112523265/1158236045138214922/blur.png?ex=651b82e0&is=651a3160&hm=e436035a44de30b6ea0ac5ff63a3cbb47725f05af980e8c119d4ea6615c8fde6&',
  };

  const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
         {/* Header */}
         <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.navigate('JournaSetting') }}>
            <Text>←</Text> 
          </TouchableOpacity>
            {/* Can Add additional functionality on where options button will navigate after*/}
            <Text>        Options</Text> 
            <Text>  Last Update at: {updated_at}</Text> 
           </View>
   

        
        {/* Journal Title Input  This is where I would get data from backend looking for "title" and return that here*/}
        <View style={styles.titleContainer}>
        <Text style={styles.label}>Title</Text>
        <Text style={styles.input}>{title}</Text>
        </View>

        {/* Trigger Section      I would replace this with a text box to hold the journal entries */}
        

        <View>
            <Text style={styles.label}>What triggered this?</Text>
            <ScrollView style={styles.inputContainer}>
            <TextInput
                style={[styles.input, { height: Math.max(100, 100) }]}
                multiline={true}
                value={journalEntry}
                editable={true} // Allows the scrolling Functionlity. But Users will not be able to edit anything here
                                
            />
            </ScrollView>
        </View>

        {/* Rate Feelings Section     Need to get the feeling data value and adjust the 2 sliders based on that */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Feelings: {feelingNum.toFixed(parseInt(feeling))}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            value={feelingNum}
            enabled={false}
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Intensity: {intensityNum.toFixed(parseInt(intensity))}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            value={intensityNum}
            enabled={false}
          />
        </View>


       
       {/* Platform Selector with Icons The Code looks for the platform data in the backend, we need to display which platform was selected*/}
        <Text style={styles.label}>Platform Used</Text>
        <View style={styles.platformContainer}>
            { platform=== 'youtube' ?(
                <TouchableOpacity style={styles.platformButton}>
                    <Icon name="youtube" size={30} color="#FF0000" />
                    <Text style={styles.platformText}>YouTube</Text>
                </TouchableOpacity>
            ): platform === 'instagram' ? (
                <TouchableOpacity style={styles.platformButton}>
                    <Icon name="instagram" size={40}  color="#405DE6" />
                    <Text style={styles.platformText}>Instagram</Text>
                </TouchableOpacity>
            ): platform === 'tiktok' ?(
                <TouchableOpacity style={styles.platformButton}>
                    <Icon name='tiktok' size={30} color="#1877F2" />
                    <Text style={styles.platformText}>TikTok</Text>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.platformButton}>  
                    <Icon name='Other Platform (if any)' size={30} color="#fff" />
                    <Text style={styles.platformText}>None</Text>
                </TouchableOpacity>
            )}
        </View>

      </ScrollView>
    </ImageBackground>
  );
}

export default JournalDetail;