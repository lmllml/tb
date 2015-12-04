'use strict';

import React, {
    Component,
    StatusBarIOS
} from 'react-native';

import Navigation from './routes/Navigation';

export default class App extends Component {
    constructor (props) {
        super(props);
        StatusBarIOS.setStyle('light-content');
    }
    render () {
        return (
            <Navigation />
        );
    }
}