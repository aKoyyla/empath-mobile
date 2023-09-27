import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import styles from './styles';
import {getSignedUrl} from '../../api/authApi';
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

  const handleChooseFromGallery = async () => {
    console.log('handleChooseFromGallery initiated');
    const options = {
      title: 'Select Profile Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('ImagePicker Response:', response);

        const asset = response.assets[0];
        const fileName = asset.fileName || `${new Date().getTime()}.jpg`;
        console.log('Asset Details:', {
          fileName: asset.fileName,
          type: asset.type,
          uri: asset.uri,
        });

        let fileType = asset.type;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        console.log('Deduced File Extension:', fileExtension);

        switch (
          fileExtension
        ) {
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

        console.log('Deduced File Type:', fileType);

        const signedUrlData = await getSignedUrl(fileName, fileType);
        console.log('Signed URL Data:', signedUrlData);

        const path = asset.uri;
        console.log('Image Path:', path);

        const newImagePath = RNFetchBlob.fs.dirs.DocumentDir + "/" + asset.fileName;
        await RNFetchBlob.fs.cp(asset.uri, newImagePath);
        console.log(`New Image Path: ${newImagePath}`);
        const fileExists = await RNFetchBlob.fs.exists(newImagePath);
        console.log(`Does the file exist in new location? ${fileExists}`);

        try {
          console.log('Attempting to upload to S3 using URL:', signedUrlData.signedRequest);
      
          const base64Data = await RNFetchBlob.fs.readFile(asset.uri, 'base64');
          const imageData = `data:${fileType};base64,${base64Data}`;
      
          console.log('Attempting to upload to S3 using URL:', signedUrlData.signedRequest);

          const uploadResponse = await RNFetchBlob.fetch(
              'PUT',
              signedUrlData.signedRequest,
              {
                  'Content-Type': `${fileType};BASE64`,
              },
              imageData,
          );
      
          const uploadResponseData = await uploadResponse.text();
          console.log('Upload Response:', uploadResponseData);
      
          if (uploadResponse.info().status !== 200) {
              console.error('Failed to upload image to S3. AWS Response:', uploadResponseData);
              return;
          }
          setUserAvatarUrl(signedUrlData.url);
      } catch (error) {
          console.error('Error during S3 upload:', error);
      }
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
