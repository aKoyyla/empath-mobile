import React, { useState } from 'react';
import {ImageBackground,View,Text,TextInput,Button,
  TouchableOpacity,Keyboard,TouchableWithoutFeedback,Image,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const JournalEntry = () => {
  const [entryText, setEntryText] = useState('');
  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('JournalSetting', {text: entryText});

  };

  const image = {
    uri: 'https://cdn.discordapp.com/attachments/1066511724112523265/1158236045138214922/blur.png?ex=651b82e0&is=651a3160&hm=e436035a44de30b6ea0ac5ff63a3cbb47725f05af980e8c119d4ea6615c8fde6&',
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ImageBackground source={image} imageStyle={styles.image}>
          <View style={styles.imageContainer}>

            {/* Header */}
            <View style={styles.header}>
            <TouchableOpacity onPress={() => { /* Handle navigation back */ }}>
              <Text style={styles.icons}> ←  </Text> 
              </TouchableOpacity>
            </View>


            <Text style={styles.title}>Express your feelings here</Text>
            <TextInput
              placeholder="Start Typing here..."
              placeholderTextColor="#CECECE"
              keyboardType="default"
              style={styles.textBox}
              multiline
              value={entryText}
              onChangeText={(text) => setEntryText(text)}
            />
            <View style={styles.buttonContainer}>
              <Button title="Continue" color='#fff' onPress={ nextPage } />
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JournalEntry;
