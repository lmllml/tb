'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Service from '../service';
import { Icon } from 'react-native-icons';

export default class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            misId: ''
        };
    }

    login () {
        Service.login(this.state.misId).then(() => {
            this.props.navigator.push('home');
        });
    }

    onInputMisId (text) {
        this.setState({
            misId: text
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={{marginTop: 160}}>
                    <Image
                        style={{width: 80, height: 80, borderRadius: 40}}/>
                </View>
                <View style={{mariginTop: 70, paddingLeft: 15, paddingRight: 15, borderBottomWidth: 1, borderTopWidth: 1, borderColor: "#d7d7d7"}}>
                    <View style={{height: 50, borderColor: "#dddddd", borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <Icon
                            name="fontawesome|user"
                            size={20}
                            style={{width: 20, height: 20, marginRight: 10}}/>
                        <TextInput style={{flex: 1}} onChangeText={this.onInputMisId.bind(this)} placeholder="请输入账户"/>
                    </View>
                    <View style={{height: 50, alignItems: 'center', flexDirection: 'row'}}>
                        <Icon
                            name="fontawesome|user"
                            size={20}
                            style={{width: 20, height: 20, marginRight: 10}}/>
                        <TextInput style={{flex: 1}} placeholder="请输入密码"/>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.login.bind(this)}>
                    <Text style = {{color: "#fff"}}>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    button: {
        height: 40,
        borderRadius: 3,
        backgroundColor: "#ff8505",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    }
});