// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import styles from './styles';
// import { getSignedUrl } from '../../api/authApi';
// const RNFetchBlob = require('rn-fetch-blob').default;

// const avatarImages = [
//   require('../../assets/images/UserProfile/User1.png'),
//   require('../../assets/images/UserProfile/User2.png'),
//   require('../../assets/images/UserProfile/User3.png'),
//   require('../../assets/images/UserProfile/User4.png'),
//   require('../../assets/images/UserProfile/User5.png'),
//   require('../../assets/images/UserProfile/User6.png'),
//   require('../../assets/images/UserProfile/User7.png'),
//   require('../../assets/images/UserProfile/User8.png'),
// ];

// const UserProfile = () => {
//   const [selectedAvatar, setSelectedAvatar] = useState(avatarImages[0]);
//   const [userAvatarUrl, setUserAvatarUrl] = useState('');

//     launchImageLibrary(options, async response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         console.log('ImagePicker Response:', response);

//         const asset = response.assets[0];
//         const fileName = asset.fileName || `${new Date().getTime()}.jpg`;
//         console.log('Asset Details:', {
//           fileName: asset.fileName,
//           type: asset.type,
//           uri: asset.uri,
//         });

//         let fileType = asset.type;
//         const fileExtension = fileName.split('.').pop().toLowerCase();
//         console.log('Deduced File Extension:', fileExtension);

//         switch (
//           fileExtension
//         ) {
//           case 'jpg':
//           case 'jpeg':
//             fileType = 'image/jpeg';
//             break;
//           case 'png':
//             fileType = 'image/png';
//             break;
//           case 'gif':
//             fileType = 'image/gif';
//             break;
//           default:
//             console.log('Unknown file extension received:', fileExtension);
//             return;
//         }

//         getSignedUrl(fileName, fileType)
//           .then(signedUrlData => {
//             const { signedRequest } = signedUrlData;
//           };
//   };

//   export default UserProfile;


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
          .then((signedUrlData) => {
            const { signedRequest } = signedUrlData;

            // Upload the image using RNFetchBlob or another library
            // You need to implement the upload logic here
            // Example code (use your preferred library for uploading):
            RNFetchBlob.fetch(
              'PUT',
              signedRequest,
              {
                'Content-Type': fileType,
              },
              RNFetchBlob.wrap(asset.uri),
            )
              .then((response) => {
                if (response.info().status === 200) {
                  // Image successfully uploaded
                  setUserAvatarUrl(signedRequest);
                } else {
                  console.log('Image upload failed');
                }
              })
              .catch((error) => {
                console.log('Image upload error:', error);
              });
          })
          .catch((error) => {
            console.log('Error getting signed URL:', error);
          });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={selectedAvatar} style={styles.avatar} />
      <TouchableOpacity onPress={launchImagePicker}>
        <Text>Change Avatar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
