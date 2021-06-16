import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screens/Signup';
import SignIn from '../screens/SignIn';
import NestedHome from '../screens/NestedHome'

const screens = {
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
