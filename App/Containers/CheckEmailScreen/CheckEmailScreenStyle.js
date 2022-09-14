import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  // logoImage: {
  //   height: 110,
  //   // width: 'auto',
  //   marginBottom: 40,
  //   marginTop: 40,
  // },
  logoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 80,
    paddingHorizontal: 60,
  },
  logoImage: {
    height: 100,
    marginBottom: 40,
    marginTop: 40,
    width: 150,
  },
  text: {
    ...Fonts.textSemiBold,
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
  },
  btnPrimary: {
    alignItems: 'center',
    backgroundColor: Colors.orangeDark,
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
});
