import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import back from './images/back.png'
import unlikeIcon from './images/unlike.png';
import likeIcon from './images/like.png';
import unfavoriteimage from './images/unfavoriteimage.png';
import favoriteimage from './images/favoriteimage.png';

export default function PhotoDetail(props) {
    const { posterPhotos: { id, posterName, avatar, comment, publish, photo, likeCount, like, favorite, postId }, handleBack, handleLike, handleFavorite, handlePhotoRight } = props
    return (
        <View>
            <View style={styles.content}>
                <TouchableOpacity onPress={() => handleBack()}>
                    <Image source={back} style={{ width: 25, height: 25 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>貼文</Text>
                <Text style={styles.title}>{posterName}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 20 }}>
                <View>
                    <View style={{ padding: 15, width: 300, height: 500, backgroundColor: '#D0D0D0', borderRadius: 30, borderWidth: 1.5, borderColor: '#484891', borderStyle: 'dashed' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                            <Image source={avatar} style={{ width: 34, height: 34, borderRadius: 30, borderWidth: 1, borderColor: '#DDDDDD' }} />
                            <Text style={{ paddingLeft: 8 }}>{posterName}</Text>
                        </View>
                        <View>
                            <Image source={{ uri: photo }} style={{ width: Dimensions.get('window').width - 140, height: Dimensions.get('window').width - 220 }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 8 }}>
                                <TouchableOpacity onPress={() => handleLike(id)}>
                                    <Image source={like ? likeIcon : unlikeIcon} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>
                                <Text style={{ paddingLeft: 10 }}>{`${likeCount} 個人按讚`}</Text>
                            </View>
                            <View style={{ paddingTop: 8 }}>
                                <TouchableOpacity onPress={() => handleFavorite(id)}>
                                    <Image source={favorite ? favoriteimage : unfavoriteimage} style={{ width: 25, height: 25 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ paddingTop: 5 }}>
                            <Text>{comment}</Text>
                            <Text style={{ color: '#0066CC', paddingTop: 5 }}>{publish}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray'
    },
})