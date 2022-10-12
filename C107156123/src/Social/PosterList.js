import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import PosterItem from './PosterItem';
import defaultUserImage1 from './images/default_user_1.jpg';
import defaultUserImage2 from './images/default_user_2.jpg';


const PosterList = (props) => {
  const { posters, handleContent } = props
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.content}>
      {posters.map((poster) => {
        return (<PosterItem key={poster.posterId} poster={poster} handleContent={handleContent} />)
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
});

export default PosterList;
