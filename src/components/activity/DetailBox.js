'use strict';

import React, {
    Component,
    Text,
    StyleSheet,
    View
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class ActivityItem extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Icon
                        name="fontawesome|user"
                        size={40}
                        style={{width: 40, height: 40}} />
                    <Text style={{color: "#333", marginLeft: 10}}>思聪</Text>
                    <Text style={{color: "#828282", marginLeft: 10}}>2012-12-1 00:21</Text>
                </View>
                
                <Text style={styles.text}>
                    时间: 12121212
                </Text>
                
                <Text style={styles.text}>
                    地点: 12121212
                </Text>

                <Text style={styles.text}>
                    简介: 呵呵呵
                </Text>


                <Text style={styles.text}>
                    详情: 呵呵呵
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 10
    },
    up: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {color: "#5d5d5d", marginTop: 10, marginBottom: 10}
});