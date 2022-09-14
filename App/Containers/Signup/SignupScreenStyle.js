/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  inputContainer: {
    marginTop: 24,
  },
  TextLabel: {
    color: Colors.dark,
    fontSize: 15,
    textTransform: 'uppercase',
    ...Fonts.textSemiBold,
    letterSpacing: 0.5,
    paddingLeft: 6,
  },
  TextInput: {
    ...Fonts.textRegular,
    backgroundColor: '#fbf5f3',
    borderRadius: 5,
    borderWidth: 0,
    marginTop: 5,
    paddingLeft: 10,
  },

  btnPrimary: {
    alignItems: 'center',
    backgroundColor: '#eb7a00',
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  logoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 80,
    paddingHorizontal: 100,
  },
  logoImage: {
    height: 70,
    marginBottom: 20,
    marginTop: 40,
    width: 150,
  },
  // logoImage: {
  //   height: 50,
  //   marginTop: 20,
  //   width: 'auto',
  // },
  btnSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnSecondaryText: {
    color: Colors.orangeDark,
    fontSize: 16,
    textTransform: 'uppercase',
    ...Fonts.textMedium,
  },
  error: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
