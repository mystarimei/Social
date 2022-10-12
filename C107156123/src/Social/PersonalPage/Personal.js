import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import PersonalUp from './PersonalUp';
import PersonalDown from './PersonalDown';

function Personal(props) {
    const {
        MyPosts,
        FavoritePosts,
        handleToEditPersonal,
        handlePhotoDetail
    } = props
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: 'row',
                    // alignContent:'center',
                    backgroundColor: '#F4F4F4',
                    padding: 10,
                    elevation: 8,
                    borderBottomColor: '#C0C0C0',
                    borderBottomWidth: 1,
                }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>個人簡介
                </Text>
            </View>
            <View style={{ flex: 0.35 }}>
                <PersonalUp
                    Myposts={MyPosts}
                    FavoritePosts={FavoritePosts}
                    handleToEditPersonal={handleToEditPersonal}
                />
            </View>
            <View style={{ flex: 0.65 }}>
                <PersonalDown
                    MyPosts={MyPosts}
                    FavoritePosts={FavoritePosts}
                    handlePhotoDetail={handlePhotoDetail}
                />
            </View>
        </View>
    )
}
export default Personal;