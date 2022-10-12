import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class PersonalUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // avatar: this.props.Myposts[0].avatar,
        }
    }
    render() {
        const { Myposts, FavoritePosts, handleToEditPersonal } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.35 }}>
                    <View style={{ alignItems: 'center', paddingTop: 5 }}>
                        <Image
                            source={Myposts[0].avatar}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 75,
                                borderColor: 'gray',
                                borderWidth: 2,
                                // margin: 8,
                            }}
                        />
                        <Text>{Myposts[0].posterName}</Text>
                    </View>
                    <Text style={{ margin: 8 }}>{Myposts[0].introduce}</Text>
                </View>
                <View style={{ flex: 0.65, }}>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5 }}>
                        <View style={{ paddingTop: 15, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>貼文</Text>
                            <Text style={{ fontSize: 22 }}>{Myposts.length}</Text>
                        </View>
                        <View style={{ paddingTop: 15, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 }}>收藏文章</Text>
                            <Text style={{ fontSize: 22 }}>{FavoritePosts.length}</Text>
                        </View>
                    </View>
                    {/* <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            backgroundColor: '#fff', borderRadius: 10, elevation: 3, padding: 10, borderWidth: 1, borderColor: 'gray'
                        }}><TouchableOpacity onPress={() => handleToEditPersonal()}>
                                <Text>編輯個人檔案</Text>
                            </TouchableOpacity>
                        </View>
                    </View> */}
                </View>
            </View >
        )
    }

}