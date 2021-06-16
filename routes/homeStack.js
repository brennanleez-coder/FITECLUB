import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartPage from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/StartPage.js'
import SignUp from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignUp.js'
import SignIn from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignIn.js'
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
