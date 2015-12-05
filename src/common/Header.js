'use strict';

import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class Header extends Component {
    render () {
        let LeftComponent = this.props.LeftComponent;
        let RightComponent = this.props.RightComponent;
        return (
            <View style={styles.container}>
                <View style={styles.leftComponent}>
                    {(() => {
                        if (this.props.hasBack && this.props.navigator) {
                            return (
                                <TouchableOpacity style={{width: 50, height: 45, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                                    this.props.navigator.pop();
                                }}>
                                    <Icon
                                        name="fontawesome|chevron-left"
                                        color="#fff"
                                        size={20}
                                        style={{width:20, height:20}}/>
                               </TouchableOpacity>
                            );
                        } else if (LeftComponent) {
                            return LeftComponent
                        }
                    })()}
                </View>
                <Text style={styles.centerComponent}>{this.props.title}</Text>
                <View style={styles.rightComponent}> 
                    {RightComponent}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 65,
        paddingTop: 20,
        backgroundColor: "#b02633",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftComponent:  {
        width: 50,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerComponent: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    },
    rightComponent: {
        width: 50,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
});