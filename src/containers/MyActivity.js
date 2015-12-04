'use strict';

import React, {
    Component,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { Icon } from 'react-native-icons';
import Header from '../common/Header';
import ActivityList from '../components/activity/List';
import Service from '../service';

export default class Activity extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activityList: [],
            loading: false
        };
    }

    goToActivitySearch () {
        this.props.navigator.push('activitySearch');
    }

    componentDidMount () {
        this.mounted = true;

        this.setState({
            loading: true
        });

        Service.getMyActivityList().then((data) => {
            if (this.mounted) {
                this.setState({
                    activityList: data.activities,
                    loading: false
                });
            }
        });
    }

    componentWillUnMount () {
        this.mounted = false;
    }

    render () {
        return (
            <View style={styles.container}>
                <Header title="活动" hasBack={true} navigator={this.props.navigator}/>
                <ActivityList data={this.state.activityList} navigator={this.props.navigator}/>
            </View>
        );    
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});