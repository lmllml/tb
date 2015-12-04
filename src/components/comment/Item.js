'use strict';

import React, {
    Component,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { Icon } from 'react-native-icons';

export default class CommentItem extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image
                        source={{uri: this.props.comment.avatar}}
                        style={{width: 40, height: 40, marginLeft: 10, marginRight: 10, borderRadius: 20}}/>
                </View>

                <View style={styles.right}>
                    <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                        <Text style={{color: "#333", marginBottom: 10}}>
                            {this.props.comment.misName}
                        </Text>

                    </View>

                    <Text style={{color: "#828282", marginBottom: 10}}>
                        {new Date(this.props.comment.ctime).toDateString()}
                    </Text>

                    <Text style={{color: "#5d5d5d", marginBottom: 10}}>
                        {this.props.comment.content}
                    </Text>

                    {(() => {
                        if (this.props.comment.ideaComments && 
                            this.props.comment.ideaComments.length) {
                            return (
                                <View style={{borderColor: "#cacbcc", borderTopWidth: 1}}>
                                {(() => {
                                    return this.props.comment.ideaComments.map((ideaComment) => {
                                        return (
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={{color: "#3668b2"}}>ideaComment.misName</Text> 
                                                <Text>:</Text> 
                                                <Text>ideaComment.content</Text>
                                            </View>
                                        );
                                    });
                                }())}
                                </View>
                            );
                        }
                    })()}
                    <TextInput ref='input'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: "#dadada",
        borderBottomWidth: 1,
        flexDirection: 'row',
        overflow: 'hidden'
    },
        
    left: {
        width: 60,
        alignItems: 'center'
    },

    right: {
        flex: 1
    }
});