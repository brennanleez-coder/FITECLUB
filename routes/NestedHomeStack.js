import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NestedHome from '../screens/NestedHome'

import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Ranking from '../screens/Ranking'

const screens = {

    Profile: {
        screen: Profile
    },
    Search: {
        screen: Search
    },
    Ranking: {
        screen: Ranking
    }
}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);
