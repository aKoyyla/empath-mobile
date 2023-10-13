import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import eyeOpen from '../../assets/images/AuthPage/Eye.png';
import eyeClosed from '../../assets/images/AuthPage/Eye.png';
import {signUp, loginUser} from '../../api/authApi';
import EncryptedStorage from 'react-native-encrypted-storage';

const AuthScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [buttonBackgroundColor] = useState(new Animated.Value(0));
  const [mode, setMode] = useState('login');
  const navigation = useNavigation();

  const switchMode = () => {
    if (mode === 'signup') setMode('login');
    else setMode('signup');
  };

  const isFormComplete = () => {
    return name && email && age && password;
  };

  const isValidEmail = email => {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return pattern.test(email);
  };

  const handleGetStartedPress = async () => {
    if (!isValidEmail(email)) {
      setEmailError('Not a valid email');
      return;
    }
    setEmailError('');

    const formData = {
      name: name,
      email: email,
      age: age,
      password: password,
    };

    try {
      const response = await signUp(formData);
      console.log(response);
      if (response && response.message === 'User created successfully') {
        console.log('Success in signup');

        await EncryptedStorage.setItem('userToken', response.token).then(() => {
          navigation.navigate('UserProfile');
        });
      } else {
        setSignupError(
          response.message || 'An error occurred. Please try again.',
        );
      }
    } catch (error) {
      console.error('Error during sign up:', error.message);
      if (error.message === 'Email already in use') {
        setEmailError(error.message);
      } else {
        setSignupError(error.message || 'An error occurred. Please try again.');
      }
    }
  };

  const handleLoginPress = async () => {
    if (!isValidEmail(email)) {
      setEmailError('Not a valid email');
    } else {
      setEmailError('');

      const formData = {
        email: email,
        password: password,
      };

      try {
        const response = await loginUser(formData);
        console.log(response);
        if (response && response.message === 'Logged in successfully') {
          console.log('Received JWT Token:', response.token);
          await EncryptedStorage.setItem('userToken', response.token).then(
            () => {
              navigation.navigate('HomeScreen');
            },
          );
        } else {
          setSignupError(
            response.message || 'An error occurred. Please try again.',
          );
        }
      } catch (error) {
        console.error('Error during login:', error.message);
        if (error.message === 'Email already in use') {
          setEmailError(error.message);
        } else {
          setSignupError(
            error.message || 'An error occurred. Please try again.',
          );
        }
      }
    }
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('Forgotpassword');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>
          {mode === 'signup' ? 'Create an Account' : 'Login using Email'}
        </Text>
        <Text style={styles.subtitle}>
          to access an easier way to {mode === 'signup' ? 'create' : 'access'}{' '}
          your journal
        </Text>
      </View>

      <View style={styles.bodySection}>
        {mode === 'signup' && (
          <>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              placeholderTextColor="#8C8C8C"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Age"
              placeholderTextColor="#8C8C8C"
              value={age}
              onChangeText={setAge}
            />
          </>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <Text style={styles.label}>Email</Text>
          {emailError ? (
            <Text style={{color: 'red', opacity: 0.8, maxWidth: '50%'}}>
              {emailError}
            </Text>
          ) : null}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Email ID"
          placeholderTextColor="#8C8C8C"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#8C8C8C',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginBottom: 15,
          }}>
          <TextInput
            style={{flex: 1, color: 'white'}}
            placeholder="Enter Password"
            placeholderTextColor="#8C8C8C"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Image
              source={isPasswordVisible ? eyeClosed : eyeOpen}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {mode === 'signup' ? (
          <TouchableOpacity
            style={[
              styles.button,
              isFormComplete() ? styles.buttonActive : styles.buttonInactive,
            ]}
            disabled={!isFormComplete()}
            onPress={handleGetStartedPress}>
            <Text
              style={[
                styles.buttonText,
                isFormComplete() ? styles.buttonTextActive : null,
              ]}>
              Get Started
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.buttonActive]}
              onPress={handleLoginPress}>
              <Text style={styles.buttonTextActive}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonInactive]}
              onPress={handleForgotPasswordPress}>
              <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity onPress={switchMode}>
          <Text style={styles.switchText}>
            {mode === 'signup'
              ? 'Already have an account? '
              : "Don't have an account? "}
            <Text style={styles.switchAction}>
              {mode === 'signup' ? 'Log in' : 'Sign up'}
            </Text>
          </Text>
        </TouchableOpacity>

        {mode === 'signup' && (
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
        )}
      </View>
    </View>
  );
};

export default AuthScreen;