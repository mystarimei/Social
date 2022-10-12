import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function PosterContentDown(props) {
    const { posterPost: { photo, id }, handlePhotoDetail } = props
    return (
        <View style={{ padding: 3 }}>
            <TouchableOpacity onPress={() => handlePhotoDetail(id)}>
                <Image source={{ uri: photo }} style={{ width: 130, height: 130 }} />
            </TouchableOpacity>
        </View>
    )
}