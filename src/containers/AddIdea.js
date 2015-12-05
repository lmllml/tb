'use strict';

import React, {
    Component,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    StyleSheet,
    DatePickerIOS,
    TouchableHighlight
} from 'react-native';

import Delay from '../common/Delay';
import moment from 'moment';
import Service from '../service';
import { Icon } from 'react-native-icons';
import Header from '../common/Header';
import DatePicker from '../common/DatePicker';


export default class AddIdea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            datePicker: false
        };
    }


    submitIdea () {
        if (!this.allRequire()) {
            return;
        }
        Service.submitIdea(this.state.date.getTime(), this.content, this.person).then((idea) => {
            this.props.onSubmitIdea(idea);
        });
    }

    showDatePicker () {
        this.setState({
            datePicker: true
        });
    }

    cancel () {
        this.setState({
           datePicker: false  
        });
    }

    confirm (date) {
        this.setState({
            date
        });
        this.cancel();
    }

    allRequire () {
        return this.state.date && this.content && this.person;
    }

    render () {
        let leftComponent = (
            <TouchableOpacity onPress={this.props.close}>
                <Text style={{color: "#fff", fontSize: 15}}>取消</Text>
            </TouchableOpacity>
        );


        
        let rightComponent = (
            <TouchableOpacity onPress={this.submitIdea.bind(this)}>
                <Text style={{color: "#20d81f", fontSize: 15}}>发送</Text>
            </TouchableOpacity>
        );
        

        return (

            <View style={styles.container}>
                <Header title="发表点子" LeftComponent={leftComponent} RightComponent={rightComponent}/>
                <TextInput onChangeText={(text) => this.content = text} multiline={true} maxLength={150} style={styles.textInput}/>
                <TouchableHighlight style={{marginBottom: 10}} onPress={this.showDatePicker.bind(this)}>
                    <View style={styles.section}>
                        <Icon
                            name={"fontawesome|clock-o"}
                            size={20}
                            color={"#888"}
                            style={{width: 20, height: 20, marginRight: 15}}/>

                        <Text style={[styles.sectionTitle, {flex: 1}]}>
                            截止时间
                        </Text>
                        {(() => {
                            if (this.state.date) {
                                return (
                                    <Text style={{color: "#888", marginRight: 10}}>
                                        {moment(this.state.date).format('YYYY-MM-DD HH:mm')}
                                    </Text>
                                )
                            }
                        })()}
                        <Icon
                            name={"fontawesome|chevron-right"}
                            size={20}
                            color={"#c7c7cc"}
                            style={{width: 20, height: 20}}/>
                    </View>
                </TouchableHighlight>

                <View style={[styles.section, {marginBottom: 10}]}>
                    <Icon
                        name={"fontawesome|users"}
                        size={20}
                        color={"#888"}
                        style={{width: 20, height: 20, marginRight: 15}}/>
                   
                    <Text style={styles.sectionTitle}>限定人数</Text>

                    <TextInput 
                        style={{flex: 1, marginLeft: 10, marginRight: 10, textAlign: 'right'}}
                        keyboardType="numeric"
                        placeholder="输入限定人数"
                        onChangeText={(text) => this.person = text}/>
                </View>
                 <DatePicker
                        date={this.state.date}
                        visible={this.state.datePicker}
                        cancel={this.cancel.bind(this)}
                        confirm={this.confirm.bind(this)}/>
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

    section: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#d9d9d9",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    sectionTitle: {
        color: "#000",
        fontSize: 16
    }
});