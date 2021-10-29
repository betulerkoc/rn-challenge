/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Episodes from './screen/Episodes'
import CharacterDetail from './screen/CharacterDetail';
import EpisodeDetail from './screen/EpisodeDetail';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rick and Morty" component={Episodes} />
        <Stack.Screen name="Episode Detail" component={EpisodeDetail} />
        <Stack.Screen name="Character Detail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
