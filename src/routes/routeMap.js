import Login from '../containers/Login';
import Home from '../containers/Home';

import IdeaDetail from '../containers/IdeaDetail';
import ActivityDetail from '../containers/ActivityDetail';
import IdeaSearch from '../containers/IdeaSearch';
import ActivitySearch from '../containers/ActivitySearch';
import MyIdea from '../containers/MyIdea';
import CareIdea from '../containers/CareIdea';
import MyActivity from '../containers/MyActivity';

const routeMap = {
    'login': Login,
    'home': Home,
    'ideaDetail': IdeaDetail,
    'activityDetail': ActivityDetail,
    'ideaSearch': IdeaSearch,
    'activitySearch': ActivitySearch,
    'myIdea': MyIdea,
    'careIdea': CareIdea,
    'myActivity': MyActivity
};

export default routeMap;