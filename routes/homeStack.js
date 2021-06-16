import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignIn from '../screens/SignIn'
import NestedHome from '../screens/NestedHome'

const screens = {
    StartPage: {
        screen: StartPage
    },
    
    SignUp: {
        screen: SignUp
    },
    SignIn: {
        screen: SignIn
    },
    
    NestedHome: {
        screen: NestedHome
    },

}

const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);
