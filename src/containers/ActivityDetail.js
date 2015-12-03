'use strict';


import React, {
    Component,
    View,
    Text,
    StyleSheet
} from 'react-native';

import ActivityDetailBox from '../components/activity/DetailBox';
import Header from '../common/Header';
import CommentList from '../components/comment/List';

export default class ActivityDetail extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header hasBack={true} navigator={this.props.navigator} title="活动正文"/>
                <ActivityDetailBox />
                <View style={styles.sectionTitle}>
                    <Text style={{color: '#929292'}}>评论 100</Text>
                </View>
                <CommentList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
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
        justifyContent: 'center'
    }
});