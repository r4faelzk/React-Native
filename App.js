import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import FeedBook from './screens/FeedBook';
import DetailBook from './screens/DetailBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "LOGIN", statusBarColor: 'blue' }}
        />

        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{ title: "CADASTRO", statusBarColor: 'blue' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
