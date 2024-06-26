import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign,Feather } from '@expo/vector-icons';
import Cards from './Screens/Cards'
import Settings from './Screens/Settings';
import Statistics from './Screens/Statistics';
import { EventRegister } from 'react-native-event-listeners';
import React,{useState, useEffect} from 'react';

export default function App(){
  
  const [darkMode, setDarkMode] = useState(false);
  useEffect(()=>{
    const listener = EventRegister.addEventListener('ChangeTheme', 
      (data)=>{setDarkMode(data)})

      return ()=>{
        EventRegister.removeAllListeners(listener)
      }
  }, [darkMode])

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Cards' component={Cards}/>
        <Tab.Screen name='Statistics' component={Statistics}/>
        <Tab.Screen name='Settings' component={Settings}/>
      </Tab.Navigator>
    </NavigationContainer>
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
