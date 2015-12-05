import Home from '../containers/Home';
import routeMap from './routeMap';

export default class Router {
    _enhanceNavigator (navigator) {
        let resolve = (...args) => {
            let router = {};
            if (typeof args[0] === 'object') {
                router = args[0];
            }

            if (typeof args[0] === 'string') {
                let routesList = this.navigator.getCurrentRoutes();
                let nextIndex = routesList[routesList.length - 1].index + 1;
                console.log(args[0]);
                router = {
                    name: args[0],
                    index: nextIndex,
                    component: routeMap[args[0]]
                };
            }

            if (typeof args[1] === 'object') {
                router.props = args[1];
            }
            return router;
        }
        
        let wrapper = (funcArr) => {
            var map = {};
            funcArr.forEach(function (key) {
                let func = navigator[key];
                map[key] = function () {
                    let route = resolve.apply(null, arguments);
                    return func(route);
                };
            });
            return map;
        }
        
        return Object.assign(navigator, wrapper([
            'jumpTo',
            'push',
            'replace',
            'replacePrevious',
            'popToRoute'
        ]));
    }

    constructor (navigator) {
        this.navigator = this._enhanceNavigator(navigator);
    }
}

Router.initialRoute = {
    name: 'home',
    index: 0,
    component: routeMap['home']
}