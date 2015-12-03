'use strict';

import React, {
    Component,
    View,
    StyleSheet
} from 'react-native';

import Header from '../common/Header';
import ActivityList from '../components/activity/List';

export default class Activity extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header title="活动"/>
                <ActivityList data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} navigator={this.props.navigator}/>
            </View>
        );    
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});