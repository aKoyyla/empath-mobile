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

        getSignedUrl(fileName, fileType)
          .then(signedUrlData => {
            const { signedRequest } = signedUrlData;
          </Text>
        </View>
      </View>
    );
  };

  export default UserProfile;