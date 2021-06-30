import React from 'react';
import SearchScreen from './scripts/screens/SearchScreen';
import WeatherScreen from './scripts/screens/WeatherScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './scripts/navigation/routes';
import theme from './scripts/navigation/theme';

const Stack = createStackNavigator();

const options = {headerShown: false};

function index() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={routes.HOME}>
        <Stack.Screen
          name={routes.HOME}
          component={WeatherScreen}
          options={options}
        />
        <Stack.Screen
          name={routes.SEARCH}
          component={SearchScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default index;
