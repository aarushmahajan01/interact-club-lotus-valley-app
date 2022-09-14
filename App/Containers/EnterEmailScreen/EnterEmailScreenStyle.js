import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  // logoImage: {
  //   height: 110,
  //   width: 'auto',
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
    width: 250,
  },
  text: {
    ...Fonts.textSemiBold,
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 25,
  },
  TextLabel: {
    color: Colors.dark,
    fontSize: 15,
    paddingLeft: 9,
    textTransform: 'uppercase',
    ...Fonts.textSemiBold,
    letterSpacing: 0.5,
  },
  TextInput: {
    ...Fonts.textRegular,
    backgroundColor: '#fbf5f3',
    borderRadius: 5,
    borderWidth: 0,
    height: 44,
    marginTop: 5,
    paddingLeft: 10,
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
  btnSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSecondaryText: {
    color: Colors.orangeDark,
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
});
