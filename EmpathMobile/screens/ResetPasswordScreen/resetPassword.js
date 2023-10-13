import React, {useState} from 'react';
import styles from './style';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
import { resetPassword } from '../../api/passwordRecoveryApi'

const ResetPassword = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPaswword] = useState('')

    const handleResetPasswordPress = async () => {
        try{
            await resetPassword(password);
            Alert("Password reset!");
            
        }catch(error){
            Alert("There was an error resetting your password!", error)
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>Create New Password</Text>
                <Text style={styles.subtitle}>You're almost there!</Text>
            </View>

            <View style={styles.bodySection}>
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#8C8C8C"
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#8C8C8C"
                value={confirmPassword}
                onChangeText={setConfirmPaswword}
            />



            <TouchableOpacity style={[styles.button, styles.buttonActive]}
            onPress={handleResetPasswordPress}>
                <Text style={styles.buttonTextActive}>Continue</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
};


    

export default ResetPassword;