import React, {memo, FC} from 'react';
import {SafeAreaView} from 'react-native';

import styles from './styles';

interface Props {}

const CommonScreenLayout: FC<Props> = ({children, ...rest}) => (
  <SafeAreaView {...rest} style={styles.container}>
    {children}
  </SafeAreaView>
);

export default memo(CommonScreenLayout);
