import React from 'react';
import { SearchBar } from 'react-native-elements';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import SearchDown from './SearchDown';
import searchpage from './search.png'
export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchItems: [],
        }
    }

    updateSearch = (value) => {
        const { searchItems } = this.state
        const { posters } = this.props
        searchItems.length = 0
        if (value != '') {
            posters.map((poster) => {
                const SearchName = poster.posterName
                const Searchinclude = SearchName.includes(value)
                if (Searchinclude === true) {
                    searchItems.push(poster)
                }
            })
        }
        this.setState({
            search: value,
            searchItems: searchItems,
        })
    };

    render() {
        const { handleContent } = this.props
        const { search, searchItems } = this.state;
        console.log(searchItems)
        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    placeholder="Please Search ..."
                    value={search}
                    onChangeText={this.updateSearch}
                    leftIcon={searchpage}
                    leftIconContainerStyle={{width:25,height:25}}
                />
                <View>
                    {searchItems.map((searchItem) => {
                        return <SearchDown key={searchItem.posterId} searchItem={searchItem} handleContent={handleContent} />
                    })}
                </View>
            </View>
        );
    }
}