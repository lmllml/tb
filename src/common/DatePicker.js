'use strict';

import React, {
    Component,
    DatePickerIOS,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class DatePicker extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: props.date || new Date()
        };
    }

    onDateChange (date) {
        this.setState({
            date
        });
    }

    render () {
        if (this.props.visible) {
            return (
                 <View style={styles.date}>
                    <View style={styles.datehead}>
                        <TouchableOpacity onPress={this.props.cancel}>
                            <Text style={{fontSize: 16, color: "#8e8e93"}}>
                                取消
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.confirm(this.state.date)}>
                            <Text style={{fontSize: 16, color: "#b02633"}}>
                                确定
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <DatePickerIOS
                        {...this.props}
                        onDateChange={this.onDateChange.bind(this)}
                        date={this.state.date}
                        mode="date"
                        style={{alignSelf: 'center'}}/>
                </View>
            );    
        } else {
            return (<View></View>)
        }
        
    }
}

let styles = StyleSheet.create({
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