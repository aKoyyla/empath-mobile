import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
  },
  image: {
	  flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
	  justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    color: '#CECECE',
    marginLeft: 20,
    marginBottom: -20,
  },
  summary: {
	  fontSize: 25,
    color: '#CECECE',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    width:'90%',
    height: 450,
    borderWidth:.7,
    borderColor:'#CECECE',
    padding:10,
  },
  buttonBack: {
    fontSize: 20,
    marginLeft: 18,
    color: '#CECECE',
    marginBottom: 5,
  },
  buttonGenerate: {
	textAlign: 'center',
  backgroundColor: '#0064FF',
	borderWidth: 1,
  borderRadius: 100,
	padding: 10,
  },
});

export default styles;
