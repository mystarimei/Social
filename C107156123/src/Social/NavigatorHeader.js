import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import likeIcon from './images/likes.png';

const NavigatorHeader = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        padding: 10,
        elevation: 8,
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
      }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>首頁</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   content: {
//     flexDirection: 'row',
//     // justifyContent: 'space-between',
//     alignContent: 'center',
//     flexWrap: 'wrap',
//     // alignContent: 'center',
//     backgroundColor: '#F4F4F4',
//     borderBottomColor: '#C0C0C0',
//     borderBottomWidth: 1,
//     padding: 10,
//     elevation: 8,
//   },
//   likeContent: {
//     flex: 0.33,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   likeIcon: {
//     width: 28,
//     height: 28,
//   },
//   likeText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     paddingLeft: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   studentContent: { flex: 0.33 },
//   studentId: {
//     textAlign: 'right',
//   },
//   studentName: {
//     textAlign: 'right',
//   },
// });

export default NavigatorHeader;
