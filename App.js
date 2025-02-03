import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UserPage from './components/UserPage/UserPage';
import NewWorkoutForm from './components/NewWorkout/NewWorkoutForm';
import WorkoutPage from './components/WorkoutPage/WorkoutPage';
import LoadingScreen from './components/extras/Spacer/LoadingScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('jwt');
      setIsAuthenticated(!!token);
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Loading" component={LoadingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={() => <DrawerNavigator isAuthenticated={isAuthenticated} />} />
        <Stack.Screen name="WorkoutPage" component={WorkoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DrawerNavigator = ({ isAuthenticated }) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Login" component={Login} />
      
      {isAuthenticated && (
        <>
          <Drawer.Screen name="NewWorkoutForm" component={NewWorkoutForm} />
          <Drawer.Screen name="UserPage" component={UserPage} />
        </>
      )}
    </Drawer.Navigator>
  );
};
