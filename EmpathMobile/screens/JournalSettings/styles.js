import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  titleContainer: {
    marginBottom: 10,
    opacity:1,
  },
  input: {
    color:'#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    borderColor: 'white',
    borderWidth: .5,
  },
  inputTitle: {
    fontSize: 25,
    color:'#fff',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    borderColor: 'white',
    borderWidth: .5,
  },
  label: {
    color: 'white',
    marginTop: 20,
    fontSize: 18,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 20,
    margin: 5,
  },
  tagText: {
    fontSize: 12,
  },
  sliderContainer: {
    marginTop: 20,
  },
  sliderLabel: {
    fontSize: 16,
    color: '#fff',
  },
  slider: {
    width: '100%',
    
  },
  platformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 20,
  },
  platformButton: {
    backgroundColor: 'lightgray',
    padding: 12,
    borderRadius: 8,
    width: '23%',
    alignItems: 'center',
  },
  icon:{
    color: '#fff',
    marginTop: 15,
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: '#0064FF',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default styles;