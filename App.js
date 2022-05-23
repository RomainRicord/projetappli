import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import PizzaScreen from './src/screens/PizzaScreen';
import Welcome from './src/screens/Welcome';
import AccueilScreen from './src/screens/AccueilScreen';
import NavigationScreen from './src/screens/NavigationScreen';

const App = () => {

  const [getWelcome,SetWelcome] = useState(false)

  return (
    <PaperProvider>
        {!getWelcome &&
        <Welcome SetWelcome={SetWelcome}/>
        } 
        {getWelcome &&
         <NavigationScreen/> 
        }
    </PaperProvider>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
