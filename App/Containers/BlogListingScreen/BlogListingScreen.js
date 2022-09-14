import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, FlatList } from 'react-native';
import { Config } from '../../Config/index';
import Loader from '../../Components/Loader/Loader';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import BlogCard from '../../Components/BlogCard/BlogCard';
import styles from './BlogListingScreenStyle';

const axios = require('axios');

class BlogListingScreen extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      blogDataArr: [],
      isLoadingEnabled: false,
    };
  }
  componentDidMount() {
    this.fetchBlogData();
  }

  fetchBlogData = () => {
    this.setState({
      isLoadingEnabled: true,
    });

    axios
      .get(`${Config.API_URL}/blogs`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token}`,
          },
        },
      })
      .then(
        (response) => {
          this.setState({
            blogDataArr: response.data.data,
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
          <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
          <ScrollView style={styles.container}>
            <MainHeading text={`Interact Club Lotus Valley`} />
            <FlatList
              data={this.state.blogDataArr}
              renderItem={(item) => <BlogCard blogData={item} />}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogListingScreen);
