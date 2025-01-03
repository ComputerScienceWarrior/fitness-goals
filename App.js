import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UserPage from './components/UserPage/UserPage';
import NewWorkoutForm from './components/NewWorkout/NewWorkoutForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="NewWorkoutForm" component={NewWorkoutForm} />
        <Drawer.Screen name="User Page" component={UserPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
