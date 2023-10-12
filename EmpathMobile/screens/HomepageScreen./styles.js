import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1F1F1F',
    
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginRight: 10,
    borderRadius: 100,
  },
  tabText: {
    color: '#FFFFFF',
    opacity: 0.6,
  },
  selectedTab: {
    backgroundColor: '#555555',
  },
  selectedTabText: {
    fontWeight: 'bold',
    opacity: 1,
  },
  entriesContainer: {
    flexGrow: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    padding: 20,
  },

  emptyEntriesContainer: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  entries: {
    flex: 1,
    padding: 10,
    backgroundColor: '#171717',
    alignItems: 'center',
  },
  entry: {
    height: 99,
    width: '100%',
    padding: 20,
    backgroundColor: '#1F1F1F',
    borderRadius: 19,
    marginBottom: 20,
  },
  entryTextContainer: {
    flexDirection: 'row', // Display text vertically
    width: '100%',
    justifyContent: 'space-between',
  },
  entrySubTextContainer: {
    flexDirection: 'row', // Display text vertically
    justifyContent: 'space-between', // Align text to the top
  },
  entryHeader: {
    fontSize: 19,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    maxWidth: '95%',
    color: '#FFFFFF',
  },
  entrySubHeader: {
    fontSize: 12,
    fontFamily: 'Inter',
    color: '#838383',
    backgroundColor: '#272727',
    padding: 5,
    marginTop: 7,
    borderRadius: 4,
    overflow: 'hidden',
  },
  entryDayCounter: {
    fontSize: 12,
    fontFamily: 'Inter',
    color: '#838383',
    marginTop: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 104,
    padding: 20,
    backgroundColor: '#1F1F1F',
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    height: 27,
    width: 27,
  },
  footerText: {
    color: '#838383',
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    marginTop: 5,
  },
  addButton: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -65,
  },
  selectedFooter: {
    backgroundColor: 'blue',
    height: 5,
    width: 90,
    position: 'absolute',
    top: 0,
    marginTop: -20,
  },
  addEntryTextHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addEntryTextSubHeader: {
    color: '#FFFFFF',
    opacity: 0.31,
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 'normal',
  },
});

export default styles;