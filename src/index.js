'use strict';

import React, {
    Component
} from 'react-native';

import Navigation from './routes/Navigation';

export default class App extends Component {
    render () {
        return (
            <Navigation />
        );
    }
}