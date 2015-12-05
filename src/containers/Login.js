'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AlertIOS
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
        }).catch((error) => {
            AlertIOS.alert(error.message);
        });
    }

    onInputMisId (text) {
        this.setState({
            misId: text
        });
    }

    onInputPw (text) {
        this.setState({
            pw: text
        });
    }
    

    render () {
        let userColor = "#b2b2b2";
        let pwColor = "#b2b2b2";
        if (this.state.misId) {
            userColor = "#1c7ef6";
        }
        if (this.state.pw) {
            pwColor = "#1c7ef6";
        }

        return (
            <View style={styles.container}>
                <View style={{marginTop: 80, marginBottom: 40, justifyContent: 'center', alignItems: 'center', height: 80}}>
                    <Image
                        source={require('../imgs/avatar.png')}
                        style={{width: 80, height: 80, borderRadius: 40}}/>
                </View>

                <View style={{paddingLeft: 15, backgroundColor: "#fff", paddingRight: 15, borderBottomWidth: 1, borderTopWidth: 1, borderColor: "#d7d7d7"}}>
                    <View style={{height: 50, borderColor: "#dddddd", borderBottomWidth: 1, alignItems: 'center', flexDirection: 'row'}}>
                        <Icon
                            name="fontawesome|user"
                            color={userColor}
                            size={20}
                            style={{width: 20, height: 20, marginRight: 10}}/>
                        <TextInput style={{flex: 1}} onChangeText={this.onInputMisId.bind(this)} placeholder="请输入账户"/>
                    </View>
                    <View style={{height: 50, alignItems: 'center', flexDirection: 'row'}}>
                        <Icon
                            name="fontawesome|lock"
                            color={pwColor}
                            size={20}
                            style={{width: 20, height: 20, marginRight: 10}}/>
                        <TextInput secureTextEntry={true} style={{flex: 1}} onChangeText={this.onInputPw.bind(this)} placeholder="请输入密码"/>
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