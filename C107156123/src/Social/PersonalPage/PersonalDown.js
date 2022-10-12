import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { Dimensions } from 'react-native';
import Myposts from './Myposts';
import Favorite from './Favorite';
export default function PersonalUp(props) {
    const { MyPosts, FavoritePosts, handlePhotoDetail } = props
    return (
        <ScrollableTabView
            style={{ marginTop: 10 }}
            initialPage={0}
            renderTabBar={() => <DefaultTabBar />}
            tabBarTextStyle={{ fontSize: 18 }}
        >
            <Myposts
                tabLabel="我的貼文"
                MyPosts={MyPosts}
                handlePhotoDetail={handlePhotoDetail}
            />
            <Favorite
                tabLabel="我的收藏"
                FavoritePosts={FavoritePosts}
                handlePhotoDetail={handlePhotoDetail}
            />
        </ ScrollableTabView>
    )
}