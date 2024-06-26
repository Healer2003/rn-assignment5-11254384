import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign,Feather } from '@expo/vector-icons';
import Cards from './Screens/Cards'
import Settings from './Screens/Settings';

export default function App(){
  
  const Tab = createBottomTabNavigator();
  return (
    <Settings/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    paddingHorizontal:20,
    backgroundColor: '#fff',
  },
  
});
