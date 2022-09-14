import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking, StatusBar } from 'react-native';
import styles from './SplashScreenStyle';
import { Helpers, Images } from 'App/Theme';
import { connect } from 'react-redux';
const axios = require('axios');

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.token !== '') {
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    }, 3000);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <View style={[Helpers.fillRowCenter, styles.container]}>
          <View style={Helpers.center}>
            <View style={styles.logoContainer}>
              <Image source={Images.JointLogo} resizeMode="contain" style={styles.logoImage} />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
