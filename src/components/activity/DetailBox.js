'use strict';

import React, {
    Component,
    Text,
    Image,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import moment from 'moment';
import Service from '../../service';
import { Icon } from 'react-native-icons';

export default class ActivityItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            detail: props.detail
        };
    }

    componentWillReceiveProps (props) {
        this.setState({
            detail: props.detail
        });
    }

    participate () {
        Service.participateActivity(this.state.detail.activity.id);
        let detail = this.state.detail;
        detail.participate = true;
        detail.participateNum += 1;
        this.setState({
            detail
        });
    }

    unparticipate () {
        Service.participateActivity(this.state.detail.activity.id);
        let detail = this.state.detail;
        detail.participate = false;
        detail.participateNum -= 1;
        this.setState({
            detail
        });
    }

    startActivity () {
        Service.startActivity(this.state.detail.activity.id);
        let detail = this.state.detail;
        detail.activity.status = 2;
        this.setState({
            detail
        });
    }

    endActivity () {
        Service.endActivity(this.state.detail.activity.id);
        let detail= this.state.detail;
        detail.activity.status = 3;
        this.setState({
            detail
        });
    }

    componentWillUnMount () {
        this.mounted = false;
    }

    render () {
        if (!this.state.detail) {
            return (<View></View>);
        }
        return (
            <View style={styles.container}>
                <View style={styles.up}>
                    <Image
                        source={{uri: this.state.detail.activity.avatar}}
                        style={{width: 40, height: 40, borderRadius: 20}}/>
                    <Text style={{color: "#333", marginLeft: 10}}>{this.state.detail.activity.misName}</Text>
                    <Text style={{color: "#828282", marginLeft: 10, marginRight: 10}}>{moment(this.state.detail.activity.ctime).format('YYYY-MM-DD hh:mm')}</Text>
                      {(()=> {
                        if (this.state.detail.activity.status === 2) {
                            return (
                                <Text style={{color: "gray"}}>活动开始</Text>
                            );    
                        } else if (this.state.detail.activity.status === 3) {
                            return (
                                <Text style={{color: "gray"}}>活动结束</Text>
                            );    
                        } else {
                                if (!this.state.detail.participate) {
                                    return (
                                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.participate.bind(this)}>
                                            <Text style={{color: "red"}}>GO</Text>
                                        </TouchableOpacity>
                                    );    
                                } else {
                                    return (
                                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.unparticipate.bind(this)}>
                                            <Text style={{color: "gray"}}>NOT GO</Text>
                                        </TouchableOpacity>
                                    );
                                }    
                            }
                            
                        })()}
                    <Text style={{color: "green", marginLeft: 10}}>{this.state.participateNum}人</Text> 
                </View>
                
                <Text style={styles.text}>
                    时间 : {moment(this.state.detail.activity.startTime).format('YYYY-MM-DD hh:mm')}至
                    {moment(this.state.detail.activity.endTime).format('YYYY-MM-DD hh:mm')} 
                </Text>
                
                <Text style={styles.text}>
                    地点 : {this.state.detail.activity.location}
                </Text>

                <Text style={styles.text}>
                    简介 : {this.state.detail.activity.brief}
                </Text>


                <Text style={styles.text}>
                    详情 : {this.state.detail.activity.content}
                </Text>

                <Text style={styles.text}>
                    参与者:
                    {(() => {
                        return this.state.detail.participateUsers.map(function (user) {
                            return user.name + '、'
                        });
                    })()}
                </Text>
                {(() => {
                    if (this.props.isOwn()) {
                        if (this.state.detail.activity.status === 1) {
                            return (
                                <TouchableOpacity style={styles.button} onPress={this.startActivity.bind(this)}>
                                    <Text style={{color: "#fff", fontSize: 16}}>活动开始</Text>
                                </TouchableOpacity>            
                            );
                        } else if (this.state.detail.activity.status === 2) {
                            return (
                                <TouchableOpacity style={styles.button} onPress={this.endActivity.bind(this)}>
                                    <Text style={{color: "#fff", fontSize: 16}}>活动结束</Text>
                                </TouchableOpacity>
                            );
                        }
                    }
                })()}
                

               
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
    text: {
        color: "#5d5d5d", 
        marginTop: 10,
        marginBottom: 10
    },
    down: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        borderColor: "#897d73",
        borderTopWidth: 1
    },
    button: {
        alignSelf: 'center',
        backgroundColor: "#ff880a",
        height: 30,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});