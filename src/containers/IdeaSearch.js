'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    StatusBarIOS

} from 'react-native';

import Service from '../service';
import { Icon } from 'react-native-icons';
import SearchHeader from '../common/SearchHeader';
import IdeaList from '../components/idea/List';


export default class IdeaSearch extends Component {
    constructor (props) {
        super(props);

        StatusBarIOS.setStyle('default');
        this.state = {
            ideaList: []           
        };
    }

    componentWillUnMount () {
        this.mounted = false;
    }

    componentDidMount () {
        this.mounted = true;
    }


    onSubmitEditing (text) {
        Service.getIdeaList(text, 1, 20).then((ideaList) => {
            if (this.mounted) {
                this.setState({
                    ideaList
                });
            }
        });
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <SearchHeader navigator={this.props.navigator} onSubmitEditing={this.onSubmitEditing.bind(this)}/>
                <IdeaList navigator={this.props.navigator} data={this.state.ideaList}/>
            </View>
        );
    }
}