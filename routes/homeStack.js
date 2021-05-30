import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import NestedHome from '../screens/NestedHome'
import BottomTabHandler from '../routes/bottomTab'



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
    BottomTabHandler: {
        screen: BottomTabHandler
    }
}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);
