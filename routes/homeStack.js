import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NestedHome from '../screens/NestedHome'
import BottomTabHandler from '../routes/bottomTab'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import Ranking from '../screens/Ranking'

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    
    NestedHome: {
        screen: NestedHome
    },

}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);
