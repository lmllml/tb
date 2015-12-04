'use strict';

import React, {
    Component,
    ListView
} from 'react-native';


import CommentItem from './Item';

export default class CommentList extends Component {
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
            <CommentItem comment={row}/>
        );
    }

    render () {
        return (
            <ListView
                removeClippedSubviews={true}
                dataSource={this.state.dataSource}
                style={{flex: 1, backgroundColor: '#fff'}}
                renderRow={this.renderRow.bind(this)}/>
        );
    }
}