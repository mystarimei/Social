import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default function SearchDown(props) {
    const { searchItem: { posterId, posterName, avatar }, handleContent } = props
    console.log(props.searchItem)
    return (
        <TouchableOpacity onPress={() => handleContent(posterId)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
                <View>
                    <Image source={avatar} style={{ width: 50, height: 50, borderRadius: 30 }} />
                </View>
                <Text style={{ fontSize: 14, paddingLeft: 7 }}>{posterName}</Text>
            </View>
        </TouchableOpacity>
    )
}