'use strict';

import React, {
    Component,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class ActivityItem extends Component {
    goToActivityDetail () {
        this.props.navigator.push('activityDetail');
    }
    render () {
        return (
            <TouchableHighlight underlayColor="#efefef" onPress={this.goToActivityDetail.bind(this)} style={styles.container}>
                <View>
                    <View style={styles.up}>
                        <Icon
                            name="fontawesome|user"
                            size={40}
                            style={{width: 40, height: 40}} />
                        <Text style={{color: "#333", marginLeft: 10}}>思聪</Text>
                        <Text style={{color: "#828282", marginLeft: 10}}>2012-12-1 00:21</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.text}>
                            时间: 12121212
                        </Text>
                        
                        <Text style={styles.text}>
                            地点: 12121212
                        </Text>

                        <Text style={styles.text}>
                            简介: 呵呵呵
                        </Text>
                    </View>
                    <View style={styles.down}>
                        <TouchableOpacity>
                            <Icon
                                name={"fontawesome|comments-o"}
                                size={20}
                                style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>参与</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                name={"fontawesome|thumbs-o-up"}
                                size={20}
                                style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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

    center: {
        padding: 10
    },

    down: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        borderColor: "#897d73",
        borderTopWidth: 1
    },
    text: {color: "#5d5d5d", marginTop: 10, marginBottom: 10}
});