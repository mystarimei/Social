import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FavoriteItem from './FavoriteItem';
export default function Favorite(props) {
    const { FavoritePosts,handlePhotoDetail } = props
    return (
        <View style={{flexDirection:'row', flexWrap: 'wrap' }}>
            {FavoritePosts.map((FavoritePost) => {
                return (
                    <FavoriteItem
                        key={FavoritePost.id}
                        FavoritePost={FavoritePost}
                        handlePhotoDetail={handlePhotoDetail}
                    />
                )
            })}
        </View>
    )
}