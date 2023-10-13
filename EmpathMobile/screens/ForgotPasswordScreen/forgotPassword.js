import React, {useState} from 'react';
import styles from './style';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
import { forgotPassword } from '../../api/passwordRecoveryApi'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const handleForgotPasswordPress = async () => {
        if(!email){
            return;
        }

        try{
            await forgotPassword(email);

            Alert("A password reset email has been sent to your address.");
        }catch(error){
            Alert("There was an error sending the password reset email. Please try again.", error)
        }
        
    };

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Forgot Password</Text>
            </View>

            <View style={styles.bodySection}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Email ID"
                placeholderTextColor="#8C8C8C"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={[styles.button, styles.buttonActive]}
            onPress={handleForgotPasswordPress}>
                <Text style={styles.buttonTextActive}>Continue</Text>
            </TouchableOpacity>
            </View>

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
    );
};


    

export default ForgotPassword;