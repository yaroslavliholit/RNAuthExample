import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AccountsNavigator from './AccountsNavigator';
import AppNavigator from './AppNavigator';

const Navigation = () => {
  const isUserSignedIn = false;

  return (
    <NavigationContainer>
      {isUserSignedIn ? <AppNavigator /> : <AccountsNavigator />}
    </NavigationContainer>
  );
};

export default memo(Navigation);
