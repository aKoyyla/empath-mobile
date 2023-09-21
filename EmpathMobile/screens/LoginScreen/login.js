import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {loginUser} from '../../api/authApi';
import styles from './styles';
import ImageCarousel from '../../components/Carousel/ImageCarousel';
import logoIcon from '../../assets/images/LoginPage/Logo.png';
import CarolImg1 from '../../assets/images/LoginPage/CarolImg1.png';
import CarolImg2 from '../../assets/images/LoginPage/CarolImg2.png';
import MailLogo from '../../assets/images/LoginPage/MailLogo.png';
import GoogleLogo from '../../assets/images/LoginPage/GoogleLogo.png';
import AppleLogo from '../../assets/images/LoginPage/AppleLogo.png';

const carouselData = [
  {
    image: CarolImg1,
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image: CarolImg2,
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image: CarolImg1,
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
  {
    image: CarolImg2,
    header: 'Speak your Heart Out',
    content:
      'Call our AI Bot to have a 1:1 & Journal your feelings in a full privacy',
  },
];

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image source={logoIcon} style={styles.logo} />
        </View>
        <ImageCarousel data={carouselData} />
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('Auth');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={MailLogo}
              style={styles.emailLogo}
            />
            <Text>Continue with Email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={GoogleLogo}
              style={styles.googleLogo}
            />
            <Text>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleSubmit}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={AppleLogo}
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
