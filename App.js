import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UserPage from './components/UserPage/UserPage';
import NewWorkoutForm from './components/NewWorkout/NewWorkoutForm';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import LoadingScreen from './components/extras/Spacer/LoadingScreen';

const Drawer = createDrawerNavigator();

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
          <Drawer.Screen name="Loading" component={() => <LoadingScreen />} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="NewWorkoutForm" component={NewWorkoutForm} />
        {isAuthenticated && (
          <Drawer.Screen name="User Page" component={UserPage} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
