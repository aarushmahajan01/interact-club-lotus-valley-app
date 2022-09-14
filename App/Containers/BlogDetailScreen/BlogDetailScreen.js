import React from 'react';
import { connect } from 'react-redux';
import { Config } from '../../Config/index';
import { View, ScrollView, Text } from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import styles from './BlogDetailScreenStyle';
import Loader from '../../Components/Loader/Loader';

const axios = require('axios');

class BlogDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingEnabled: false,
      blogDetailsData: '',
      blog_uuid: this.props.navigation.state.params.blogid || '',
    };
  }

  componentDidMount() {
    this.fetchBlogDetails();
  }

  fetchBlogDetails = () => {
    this.setState({
      isLoadingEnabled: true,
    });
    axios
      .get(`${Config.API_URL}/blogs/${this.state.blog_uuid}`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token}`,
          },
        },
      })
      .then(
        (response) => {
          this.setState({
            blogDetailsData: response.data.data,
            isLoadingEnabled: false,
          });
        },
        (error) => {
          console.log(error);
          console.log(error.response.data.errors.message);

          this.setState({
            isLoadingEnabled: false,
          });
        }
      );
  };

  render() {
    return this.state.isLoadingEnabled ? (
      <Loader />
    ) : (
      <>
        <View style={styles.outerContainer}>
          <AppHeader leftIcon="backIcon" backScreen="BlogListingScreen" />
          <ScrollView style={styles.container}>
            <Text style={styles.blogTitle}>{this.state?.blogDetailsData?.title}</Text>
            <Text style={styles.postedOn}>{this.state?.blogDetailsData?.posted_at}</Text>
            <View style={styles.blogBody}>
              <Text style={styles.para}>{this.state?.blogDetailsData?.description}</Text>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailScreen);
