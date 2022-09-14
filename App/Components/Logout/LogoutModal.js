import React, { Component } from 'react';
import { Alert, Modal, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './LogoutModalStyle';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { clearUser } from '../../Actions/Actions';
class LogoutModal extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Modal animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'flex-end',
                }}
                onPress={() => this.handleRedirect()}
              >
                <Image
                  source={require('../../Assets/Images/close.png')}
                  style={{ width: 12, height: 12 }}
                />
              </TouchableOpacity>
              <Text style={styles.menuText}>Menu</Text>
              <Text style={styles.modalText} onPress={() => this.logoutUser()}>
                Logout
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  logoutUser = () => {
    this.props.clearUser();
    this.props.navigation.navigate('LoginScreen');
  };

  handleRedirect = (screenname) => {
    this.props.closeModal();
    // this.props.navigation.navigate(screenname);
  };
}

const mapDispatchToProps = {
  clearUser,
};
const mapStateToProps = (state) => ({});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LogoutModal));
