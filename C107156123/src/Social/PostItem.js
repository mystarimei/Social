import React from 'react';
import { Dimensions, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Lightbox from 'react-native-lightbox';
import Edit from './images/Edit.png';
import unlikeIcon from './images/unlike.png';
import likeIcon from './images/like.png';
import unfavoriteimage from './images/unfavoriteimage.png';
import favoriteimage from './images/favoriteimage.png';
const PostItem = (props) => {
  const { post: { id, posterName, avatar, photo, comment, publish, likeCount, like, favorite }, handleLike, handleFavorite, handleToEditPost } = props
  return (
    <View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Image source={avatar} style={{ width: 34, height: 34, borderRadius: 30, borderWidth: 1, borderColor: '#DDDDDD' }} />
          <Text style={{ paddingLeft: 8 }}>{posterName}</Text>
        </View>
        <View style={{ paddingRight: 10 }}>
          <TouchableOpacity onPress={() => handleToEditPost(id)}>
            <Image source={Edit} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Lightbox navigator={props.navigator}>
          <Image source={{ uri: photo }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 2 }} />
        </Lightbox>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8, paddingLeft: 12 }}>
          <TouchableOpacity onPress={() => handleLike(id)}>
            <Image source={like ? likeIcon : unlikeIcon} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <Text style={{ paddingLeft: 10 }}>{`${likeCount} 個人按讚`}</Text>
        </View>
        <View style={{ paddingRight: 10, paddingTop: 8 }}>
          <TouchableOpacity onPress={() => handleFavorite(id)}>
            <Image source={favorite ? favoriteimage : unfavoriteimage} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <Text>{comment}</Text>
        <Text style={{ color: 'gray', paddingTop: 5 }}>{publish}</Text>
      </View>
    </View>
  );
};

export default PostItem;
