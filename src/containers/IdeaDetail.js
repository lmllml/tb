'use strict';

import React, {
    Component,
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-icons';
import Service from '../service.js';
import Header from '../common/Header';
import IdeaItem from '../components/idea/Item';
import CommentList from '../components/comment/List';
import Publish from '../common/Publish';

export default class Idea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            idea: {},
            commentList: [],
            modalVisible: props.comment || false
        };
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
        let commentList = this.state.commentList;

        Service.submitIdeaComment(this.props.id, text).then((comment) => {
            commentList.push(comment);
            this.setState({
                commentList
            });
        });        

        this.closeComment();
    }

    componentDidMount () {
        this.mounted = true;
        this.refresh();
    }

    refresh () {
         Service.getIdeaDetail(this.props.id).then((idea) => {
            if (!this.mounted) {
                return;
            }
            this.setState({
                idea
            });
        });

        Service.getIdeaCommentList(this.props.id, 1, 100).then((commentList) => {
            if (!this.mounted) {
                return;
            }
            this.setState({
                commentList
            });
        });
    }

   componentWillUnMount () {
        this.mounted = false
   }

    render () {
        return (
            <View style={styles.container}>
                <Header hasBack={true} navigator={this.props.navigator} title="点子正文"/>

                {(() => {
                    if (this.state.idea.id) {
                        return (
                            <IdeaItem idea={this.state.idea} noComment={true}/>
                        );
                    }
                })()}
                
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
                <Modal animated={true} visible={this.state.modalVisible}>
                    <Publish close={this.closeComment.bind(this)} submit={this.submitComment.bind(this)}/>
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