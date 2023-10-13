import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';
import { getSignedUrl } from '../../api/authApi';
const RNFetchBlob = require('rn-fetch-blob').default;

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
  const [userAvatarUrl, setUserAvatarUrl] = useState('');

  const launchImagePicker = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      quality: 0.8,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const asset = response.assets[0];
        const fileName = asset.fileName || `${new Date().getTime()}.jpg`;

        let fileType = asset.type;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        switch (fileExtension) {
          case 'jpg':
          case 'jpeg':
            fileType = 'image/jpeg';
            break;
          case 'png':
            fileType = 'image/png';
            break;
          case 'gif':
            fileType = 'image/gif';
            break;
          default:
            console.log('Unknown file extension received:', fileExtension);
            return;
        }

        getSignedUrl(fileName, fileType)
        .then(signedUrlData => {
          const { signedRequest } = signedUrlData;
          setUserAvatarUrl(asset.uri);

          return fetch(signedRequest, {
            method: 'PUT',
            headers: {
              'Content-Type': file.type,
            },
            body: asset.uri,
          });
        })
        .then(uploadResponse => {
          console.log('uploadResponse:', uploadResponse);
          if (uploadResponse.info().status !== 200) {
            console.error('Failed to upload image to S3. AWS Response:', uploadResponse.text());
            return;
          }
          //setUserAvatarUrl(uploadResponse.data.url);  // Assuming the URL of the uploaded image is returned in the response
        })
        .catch(error => {
          console.error('Error during S3 upload:', error);
        });
      }
    });
  };

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
          <Image
            source={userAvatarUrl ? {uri: userAvatarUrl} : selectedAvatar}
            style={styles.largeAvatar}
          />
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

        <TouchableOpacity
          style={styles.chooseGalleryButton}
          onPress={handleChooseFromGallery}>
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
