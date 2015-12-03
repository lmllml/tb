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

export default class IdeaItem extends Component {
    goToIdeaDetail () {
        this.props.navigator.push('ideaDetail');
    }

    render () {
        return (
            <TouchableHighlight underlayColor="#efefef" onPress={this.goToIdeaDetail.bind(this)} style={styles.container}>
                <View>
                    <View style={styles.up}>
                        <Icon
                            name={"fontawesome|user"}
                            size={40}
                            style={{width: 40, height: 40}}/>
                        <Text>思聪</Text>
                        <Text style={{marginLeft: 10, color: "#828282"}}>截止到2015-07-12</Text>
                        <Text style={{marginLeft: 10, color: "#828282"}}>5/7</Text>
                    </View>

                    <View style={styles.center}>
                        <Text>Hello World!</Text>
                    </View>

                    <View style={styles.down}>
                        <TouchableOpacity>
                            <Icon
                                name={"fontawesome|comments-o"}
                                size={20}
                                style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>GO</Text>
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
        marginBottom: 20
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
    }
});