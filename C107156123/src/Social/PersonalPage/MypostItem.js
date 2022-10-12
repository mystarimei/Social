import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MypostItem = (props) => {
    const {
        MyPost: { id, posterId, posterName, avatar, photo, comment, publish, likeCount }, handlePhotoDetail
    } = props
    return (
        <View style={{ padding: 3 }}>
            <TouchableOpacity onPress={() => handlePhotoDetail(id)}>
                <Image source={{ uri: photo }} style={{ width: 130, height: 130 }} />
            </TouchableOpacity>
        </View>
    )
}
export default MypostItem;