/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  TextInput: {
    ...Fonts.textRegular,
    backgroundColor: '#fbf5f3',
    borderRadius: 5,
    borderWidth: 0,
    height: 44,
    marginTop: 5,
    paddingLeft: 10,
  },
  TextLabel: {
    color: Colors.dark,
    fontSize: 15,
    paddingLeft: 9,
    textTransform: 'uppercase',
    ...Fonts.textSemiBold,
    letterSpacing: 0.5,
  },
  btnPrimary: {
    alignItems: 'center',
    backgroundColor: Colors.orangeDark,
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  forgotPwdText: {
    ...Fonts.textMedium,
    fontSize: 16,
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 25,
  },
  link: {
    color: Colors.orangeDark,
  },
  logoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 80,
    paddingHorizontal: 60,
  },

  logoImage: {
    height: 130,
    marginBottom: 40,
    marginTop: 40,
    width: 240,
  },
  signupContainer: {
    marginTop: 20,
  },
  signupText: {
    alignSelf: 'center',
  },
});
