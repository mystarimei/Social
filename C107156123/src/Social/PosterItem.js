import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

const PosterItem = (props) => {
  const { poster: { posterId, avatar, posterName }, handleContent } = props

  return (
    <TouchableOpacity onPress={() => handleContent(posterId)}>
      <View style={{ alignItems: 'center' }}>
        <Avatar avatar={avatar} />
        <Text>{posterName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PosterItem;
