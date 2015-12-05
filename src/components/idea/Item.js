'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import moment from 'moment';
import Service from '../../service';
import { Icon } from 'react-native-icons';

export default class IdeaItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPraise: props.idea.praise,
            praiseNum: props.idea.praiseNum,
            commentNum: props.idea.commentNum,
            participate: props.idea.participate,
            participateNum: props.idea.participateNum
        }
    }

    goToIdeaDetail () {
        this.props.navigator.push('ideaDetail', {id: this.props.idea.id});
    }

    goToComment () {
        this.props.navigator.push('ideaDetail', {id: this.props.idea.id, comment: true});
    }
    
    praise () {
        Service.praiseIdea(this.props.idea.id);
        this.setState({
            isPraise: true,
            praiseNum: this.state.praiseNum + 1 
        });
    }

    unpraise () {
        Service.praiseIdea(this.props.idea.id);
        this.setState({
            isPraise: false,
            praiseNum: this.state.praiseNum - 1 
        });
    }

    participate () {
        Service.participateIdea(this.props.idea.id);
        
        this.setState({
            participate: true,
            participateNum: this.state.participateNum + 1
        });
    }

    unparticipate () {
        Service.participateIdea(this.props.idea.id);

        this.setState({
            participate: false,
            participateNum: this.state.participateNum - 1
        });
    }


    render () {
        let Container = View;

        if (!this.state.noComment) {
            Container = TouchableHighlight;
        }
        
        return (
            <Container underlayColor="#efefef" onPress={this.goToIdeaDetail.bind(this)} style={styles.container}>
                <View>
                    <View style={styles.up}>
                        <Image
                            source={{uri: this.props.idea.avatar}}
                            style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}/>
                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: "#333"}}>{this.props.idea.misName}</Text>
                                <Text style={{marginLeft: 10, color: "#828282"}}>{this.state.participateNum}/{this.props.idea.targetNum}</Text>
                            </View>
                            <Text style={{color: "#828282"}}>{moment(this.props.idea.expireTime).format('YYYY-MM-DD hh:mm')}前有效</Text>
                        </View>
                    </View>

                    <View style={styles.center}>
                        <Text>{this.props.idea.content}</Text>
                    </View>

                    <View style={styles.down}>
                        {(() => {
                            if (!this.props.noComment) {
                                return (
                                    <TouchableOpacity onPress={this.props.goToComment || this.goToComment.bind(this)} style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Icon
                                            name={"fontawesome|comments-o"}
                                            size={20}
                                            color="#636363"
                                            style={{width: 20, height: 20, marginRight: 5}}/>
                                        <Text>{this.props.idea.commentNum}</Text>
                                    </TouchableOpacity>
                                );    
                            }
                        })()}
                        

                        {(()=> {
                            if (!this.state.participate) {
                                return (
                                    <TouchableOpacity onPress={this.participate.bind(this)}>
                                        <Text style={{color: "#e14123"}}>GO</Text>
                                    </TouchableOpacity>
                                );    
                            } else {
                                return (
                                    <TouchableOpacity onPress={this.unparticipate.bind(this)}>
                                        <Text style={{color: "gray"}}>NOT GO</Text>
                                    </TouchableOpacity>
                                );
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
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginBottom: 20,
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
        borderColor: "#e6e6e6",
        borderTopWidth: 1
    }
});