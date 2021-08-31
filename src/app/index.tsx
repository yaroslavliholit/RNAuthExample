import React, {memo} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigation from './navigation';

const App = () => (
  <PaperProvider>
    <Navigation />
  </PaperProvider>
);

export default memo(App);
