import React from 'react';
import styles from './LoaderStyle';
import { View, ActivityIndicator, Modal } from 'react-native';

const Loader = (props) => {
  const { loading, ...attributes } = props;
  return (
    // <View style={styles.container}>
    //   <ActivityIndicator size="large" color="#eb7a00" style={{ backgroundColor: 'transparent' }} />
    // </View>
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" animating={loading} color="#eb7a00" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
