import React, {
    Component,
    Navigator
} from 'react-native';

import Router from './Router.js';

export default class Navigation extends Component {
    _renderScene (route, navigator) {
        this.router = this.router || new Router(navigator);

        return React.createElement(route.component, Object.assign({}, route.props, {
            navigator: this.router.navigator
        }));
    }

    render () {
        return (
             <Navigator
                configureScene={(route) => Navigator.SceneConfigs.HorizontalSwipeJump}
                initialRoute={Router.initialRoute}
                renderScene={this._renderScene.bind(this)} />
        );
    }
}