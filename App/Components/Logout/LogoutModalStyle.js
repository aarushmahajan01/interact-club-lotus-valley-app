import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'App/Theme';
export default StyleSheet.create({
  centeredView: {
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7);',
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  menuText: {
    ...Fonts.textBold,
    fontSize: 24,
  },
  modalText: {
    borderBottomColor: Colors.orangeDark,
    borderBottomWidth: 1,
    color: Colors.orangeDark,
    fontSize: 18,
    marginTop: 20,
    paddingBottom: 5,
    textAlign: 'center',
    ...Fonts.textSemiBold,
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
    height: '35%',
    opacity: 1,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
    zIndex: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
