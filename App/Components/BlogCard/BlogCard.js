import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './BlogCardStyle';

class BlogCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props?.blogData?.item?.description,
      title: this.props?.blogData?.item?.title,
      time: this.props?.blogData?.item?.posted_at,
      id: this.props?.blogData?.item?.id,
    };
  }

  setBlogId = (id) => {
    this.props.navigation.navigate('BlogDetailScreen', { blogid: id });
  };

  render() {
    const { title, description, time, id } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.blogCard}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.time}>{time}</Text>
          <TouchableOpacity
            style={styles.readMoreBtn}
            activeOpacity={0.8}
            onPress={() => this.setBlogId(id)}
          >
            <Text style={styles.readMoreBtnText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleRedirect = (screenname) => {
    this.props.navigation.navigate(screenname);
  };
}

export default withNavigation(BlogCard);
