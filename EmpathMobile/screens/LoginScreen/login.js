import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../api';
import styles from './styles';
import ImageCarousel from '../../components/Carousel/ImageCarousel';

const carouselData = [
  {
    image:
      'https://cdn.discordapp.com/attachments/1071600220854554698/1151359623115313183/image.png',
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1071600220854554698/1151359650978078791/image.png',
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1071600220854554698/1151359650978078791/image.png',
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/1071600220854554698/1151359650978078791/image.png',
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
];

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = async () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: 'https://cdn.discordapp.com/attachments/1071600220854554698/1151359588986257419/image.png',
          }}
          style={styles.logo}
        />
        <ImageCarousel data={carouselData} />
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1071600220854554698/1151372437473218600/envelope.1024x769.png',
              }}
              style={styles.emailLogo}
            />
            <Text>Continue with Email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1071600220854554698/1151371792775118938/google.1024x1024.png',
              }}
              style={styles.googleLogo}
            />
            <Text>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://cdn.discordapp.com/attachments/1071600220854554698/1151373317274607646/505px-Apple_logo_white.png',
              }}
              style={styles.appleLogo}
            />
            <Text style={styles.button2Text}>Continue with Apple</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.agreementContainer}>
          <Text style={styles.agreementText}>
            By continuing you agree to the{' '}
            <Text
              style={styles.agreementTextPressable}
              onPress={() => {
                /* Navigate to Privacy Policy page */
              }}>
              Privacy Policy
            </Text>{' '}
            &{' '}
            <Text
              style={styles.agreementTextPressable}
              onPress={() => {
                /* Navigate to Terms of Use page */
              }}>
              Terms of Use
            </Text>{' '}
            of the Murmur Pvt Limited
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
