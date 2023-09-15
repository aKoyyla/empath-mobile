import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const avatarImages = [
  require('../../assets/images/UserProfile/User1.png'),
  require('../../assets/images/UserProfile/User2.png'),
  require('../../assets/images/UserProfile/User3.png'),
  require('../../assets/images/UserProfile/User4.png'),
  require('../../assets/images/UserProfile/User5.png'),
  require('../../assets/images/UserProfile/User6.png'),
  require('../../assets/images/UserProfile/User7.png'),
  require('../../assets/images/UserProfile/User8.png'),
];

const UserProfile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(avatarImages[0]);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>One Last Thing</Text>
        <Text style={styles.subtitle}>Choose your avatar. Why not?</Text>
        <View
          style={[
            styles.largeAvatarWrapper,
            selectedAvatar === selectedAvatar && styles.selectedLargeAvatar,
          ]}>
          <Image source={selectedAvatar} style={styles.largeAvatar} />
        </View>

        <View style={styles.row}>
          {avatarImages.slice(0, 4).map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAvatar(img)}>
              <View
                style={[
                  styles.avatarWrapper,
                  img === selectedAvatar && styles.selectedAvatar,
                ]}>
                <Image source={img} style={styles.avatar} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {avatarImages.slice(4, 8).map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedAvatar(img)}>
              <View
                style={[
                  styles.avatarWrapper,
                  img === selectedAvatar && styles.selectedAvatar,
                ]}>
                <Image source={img} style={styles.avatar} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.orContainer}>
          <View style={styles.orDividerLeft} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orDividerRight} />
        </View>

        <TouchableOpacity style={styles.chooseGalleryButton}>
          <Text style={styles.chooseGalleryButtonText}>
            Choose from Gallery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>I'll do this later</Text>
        </TouchableOpacity>
        <Text style={styles.note}>
          You can change your avatar later from the "Setting" page at any point
          in time.
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
