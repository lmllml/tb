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

import { Icon } from 'react-native-icons';
import Header from '../common/Header';



export default class AddIdea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            datePicker: false
        };
    }

    onDateChange (date) {
        this.setState({
            date
        });
    }

    selectTime () {
        this.setState({
            endDate: this.state.date
        });
        this.hideDatePicker();
    }

    showDatePicker () {
        this.setState({
            datePicker: true
        });
    }

    hideDatePicker () {
        this.setState({
           datePicker: false  
        });
    }

    render () {
        let leftComponent = (
            <TouchableOpacity onPress={this.props.close}>
                <Text style={{color: "#fff", fontSize: 15}}>取消</Text>
            </TouchableOpacity>
        );

        let rightComponent = (
            <TouchableOpacity onPress={this.props.close}>
                <Text style={{color: "#20d81f", fontSize: 15}}>发送</Text>
            </TouchableOpacity>
        );

        return (

            <View style={styles.container}>
                <Header title="发表点子" LeftComponent={leftComponent} RightComponent={rightComponent}/>
                <TextInput multiline={true} maxLength={150} style={styles.textInput}/>
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
                            if (this.state.endDate) {
                                return (
                                    <Text style={{color: "#888", marginRight: 10}}>
                                        {this.state.endDate.toDateString()}
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
                        style={{flex: 1, marginLeft: 10, marginRight: 10}}
                        keyboardType="numeric"/>
                </View>

                {(() => {
                    if (this.state.datePicker) {
                        return (
                            <View style={styles.date}>
                                <View style={styles.datehead}>
                                    <TouchableOpacity onPress={this.hideDatePicker.bind(this)}>
                                        <Text style={{fontSize: 16, color: "#8e8e93"}}>
                                            取消
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={this.selectTime.bind(this)}>
                                        <Text style={{fontSize: 16, color: "#b02633"}}>
                                            确定
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <DatePickerIOS
                                    minimumDate={new Date()}
                                    onDateChange={this.onDateChange.bind(this)}
                                    date={this.state.date}
                                    mode="date"
                                    style={{alignSelf: 'center'}}/>
                            </View>
                        )
                    }
                })()}
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
    },

    date: {
        backgroundColor: "#fff",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },

    datehead: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between',
        borderColor: "d9d9d9",
        borderTopWidth: 1,
        borderBottomWidth: 1,
    }
});