import React, {
    Component,
    View,
    Modal,
    Text
} from 'react-native';

import Service from '../service';
import Login from './Login';
import { TabBarIOS } from 'react-native-icons';
import Idea from './Idea';
import Activity from './Activity';
import Account from './Account';

export default class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedTab: 'idea',
            login: true
        };
    }

    componentDidMount () {
        this.mounted = true;
        Service.getAccount().catch(() => {
            if (!this.mounted) {
                return;
            }
            this.props.navigator.push('login');
        });
    }

    componentWillUnMount () {
        this.mounted = false;
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
                barTintColor="#efefef"
                style={{flex: 1}}>
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