/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors } from 'App/Theme';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  link: {
    color: Colors.green,
    fontSize: 22,
    marginTop: 50,
  },
  logoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 50,
    paddingHorizontal: 50,
  },
  logoImage: {
    height: 200,
    marginBottom: 40,
    marginTop: 40,
    width: 280,
  },
});
