import {useState,useEffect} from 'react'
import { BottomNavigation } from 'react-native-paper';
import AccueilScreen from '../screens/AccueilScreen';
import PizzaScreen from '../screens/PizzaScreen';
import Welcome from '../screens/Welcome';
import ChoosePizzaScreen from './ChoosePizzaScreen';
import ContactScreen from './ContactScreen';

const NavigationScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes,setRoutes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'pizza', title: 'Pizza', icon: 'pizza', route:setRoutes },
        { key: 'contact', title: 'Contact', icon:'phone'},
    ]);

    


    const [SceneMap,SetSceneMap] = useState(BottomNavigation.SceneMap({
        home: AccueilScreen,
        pizza: PizzaScreen,
        contact: ContactScreen,
        choosepizza: ChoosePizzaScreen
    }))

    useEffect(() => {

        setRoutes([
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'pizza', title: 'Pizza', icon: 'pizza', route:routes,setroute:setRoutes,scenemap:SceneMap,setscenemap:SetSceneMap },
            { key: 'contact', title: 'Contact', icon:'phone'},
        ])

    },[])

    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap}
        barStyle={{ backgroundColor: 'rgb(0,0,0)',borderWidth:2,borderTopColor:'#B70021' }}
        inactiveColor="#B70021"
        activeColor="#ed022d"
        />
    );
}

export default NavigationScreen