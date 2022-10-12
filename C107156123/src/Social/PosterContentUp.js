import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import back from './images/back.png'

export default function PosterContentUp(props) {
    const { poster: { posterId, posterName, avatar, introduce }, posterPosts,handleBack } = props
    return (
        <View>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => handleBack()}>
                    <Image source={back} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                <Text style={styles.title}>{posterName}</Text>
            </View>
            <View style={{flexDirection: 'row' }}>
                <View style={{ flex: 0.35 }}>
                    <View style={{ alignItems: 'center', paddingTop: 5 }}>
                        <Image
                            source={avatar}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 75,
                                borderColor: 'gray',
                                borderWidth: 2,
                                // margin: 8,
                            }}
                        />
                        <Text>{posterName}</Text>
                    </View>
                    <Text style={{ margin: 8 }}>{introduce}</Text>
                </View>
                <View style={{ flex: 0.65, }}>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5 }}>
                        <View style={{ paddingTop: 15, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>貼文</Text>
                            <Text style={{ fontSize: 22 }}>{posterPosts.length}</Text>
                        </View>
                    </View>
                </View>
            </View >
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        backgroundColor: '#F4F4F4',
        borderBottomColor: '#C0C0C0',
        // borderBottomWidth: 1,
        padding: 10,
        // elevation: 8,
    },
    title: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})