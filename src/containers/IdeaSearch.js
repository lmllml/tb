'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class IdeaSearch extends Component {
    render () {
        return (
            <View>
                <View style={styles.header}>
                    <Icon 
                        name={"fontawesome|chevron-left"}
                        size={20}
                        color="#06c1ae"
                        style={{width: 20, height: 20}}/>

                    <View>
                        <TextInput style={styles.searchInput}/>
                    </View>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    header: {
        height: 64,
        marginTop: 20,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    searchInput: {
        flex: 1,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 
    }
})