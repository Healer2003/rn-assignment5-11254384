import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign,Feather } from '@expo/vector-icons';

export default function App(){
  
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
     <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings';
        }
        return(
        <Feather name={iconName} size={size} color={color} />
        );
      },
      headerShown:false,
    })}

    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen  name='Home' component={Home}/>
     </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    paddingHorizontal:25,
    backgroundColor: '#fff',
  },
  
});
