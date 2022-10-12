import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NavigatorHeader from './NavigatorHeader';
import PosterList from './PosterList';
import PostList from './PostList';


class First extends React.Component {
  render() {
    const { posters, posts, handleLike, handleContent, handleFavorite, handleToEditPost } = this.props

    return (
      <View style={styles.container}>
        <NavigatorHeader />
        <ScrollView>
          <View>
            <PosterList posters={posters} handleContent={handleContent} />
            <View style={styles.hr} />
            <PostList posts={posts} handleLike={handleLike} handleFavorite={handleFavorite} handleToEditPost={handleToEditPost} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr: {
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
  },
});

export default First;
