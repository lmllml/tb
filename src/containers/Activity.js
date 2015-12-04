'use strict';

import React, {
    Component,
    View,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicatorIOS
} from 'react-native';

import Service from '../service';
import { Icon } from 'react-native-icons';
import Header from '../common/Header';
import ActivityList from '../components/activity/List';

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
        this.loadData();
    }

    loadData () {
        return Service.getActivityList('', 1, 10).then((data) => {
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
        let RightComponent = (
            <TouchableOpacity onPress={this.goToActivitySearch.bind(this)}>
                <Icon
                    name="fontawesome|search"
                    size={20}
                    color="#fff"
                    style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );
        return (
            <View style={styles.container}>
                <Header title="活动" RightComponent={RightComponent}/>
                {(() => {
                    if (this.state.loading) {
                        return (
                            <ActivityIndicatorIOS style={styles.loading} animating={true}/>
                        );
                    } else {
                        return (
                            <ActivityList loadData={this.loadData.bind(this)} data={this.state.activityList} navigator={this.props.navigator}/>
                        );    
                    }
                })()}
            </View>
        );    
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading: {
        marginTop: 40
    }
});