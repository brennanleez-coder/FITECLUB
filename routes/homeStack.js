import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartPage from '../screens/StartPage'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
import NestedHome from '../screens/NestedHome'



import AlterEgo from '../Restaurants/AlterEgo'
import BeautyInThePot from '../Restaurants/BeautyInThePot'
import BurntEnds from '../Restaurants/BurntEnds'
import DinTaiFung from '../Restaurants/DinTaiFung'
import FookKin from '../Restaurants/FookKin'
import GenkiSushi from '../Restaurants/GenkiSushi'
import HaiDiLao from '../Restaurants/HaiDiLao'
import KohGrill from '../Restaurants/KohGrill'
import Lawry from '../Restaurants/Lawry'
import ThreeMealsADay from '../Restaurants/ThreeMealsADAy'
import TwoManBagelHouse from '../Restaurants/TwoManBagelHouse'
import RestaurantList from '../screens/RestaurantListWithButtons'


const screens = {
    "WELCOME TO FITE CLUB": {
        screen: StartPage
    },
    "RestaurantList": {
        screen: RestaurantList
    },
    AlterEgo: {
        screen: AlterEgo
    },
    
    BeautyInThePot: {
        screen: BeautyInThePot
    },
    BurntEnds: {
        screen: BurntEnds
    },
    
    DinTaiFung: {
        screen: DinTaiFung
    },
    FookKin: {
        screen: FookKin
    },
    GenkiSushi: {
        screen: GenkiSushi
    },
    HaiDiLao: {
        screen: HaiDiLao
    },
    Lawry: {
        screen: Lawry
    },
    ThreeMealsADay: {
        screen: ThreeMealsADay
    },
    KohGrill: {
        screen: KohGrill
    },
    TwoManBagelHouse: {
        screen: TwoManBagelHouse
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
