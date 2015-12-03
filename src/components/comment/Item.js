'use strict';

import React, {
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class CommentItem extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Icon 
                        name={'fontawesome|user'}
                        size={40}
                        style={{width: 40, height: 40}}/>
                </View>
                <View style={styles.right}>
                    <Text style={{color: "#333", marginBottom: 10}}>
                        思聪
                    </Text>

                    <Text style={{color: "#828282", marginBottom: 10}}>
                        12:03 14:45
                    </Text>

                    <Text style={{color: "#5d5d5d"}}>
                        呵呵呵呵
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#dadada",
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
        
    left: {
        width: 60,
        alignItems: 'center'
    },

    right: {
        flex: 1
    }
});