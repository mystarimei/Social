import React from 'react';
import { StyleSheet, View, TextInput, Picker, Button, Text, Image, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default class EditPersonal extends React.Component {
    constructor(props) {
        super(props);
        const { posterself } = this.props
        this.state = {
            posterId: posterself.posterId,
            posterName: posterself.posterName,
            introduce: posterself.introduce,
            avatar: posterself.avatar
        };
    }

    handleOpenImageLibrary = () => {
        launchImageLibrary({}, this.handleSelectAvatar);
    };

    handleSelectAvatar = (result) => {
        if (!result.didCancel) {
            this.setState({ avatar: result.uri });
        }
        this.props.handleEditAvatar(result);
    };

    handleChangePosterName = (text) => {
        this.setState({
            posterName: text,
        })
    }

    handleChangeIntroduce = (text) => {
        this.setState({
            introduce: text,
        })
    }

    handleEditPress = () => {
        const { handleEditPersonal } = this.props;
        handleEditPersonal(this.state);
    }

    render() {
        const { posterName, introduce, avatar } = this.state
        return (
            <View>
                <View style={{ alignItems: 'center', borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
                    <Image source={avatar} style={{
                        width: 90,
                        height: 90,
                        borderRadius: 75,
                        borderColor: 'gray',
                        borderWidth: 2,
                    }} />
                    <TouchableOpacity onPress={() => this.handleOpenImageLibrary()}>
                        <Text style={{ marginTop: 10, backgroundColor: '#fff', borderRadius: 10, elevation: 3, padding: 10, borderWidth: 1, borderColor: 'gray', color: 'blue' }}>更換頭貼</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    // flex: 1,
                    justifyContent: 'space-between',
                    // backgroundColor: '#FFF',
                    borderWidth: 1,
                    borderColor: '#EEE',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginLeft: 10 }}>
                        <Text>姓名</Text>
                        <TextInput
                            value={posterName}
                            onChangeText={this.handleChangePosterName}
                            style={{
                                flex: 0.9,
                                borderBottomWidth: 1,
                                borderBottomColor: '#C0C0C0',
                                marginLeft: 43,
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <Text>個人介紹</Text>
                        <TextInput
                            value={introduce}
                            onChangeText={this.handleChangeIntroduce}
                            style={{
                                flex: 0.9,
                                borderBottomWidth: 1,
                                borderBottomColor: '#C0C0C0',
                                marginLeft: 15,
                            }}
                        />
                    </View>
                    <TouchableOpacity onPress={this.handleEditPress}>
                        <Text>46846</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}