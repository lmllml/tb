'use strict';

import React, {
    Component,
    View,
    Modal,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { Icon } from 'react-native-icons';
import Publish from '../common/Publish';
import Service from '../service';
import ActivityDetailBox from '../components/activity/DetailBox';
import Header from '../common/Header';
import CommentList from '../components/comment/List';
import ActivityEdit from './ActivityEdit';

export default class ActivityDetail extends Component {
    constructor (props) {
        super(props);

        this.state = {
            commentList: [],
            modalVisible: props.comment || false,
            editVisible: false
        };
    }

    componentDidMount () {
        this.mounted = true;
        Service.getActivityDetail(this.props.id).then((data) => {
            if (this.mounted) {
                this.setState({
                    detail: data
                });
            }
        });
        Service.getActivityCommentList(this.props.id, 1, 80).then((data) => {
            if (this.mounted) {
                this.setState({
                    commentList: data
                });
            }
        });
    }
    
    componentWillUnMount () {
        this.mounted = false;
    }

    comment () {
        this.setState({
            modalVisible: true
        });
    }

    closeComment () {
        this.setState({
           modalVisible: false 
        });
    }

    submitComment (text) {
        Service.submitActivityComment(this.props.id, text).then((comment) => {
            let commentList = this.state.commentList;
            commentList.push(comment);
            this.setState({
                commentList
            });
        });        

        this.closeComment();
    }


    edit () {
        this.setState({
            editVisible: true
        });
    }

    refresh (detail) {
        this.setState({
            detail
        });
    }

    closeEdit () {
        this.setState({
            editVisible: false
        });
    }

    render () {
        let RightComponent = (
            <TouchableOpacity onPress={this.edit.bind(this)}>
                <Text style={{color: "#fff"}}>编辑</Text>
            </TouchableOpacity>
        );
        return (
            <View style={styles.container}>
                <Header hasBack={true} navigator={this.props.navigator} title="活动正文" RightComponent={RightComponent}/>
                <ScrollView style={{flex: 1}}>
                    <ActivityDetailBox detail={this.state.detail}/>
                    <View style={styles.sectionTitle}>
                        <Text style={{color: '#929292'}}>评论 {this.state.commentList.length}</Text>
                        <TouchableOpacity onPress={this.comment.bind(this)} style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon
                                name={"fontawesome|comments-o"}
                                size={20}
                                color="#636363"
                                style={{width: 20, height: 20, marginRight: 5}}/>
                        </TouchableOpacity>
                    </View>
                    <CommentList data={this.state.commentList}/>
                </ScrollView>

                <Modal animated={true} visible={this.state.modalVisible}>
                    <Publish close={this.closeComment.bind(this)} submit={this.submitComment.bind(this)}/>
                </Modal>

                <Modal animated={true} visible={this.state.editVisible}>
                    <ActivityEdit detail={this.state.detail} close={this.closeEdit.bind(this)} refresh={this.refresh.bind(this)}/>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
      sectionTitle: {
        height: 42,
        backgroundColor: '#fff',
        borderColor: '#e6e6e6',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});