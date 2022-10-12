import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button } from 'react-native';
import { Router, Stack, Scene, Actions, Tabs } from 'react-native-router-flux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: null,
            photo: null

        };
    }
    handleOpenCamera = () => {
        launchCamera({}, this.handleSelectPhoto)
    }

    handleOpenImageLibrary = () => {
        launchImageLibrary({}, this.handleSelectPhoto)
    }

    handleSelectPhoto = (result) => {
        if (!result.didCancel) {
            this.setState({ photo: result.uri });
        }
    }

    handleAddPost = () => {
        const { handleAddPost } = this.state
        handleAddPost(this.state);
    }

    render() {
        const { photo, comment } = this.props;
        console.log(photo)
        return (
            <View>
                <View>
                    <Text style={styles.label}>餐點圖片</Text>
                    <Image
                        source={{ uri: !photo ? 'https://i.imgur.com/5l6dHWc.png' : photo }}
                        style={styles.image}
                    />
                </View>
                <View>
                    <Button title="從相機拍照" onPress={this.handleOpenCamera} />
                    <Button title="從相簿選擇" onPress={this.handleOpenImageLibrary} />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#EEE',
    },
    imageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    imageHeader: { flexDirection: 'row', alignItems: 'center' },
    image: { width: 100, height: 100, marginLeft: 15 },
    item: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#C0C0C0',
        marginLeft: 15,
    },
    switch: {
        marginLeft: 10,
    },
});
