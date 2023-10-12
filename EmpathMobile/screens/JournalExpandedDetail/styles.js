import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: -30,
    },
    title: {
      fontSize: 15,
      color: '#fff',
      marginTop: 5,
      marginLeft: 10,
      marginBottom: -20,
      //height:50,
      width:'97%',
      padding:10,
    },
    header: {
      fontSize: 20,
      marginTop: 70,
      marginLeft: 10,
    },
    icons: {
      fontSize: 20,
      color: '#CECECE',
    },
    textBox: {
        fontSize: 25,
        color: '#CECECE',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 18,
        width:'90%',
        height: 450,
        borderWidth:.7,
        borderColor:'#CECECE',
        padding:10,
    },
    buttonContainer: {
        marginTop: 20,
        position: 'fixed',
        backgroundColor: '#0064FF',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
    },
    image: {
      flex: 1, // Ensure the image takes up the entire available space
      width: '100%', // Adjust the width as needed
      height: '100%', // Adjust the height as needed
      resizeMode: 'stretch', // Adjust the resizeMode property as needed
      justifyContent: 'center', // Center the content within the image
    },
    imageContainer:{
      backgroundColor: 'rgba(255, 255, 300, 0)',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    }
  });

  export default styles;