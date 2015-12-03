'use strict';

import React, {
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class Account extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Icon 
                        name={"fontawesome|user"}
                        size={40}
                        style={{width: 40, height: 40, marginBottom: 10}}/>
                    <Text style={{color: "#fff", marginBottom: 10}}>
                        思聪
                    </Text>
                    <Text style={{color: "#fff", marginBottom: 10}}>
                        13817899872
                    </Text>
                    <Text style={{color: "#fff"}}>
                        总部/外卖事业群/商超业务部
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        我的点子
                    </Text>

                    <Icon
                        name={"fontawesome|chevron-right"}
                        size={20}
                        color="#000"
                        style={{width: 20, height: 20}}/>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        我的活动
                    </Text>

                    <Icon
                        name={"fontawesome|chevron-right"}
                        size={20}
                        color="#000"
                        style={{width: 20, height: 20}}/>
                </View> 
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    up: {
        paddingTop: 20,
        height: 200,
        backgroundColor: "#b02633",
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#fff",
    },

    sectionTitle: {
        flex: 1
    }
});