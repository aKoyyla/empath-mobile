import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: 0,
    paddingTop: 45,
    padding: 0,
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: '#A8A8A8',
    textAlign: 'left',
    fontWeight: 400,
    marginTop: 0,
  },
  bodySection: {
    flex: 2,
    padding: 20,
    backgroundColor: '#1F1F1F',
  },
  input: {
    borderColor: '#8C8C8C',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    height: 50,
    color: 'white',
  },
  button: {
    borderRadius: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonActive: {
    backgroundColor: '#0081F8',
  },
  buttonInactive: {
    backgroundColor: '#252525',
  },
  buttonText: {
    color: '#777777',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#FFFFFF',
  },
  label: {
    color: '#787878',
    marginBottom: 5,
  },
  agreementContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 25,
  },
  agreementText: {
    color: '#909090',
    fontSize: 11,
    textAlign: 'center',
  },
  agreementTextPressable: {
    color: '#909090',
    fontSize: 11,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    borderRadius: 5,
    padding: 0,
    marginTop: 10,
    overflow: 'hidden',
  },
  buttonInner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  switchText: {
    fontSize: 14,
    color: '#A8A8A8',
    marginTop: 20,
    textAlign: 'center',
  },
  switchAction: {
    color: '#0081F8',
    textDecorationLine: 'underline',
  },
});

export default styles;
