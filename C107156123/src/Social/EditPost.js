import React from 'react';
import { StyleSheet, View, TextInput, Picker, Button, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
export default class EditPost extends React.Component {
    constructor(props) {
        super(props)

        const { Editposts } = props

        this.state = {
            id:Editposts.id,
            posterName: Editposts.posterName,
            avatar: Editposts.avatar,
            photo: Editposts.photo,
            comment: Editposts.comment,
        };
    }
    handleChangeComment = (value) => {
        this.setState({
            comment: value
        })
    }

    handleEdit = () => {
        const { handleEditPost } = this.props;
        // console.log(handleEditPost)
        handleEditPost(this.state);
    }
    
    render() {
        const { posterName, avatar, photo, comment } = this.state
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={avatar} style={{
                        width: 34, height: 34, borderRadius: 30, borderWidth: 1, borderColor: '#DDDDDD', margin: 8
                    }} />
                    <Text style={{ color: 'gray' }}>{posterName}</Text>
                </View>
                <View>
                    <Image source={{ uri: photo }} style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 2 }} />
                </View>
                <View>
                    <TextInput
                        value={comment}
                        onChangeText={this.handleChangeComment}
                        multiline
                        style={{
                            height: 100, margin: 5
                        }}
                    />
                </View>
                <Button title="編輯貼文" onPress={this.handleEdit} />
            </View>
        )
    }
}