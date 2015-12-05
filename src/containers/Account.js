'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Service from '../service';
import { Icon } from 'react-native-icons';

export default class Account extends Component {
    constructor (props) {
        super(props);
        this.state = {
            account: {}
        };
    }

    componentDidMount () {
        this.mounted = true;
        this.fetchAccount();
    }

    componentWillMount () {
        this.mounted = false;
    }

    fetchAccount () {
        Service.getAccount().then((account) => {
            if (this.mounted) {
                this.setState({
                    account
                });
            }
        });
    }

    goToMyIdeaList () {
        this.props.navigator.push('myIdea')
    }

    goToCareIdeaList () {
        this.props.navigator.push('careIdea');
    }

    goToMyActivity () {
        this.props.navigator.push('myActivity');
    }

    logout () {
        Service.logout().then(() => {
            this.props.navigator.push('home');
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Image
                        source={{uri: this.state.account.avatar}}
                        style={{width: 60, height: 60, borderRadius: 30, marginBottom: 5}}/>
                    
                    <Text style={{color: "#fff", marginBottom: 5}}>
                        {this.state.account.name}
                    </Text>
                    <Text style={{color: "#fff", marginBottom: 5}}>
                        {this.state.account.mobile}
                    </Text>
                    <Text style={{color: "#fff", paddingLeft: 40, paddingRight: 40, textAlign: 'center'}}>
                        {(() => {
                            if (this.state.account.orgInfo) {
                                return this.state.account.orgInfo.slice(1);
                            }
                        }())}
                    </Text>
                </View>

                <TouchableOpacity onPress={this.goToCareIdeaList.bind(this)} style={[styles.section, {borderTopWidth: 1, borderColor: '#e6e6e6'}]}>
                    <Text style={styles.sectionTitle}>
                        我关注的点子
                    </Text>

                    <Icon
                        name={"fontawesome|angle-right"}
                        size={20}
                        color="#b3b3b3"
                        style={{width: 20, height: 20}}/>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.goToMyIdeaList.bind(this)} style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        我的点子
                    </Text>

                    <Icon
                        name={"fontawesome|angle-right"}
                        size={20}
                        color="#b3b3b3"
                        style={{width: 20, height: 20}}/>
                </TouchableOpacity>
                

                <TouchableOpacity onPress={this.goToMyActivity.bind(this)} style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        我参与的活动
                    </Text>

                    <Icon
                        name={"fontawesome|angle-right"}
                        size={20}
                        color="#b3b3b3"
                        style={{width: 20, height: 20}}/>
                </TouchableOpacity> 

                <TouchableOpacity onPress={this.logout.bind(this)} style={{height: 40, marginTop: 20, backgroundColor: "#fff", justifyContent: "center"}}>
                    <Text style={{color: "red", textAlign: 'center'}}>退出登录</Text>
                </TouchableOpacity>
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
        height: 180,
        backgroundColor: "#b02633",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    section: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: '#e6e6e6',
        borderBottomWidth: 1
    },

    sectionTitle: {
        flex: 1,
        color: "#4b4b4b"
    }
});