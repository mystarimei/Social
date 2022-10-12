import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MypostItem from './MypostItem';
export default function Myposts(props) {
    const {
        MyPosts,
        handlePhotoDetail
    } = props
    return (
        <View style={{flexDirection:'row', flexWrap: 'wrap' }}>
            {MyPosts.map((MyPost) => {
                return (
                    <MypostItem
                        key={MyPost.id}
                        MyPost={MyPost}
                        handlePhotoDetail={handlePhotoDetail}
                    />
                )
            })}
        </View>
    )
}