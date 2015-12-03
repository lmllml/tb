'use strict';

import React, {
    Modal,
    Component,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Header from '../common/Header';
import IdeaList from '../components/idea/List';
import { Icon } from 'react-native-icons';
import AddIdea from './AddIdea';


export default class Idea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            addIdeaVisible: false
        };
    }

    addIdea () {
        this.setState({
            addIdeaVisible: true
        });
    }

    closeModal () {
        this.setState({
            addIdeaVisible: false
        });
    }

    goToIdeaSearch () {
        this.props.navigator.push('ideaSearch');
    }

    render () {
        let LeftComponent = (
            <TouchableOpacity onPress={this.goToIdeaSearch.bind(this)}>
                <Icon
                    name="fontawesome|search"
                    size={20}
                    style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );
        let RightComponent = (
            <TouchableOpacity onPress={this.addIdea.bind(this)}>
                <Icon
                    name="fontawesome|plus"
                    size={20}
                    style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );
        return (
            <View style={styles.container}>
                <Header title="点子" LeftComponent={LeftComponent} RightComponent={RightComponent}/>
                <IdeaList data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} navigator={this.props.navigator}/>
                <Modal
                    animated={true}
                    visible={this.state.addIdeaVisible}>
                    <AddIdea close={this.closeModal.bind(this)}/>
                </Modal>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    }
});