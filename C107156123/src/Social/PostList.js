import React from 'react';
import { View, ScrollView } from 'react-native';
import PosterItem from './PosterItem';
import PostItem from './PostItem';

const PostList = (props) => {
  const { posts, handleLike, handleFavorite, handleToEditPost } = props
  return (
    <View>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} handleLike={handleLike} handleFavorite={handleFavorite} handleToEditPost={handleToEditPost} />
      })}
    </View>
  );
};

export default PostList;
