import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {INITIAL_ROUTE_NAME, SCREENS} from './config';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
    {SCREENS.map(screen => (
      <Stack.Screen key={screen.name} {...screen} />
    ))}
  </Stack.Navigator>
);

export default memo(AppNavigator);
