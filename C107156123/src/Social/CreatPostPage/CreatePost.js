import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import camera from './images/camera.png'
import photoalbum from './images/Photoalbum.png'
export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            comment: null,
        }
    }
    handleChangeComment = (text) => {
        this.setState({
            comment: text
        });
    };
    handleOpenCamera = () => {
        launchCamera({}, this.handleSelectPhoto);
    };

    handleOpenImageLibrary = () => {
        launchImageLibrary({}, this.handleSelectPhoto);
    };

    handleSelectPhoto = (result) => {
        if (!result.didCancel) {
            this.setState({ photo: result.uri });
        }
    };


    handleAddPress = () => {
        const { handleAddPost } = this.props;
        handleAddPost(this.state);
        this.setState({
            photo: null,
            comment: null
        })
    }
    render() {
        const { photo, comment } = this.state
        console.log(photo)
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
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
                    }}>貼文</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.handleOpenCamera}>
                            <Image source={camera} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 5 }}>從相機拍照</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={this.handleOpenImageLibrary}>
                            <Image source={photoalbum} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                        <Text style={{ paddingTop: 5 }}>從相簿選取</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 200 }}>
                    <View>
                        <Image
                            source={{ uri: !photo ? 'https://i.imgur.com/5l6dHWc.png' : photo }}
                            style={{ width: 150, height: 150, marginTop: 10 }}
                        />
                    </View>
                    <View style={{ height: 200 }}>
                        <TextInput
                            value={comment}
                            onChangeText={this.handleChangeComment}
                            keyboardType="default"
                            multiline
                            placeholder="分享你的故事..."
                            numberOfLines={8}
                            style={{ borderColor: 'gray', borderWidth: 1, width: 150, marginTop: 10 }}
                        />
                    </View>
                </View>
                <Button
                    title='分享'
                    onPress={this.handleAddPress}
                />
                <View>
                    <Image />
                </View>
            </View>
        )
    }
}