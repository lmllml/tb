'use strict';

import React, {
    Modal,
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Service from '../service';
import Header from '../common/Header';
import IdeaList from '../components/idea/List';
import { Icon } from 'react-native-icons';
import AddIdea from './AddIdea';


export default class Idea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            addIdeaVisible: false,
            loading: false,
            ideaList: []
        };
    }

    componentDidMount () {
        this.mounted = true;
        this.fetchIdea();        
    }

    componentWillUnmount () {
        this.mounted = false;
    }

    fetchIdea () {
        let self = this;
        
        this.setState({
            loading: true
        });

        Service.getMyRelationIdeas().then((data) => {
            if (self.mounted) {
                self.setState({
                    ideaList: data,
                    loading: false
                });
            }
        });
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

    render () {
        return (
            <View style={styles.container}>
                <Header title="我关注的点子" hasBack={true} navigator={this.props.navigator}/>
                <IdeaList data={this.state.ideaList} navigator={this.props.navigator}/>

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
    },
    suspension: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: "#b2b2b2"
    }
});