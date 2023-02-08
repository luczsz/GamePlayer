import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SingIn from './src/pages/SingIn/Index';

import { theme } from './src/global/theme';

export default function App() {
  return (
    <View>
      <SingIn />
      <StatusBar style='light'/>
    </View>
  );
}

