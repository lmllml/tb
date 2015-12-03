'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class IdeaDetailBox extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Icon
                        name={"fontawesome|user"}
                        size={40}
                        style={{width: 40, height: 40}}/>
                    <Text>思聪</Text>
                </View>
                <View style={styles.down}>
                    <Text>Hello World!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: "#fff",
        marginBottom: 10
    },

    up: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    down: {
        padding: 10
    }
});