import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
<<<<<<< Updated upstream
import SignUp from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignUp.js';
import SignIn from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignIn.js';
=======
import SignUp from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignUp.js'
import SignIn from '/Users/brennanlee/Documents/GitHub/FITECLUB/screens/SignIn.js'
>>>>>>> Stashed changes
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
