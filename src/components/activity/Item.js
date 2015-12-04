'use strict';

import React, {
    Component,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import moment from 'moment';
import Service from '../../service';
import { Icon } from 'react-native-icons';

export default class ActivityItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPraise: props.data.praise,
            praiseNum: props.data.praiseNum,
            participate: props.data.participate,
            participateNum: props.data.participateNum
        }
    }

    goToActivityDetail (id) {
        this.props.navigator.push('activityDetail', {id});
    }

    goToComment () {
        this.props.navigator.push('activityDetail', {id: this.props.data.activity.id, comment: true});
    }

    praise () {
        Service.praiseActivity(this.props.data.activity.id);
        this.setState({
            isPraise: true,
            praiseNum: this.state.praiseNum + 1 
        });
    }

    unpraise () {
        Service.praiseActivity(this.props.data.activity.id);
        this.setState({
            isPraise: false,
            praiseNum: this.state.praiseNum - 1 
        });
    }

    participate () {
        Service.participateActivity(this.props.data.activity.id);
        
        this.setState({
            participate: true,
            participateNum: this.state.participateNum + 1
        });
    }

    unparticipate () {
        Service.participateActivity(this.props.data.activity.id);

        this.setState({
            participate: false,
            participateNum: this.state.participateNum - 1
        });
    }

    render () {
        return (
            <TouchableHighlight underlayColor="#efefef" onPress={this.goToActivityDetail.bind(this, this.props.data.activity.id)} style={styles.container}>
                <View>
                    <View style={styles.up}>
                        <Image
                            source={{uri: this.props.data.activity.avatar}}
                            style={{width: 40, height: 40, borderRadius: 20}}/>

                        <Text style={{color: "#333", marginLeft: 10}}>{this.props.data.activity.misName}</Text>
                        <Text style={{color: "#828282", marginLeft: 10}}>{moment(this.props.data.activity.ctime).format('YYYY-MM-DD hh:mm')}</Text>
                        <Text style={{flex: 1, color: "green", textAlign: 'right'}}>{this.state.participateNum}人</Text>
                    </View>
                    <View style={styles.center}>
                        <Text style={styles.text}>
                            时间: {moment(this.props.data.activity.startTime).format('YYYY-MM-DD hh:mm') + ' - ' + moment(this.props.data.activity.endTime).format('YYYY-MM-DD hh:mm')}
                        </Text>
                        
                        <Text style={styles.text}>
                            地点: {this.props.data.activity.location}
                        </Text>

                        <Text style={styles.text}>
                            简介: {this.props.data.activity.brief}
                        </Text>
                    </View>
                    <View style={styles.down}>
                        <TouchableOpacity onPress={this.props.goToComment || this.goToComment.bind(this)} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name={"fontawesome|comments-o"}
                                size={20}
                                color="#636363"
                                style={{width: 20, height: 20, marginRight: 5}}/>
                            <Text>{this.props.data.commentNum}</Text>
                        </TouchableOpacity>
                        
                        {(()=> {
                            if (this.props.data.activity.status === 2) {
                                return (
                                    <Text style={{color: "gray"}}>活动已开始</Text>
                                );    
                            } else if (this.props.data.activity.status === 3) {
                                return (
                                    <Text style={{color: "gray"}}>活动已结束</Text>
                                );    
                            } else {
                                if (!this.state.participate) {
                                    return (
                                        <TouchableOpacity onPress={this.participate.bind(this)}>
                                            <Text style={{color: "red"}}>GO</Text>
                                        </TouchableOpacity>
                                    );    
                                } else {
                                    return (
                                        <TouchableOpacity onPress={this.unparticipate.bind(this)}>
                                            <Text style={{color: "gray"}}>NOT GO</Text>
                                        </TouchableOpacity>
                                    );
                                }
                            }
                        })()}

                        {(() => {
                            if (this.state.isPraise) {
                                return (
                                    <TouchableOpacity onPress={this.unpraise.bind(this)} style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon
                                            name={"fontawesome|thumbs-o-up"}
                                            size={20}
                                            color="red"
                                            style={{width: 20, height: 20,  marginRight: 5}}/>
                                        <Text style={{color: "red"}}>{this.state.praiseNum}</Text>
                                    </TouchableOpacity>            
                                );
                            } else {
                                return (
                                    <TouchableOpacity onPress={this.praise.bind(this)} style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon
                                            name={"fontawesome|thumbs-o-up"}
                                            size={20}
                                            color="#636363"
                                            style={{width: 20, height: 20,  marginRight: 5}}/>
                                        <Text>{this.state.praiseNum}</Text>
                                    </TouchableOpacity>            
                                );
                            }
                        })()}
                        
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginBottom: 10,
        overflow: 'hidden'
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