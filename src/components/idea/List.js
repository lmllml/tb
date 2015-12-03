'use strict';

import React, {
    Component,
    View,
    ListView
} from 'react-native';

import IdeaItem from './Item';

export default class Idea extends Component {
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

    renderRow () {
        return (
            <IdeaItem navigator={this.props.navigator}/>
        );
    }

    render () {
        return (
            <ListView
                style={{flex: 1}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}/>
        );
        
    }
}