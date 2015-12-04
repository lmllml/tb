'use stirct'

import React, {
    Component,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import Header from '../common/Header';

export default class Publish extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onChangeText (text) {
        this.setState({
            text
        });
    }

    render () {
        let leftComponent = (
            <TouchableOpacity onPress={this.props.close}>
                <Text style={{color: "#fff", fontSize: 15}}>取消</Text>
            </TouchableOpacity>
        );

        let rightComponent = (
            <TouchableOpacity onPress={() => {this.props.submit(this.state.text)}}>
                <Text style={{color: "#20d81f", fontSize: 15}}>发送</Text>
            </TouchableOpacity>
        );

        return (
            <View>
                <Header title="发表" LeftComponent={leftComponent} RightComponent={rightComponent}/>
                <TextInput multiline={true} maxLength={150} style={styles.textInput} onChangeText = {this.onChangeText.bind(this)}/>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    textInput: {
        height: 150,
        backgroundColor: "#fff", 
        borderBottomWidth: 1, 
        borderColor: "#d9d9d9",
        padding: 15,
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 10
    },
});