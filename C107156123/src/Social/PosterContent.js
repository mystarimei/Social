import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import PosterContentUp from './PosterContentUp';
import PosterContentDown from './PosterContentDown';

function PosterContent(props) {
  const { poster, posterPosts, handleBack, handlePhotoDetail } = props
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.4 }}>
        <PosterContentUp poster={poster} posterPosts={posterPosts} handleBack={handleBack} />
      </View>
      <View style={{ borderColor: '#C0C0C0', borderWidth: 1 }} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', flex: 0.6 }}>
        {posterPosts.map((posterPost) => {
          return <PosterContentDown key={posterPost.id} posterPost={posterPost} handlePhotoDetail={handlePhotoDetail} />
        })}
      </View>
    </View>
  );
}

export default PosterContent;
