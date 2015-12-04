'use strict';

import React, {
    Component,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    StyleSheet,
    DatePickerIOS,
    TouchableHighlight,
    ActivityIndicatorIOS
} from 'react-native';

import moment from 'moment';
import DatePicker from '../common/DatePicker';
import Service from '../service';
import { Icon } from 'react-native-icons';
import Header from '../common/Header';



export default class AddIdea extends Component {
    constructor (props) {
        super(props);
        this.state = {
            startDatePicker: false,
            endDatePicker: false,
            detail: props.detail
        };
    }
    componentWillReceiveProps (props) {
        this.setState({
            detail: props.detail
        });
    }

    componentDidMount () {
        this.mounted = true;
    }

    componentWillUnMount () {
        this.mounted = false;
    }



    showStartDatePicker () {
        this.setState({
            startDatePicker: true
        });
    }

    showEndDatePicker () {
        this.setState({
            endDatePicker: true
        });
    }

    confirmStart (date) {
        let detail = this.state.detail.activity;
        detail.activity.startTime = date.getTime();
        this.setState({
            activity
        });

        this.cancel();
    }

    confirmEnd (date) {
        let activity = this.state.detail;
        detail.activity.endTime = date.getTime();
        this.setState({
            activity
        });

        this.cancel();
    }
    
    submitAcitivity () {
        let detail = this.state.detail;

        Service.submitActivity(
            detail.activity.id,
            detail.activity.brief,
            detail.activity.content,
            detail.activity.location,
            detail.activity.startTime,
            detail.activity.endTime
        ).then(() => {
            this.props.refresh(detail);
            this.props.close();
        });    
    }

    inputLocation (text) {
        let detail = this.state.detail;
        detail.activity.location = text;
        this.setState({
            detail
        });
    }

    inputBrief (text) {
        let detail = this.state.detail;
        detail.activity.brief = text;
        this.setState({
            detail
        });   
    }

    inputContent (text) {
        let detail = this.state.detail;
        detail.activity.content = text;
        this.setState({
            detail
        });      
    }

    cancel () {
        this.setState({
           startDatePicker: false,
           endDatePicker: false  
        });
    }


    render () {
        let leftComponent = (
            <TouchableOpacity onPress={this.props.close}>
                <Text style={{color: "#fff", fontSize: 15}}>取消</Text>
            </TouchableOpacity>
        );

        let rightComponent = (
            <TouchableOpacity onPress={this.submitAcitivity.bind(this)}>
                <Text style={{color: "#20d81f", fontSize: 15}}>保存</Text>
            </TouchableOpacity>
        );
        if (!this.state.detail) {
            return (
                <View style={styles.container}>
                    <Header title="完善活动" LeftComponent={leftComponent} RightComponent={rightComponent}/>
                    <ActivityIndicatorIOS animating={true}/>
                </View>
            )   
        } else {
            return (
                <View style={styles.container}>
                    <Header title="完善活动" LeftComponent={leftComponent} RightComponent={rightComponent}/>
                    <TouchableHighlight style={{marginBottom: 10}} onPress={this.showStartDatePicker.bind(this)}>
                        <View style={styles.section}>
                            <Icon
                                name={"fontawesome|clock-o"}
                                size={20}
                                color={"#888"}
                                style={{width: 20, height: 20, marginRight: 15}}/>

                            <Text style={[styles.sectionTitle, {flex: 1}]}>
                                开始时间
                            </Text>

                            {(() => {
                                if (this.state.detail.activity.startTime) {
                                    return (
                                        <Text style={{color: "#888", marginRight: 10}}>
                                            {moment(this.state.detail.activity.startTime).format('YYYY-MM-DD HH:mm')}
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

                    <TouchableHighlight style={{marginBottom: 10}} onPress={this.showEndDatePicker.bind(this)}>
                        <View style={styles.section}>
                            <Icon
                                name={"fontawesome|clock-o"}
                                size={20}
                                color={"#888"}
                                style={{width: 20, height: 20, marginRight: 15}}/>

                            <Text style={[styles.sectionTitle, {flex: 1}]}>
                                结束时间
                            </Text>

                            {(() => {
                                if (this.state.detail.activity.endTime) {
                                    return (
                                        <Text style={{color: "#888", marginRight: 10}}>
                                            {moment(this.state.detail.activity.endTime).format('YYYY-MM-DD HH:mm')}
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
                       
                        <Text style={styles.sectionTitle}>地点</Text>

                        <TextInput 
                            style={{flex: 1, marginLeft: 10, marginRight: 10, textAlign: 'right'}}
                            value={this.state.detail.activity.location}
                            keyboardType="numeric"
                            placeholder="输入地点"
                            onChangeText={this.inputLocation.bind(this)}/>
                    </View>
                    
                    <View style={[styles.section, {marginBottom: 10}]}>
                        <Icon
                            name={"fontawesome|users"}
                            size={20}
                            color={"#888"}
                            style={{width: 20, height: 20, marginRight: 15}}/>
                       
                        <Text style={styles.sectionTitle}>简介</Text>

                        <TextInput 
                            style={{flex: 1, marginLeft: 10, marginRight: 10, textAlign: 'right'}}
                            keyboardType="numeric"
                            value={this.state.detail.activity.brief}
                            placeholder="输入简介"
                            onChangeText={this.inputBrief.bind(this)}/>
                    </View>
                    
                    <TextInput 
                        value={this.state.detail.activity.content}
                        onChangeText={this.inputContent.bind(this)} 
                        multiline={true} 
                        maxLength={150} 
                        style={styles.textInput}/>
                    
                    <DatePicker
                        date={new Date(this.state.detail.activity.startTime)}
                        visible={this.state.startDatePicker}
                        cancel={this.cancel.bind(this)}
                        confirm={this.confirmStart.bind(this)}/>

                    <DatePicker
                        date={new Date(this.state.detail.activity.endTime)}
                        visible={this.state.endDatePicker}
                        cancel={this.cancel.bind(this)}
                        confirm={this.confirmEnd.bind(this)}/>

                </View>
            );
        }
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