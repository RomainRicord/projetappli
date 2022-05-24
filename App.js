import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Welcome from './src/screens/Welcome';
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
