import { StyleSheet } from 'react-native';
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  Container: {
    // flex: 1,
    backgroundColor: Colors.dark,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    height: 28,
    width: 28,
  },
  headerIcon: {
    height: 24,
    width: 24,
  },
  headerLogo: {
    alignSelf: 'flex-end',
    borderRadius: 20,
    height: 50,
    justifyContent: 'flex-end',
    marginHorizontal: 2,
    width: 100,
  },
  logoContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
});
