'use strict';

import React, {
    Component,
    ListView
} from 'react-native';


import RefreshableListView from 'react-native-refreshable-listview';
import ActivityItem from './Item';

export default class ActivityList extends Component {
    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data)
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
        });
    }

    renderRow (row) {
        return (
            <ActivityItem data={row} navigator={this.props.navigator}/>
        );
    }

    render () {
        return (
            <RefreshableListView
                removeClippedSubviews={true}
                dataSource={this.state.dataSource}
                loadData={this.props.loadData}
                style={{flex: 1, backgroundColor: '#f2f2f2'}}
                renderRow={this.renderRow.bind(this)}/>
        );
    }
}