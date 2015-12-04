'use strict';

import React, {
    Modal,
    Component,
    View,
    Text,
    StyleSheet,
    ActivityIndicatorIOS,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Service from '../service';
import Header from '../common/Header';
import IdeaList from '../components/idea/List';
import { Icon } from 'react-native-icons';
import AddIdea from './AddIdea';

const HEIGHT = Dimensions.get('window').height;

export default class Idea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            addIdeaVisible: false,
            ideaList: [],
            loadingIdea: false
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
            loadingIdea: true
        });
        Service.getIdeaList('', 1, 100).then((data) => {
            if (self.mounted) {
                self.setState({
                    ideaList: data,
                    loadingIdea: false
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

    onSubmitIdea (idea) {
        let ideaList = this.state.ideaList;
        ideaList = ideaList.unshift(idea);
        this.setState({
            ideaList
        });
        this.closeModal();
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
                    color="#fff"
                    style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );
        let RightComponent = (
            <TouchableOpacity onPress={this.addIdea.bind(this)}>
                <Icon
                    name="fontawesome|plus"
                    size={20}
                    color="#fff"
                    style={{width: 20, height: 20}}/>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <Header title="点子" LeftComponent={LeftComponent} RightComponent={RightComponent}/>
                <TouchableOpacity style={styles.suspension} onPress={this.fetchIdea.bind(this)}>
                    <Text style={{marginRight: 10}}>换一拨</Text>
                    <Icon
                        name="fontawesome|refresh"
                        size={20}
                        color="#7a7a7a"
                        style={{width: 20, height: 20, marginRight: 10}}/>
                </TouchableOpacity>
                {(() => {
                    if (this.state.loadingIdea) {
                        return (
                            <ActivityIndicatorIOS style={styles.loading} animating={true}/>
                        )
                    } else {
                        return (
                            <IdeaList refreshItem={this.refreshItem} data={this.state.ideaList} navigator={this.props.navigator}/>
                        );
                    }
                })()}
                <Modal
                    animated={true}
                    visible={this.state.addIdeaVisible}>
                    <AddIdea 
                        close={this.closeModal.bind(this)}
                        onSubmitIdea={this.onSubmitIdea.bind(this)}/>
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
    loading: {
        marginTop: 100
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