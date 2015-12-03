import React, {
    Component,
    View,
    Text
} from 'react-native';

import { TabBarIOS } from 'react-native-icons';
import Idea from './Idea';
import Activity from './Activity';
import Account from './Account';

export default class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedTab: 'idea'
        };
    }

    select (selectedTab) {
        this.setState({
            selectedTab
        });
    }

    render () {
        return (
            <TabBarIOS
                tintColor="#d33a5b"
                barTintColor="#efefef">
                <TabBarIOS.Item
                    title="点子"
                    iconName={'fontawesome|lightbulb-o'}
                    selected={this.state.selectedTab === 'idea'}
                    onPress={this.select.bind(this, 'idea')}>
                    <Idea navigator={this.props.navigator}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="活动"
                    iconName={'fontawesome|camera'}
                    selected={this.state.selectedTab === 'activity'}
                    onPress={this.select.bind(this, 'activity')}>
                    <Activity navigator={this.props.navigator}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="我的"
                    iconName={'fontawesome|user'}
                    selected={this.state.selectedTab === 'my'}
                    onPress={this.select.bind(this, 'my')}>
                    <Account navigator={this.props.navigator}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}