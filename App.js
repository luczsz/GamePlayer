import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import SingIn from './src/pages/SingIn';
import Routes from './src/routes';

import { theme } from './src/global/theme';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

    if(!fontsLoaded){
      return <AppLoading/>
    }

  return (
      <NavigationContainer>

          <Routes />
          <StatusBar style='light'/>

      </NavigationContainer>
  );
}

