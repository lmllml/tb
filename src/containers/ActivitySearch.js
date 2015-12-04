'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Service from '../service';
import { Icon } from 'react-native-icons';
import SearchHeader from '../common/SearchHeader';
import ActivityList from '../components/activity/List';

export default class IdeaSearch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activityList: {}
        };
    }

    componentWillUnMount () {
        this.mounted = false;
    }

    componentDidMount () {
        this.mounted = true;
    }


    onSubmitEditing (text) {
        Service.getActivityList(text, 1, 20).then((activityList) => {
            if (this.mounted) {
                this.setState({
                    activityList
                });
            }
        });
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <SearchHeader navigator={this.props.navigator} onSubmitEditing={this.onSubmitEditing.bind(this)}/>
                {(()=> {
                    if (this.state.activityList.activities) {
                        return  <ActivityList navigator={this.props.navigator} data={this.state.activityList.activities}/>;
                    }
                })()}
               
            </View>
        );
    }
}