'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class SearchHeader extends Component {
    onSubmitEditing (e) {
        this.props.onSubmitEditing(e.nativeEvent.text);
    }

    render () {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Icon 
                        name={"fontawesome|chevron-left"}
                        size={20}
                        color="#06c1ae"
                        style={{width: 20, height: 20, marginRight: 10}}/>
                </TouchableOpacity>
                <View style={styles.searchInput}>
                    <Icon
                        name="fontawesome|search"
                        size={18}
                        color="#666"
                        style={{width: 18, height: 18, marginLeft: 5, marginRight: 5}}/>

                    <TextInput autoFocus={true} style={{flex: 1}} placeholder="请输入部门名称" onSubmitEditing={this.onSubmitEditing.bind(this)}/>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    header: {
        height: 64,
        paddingTop: 20,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        borderColor: '#ababab',
        borderBottomWidth: 1
    },
    searchInput: {
        flex: 1,
        height: 34,
        borderColor: '#cacaca',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})