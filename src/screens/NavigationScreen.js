import {useState} from 'react'
import { BottomNavigation } from 'react-native-paper';
import AccueilScreen from '../screens/AccueilScreen';
import PizzaScreen from '../screens/PizzaScreen';
import Welcome from '../screens/Welcome';

const NavigationScreen = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'pizza', title: 'Pizza', icon: 'pizza' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: AccueilScreen,
        pizza: PizzaScreen
    });

    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: 'rgb(0,0,0)',borderWidth:2,borderTopColor:'#B70021' }}
        inactiveColor="#B70021"
        activeColor="#ed022d"
        />
    );
}

export default NavigationScreen