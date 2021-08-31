import React, {memo, FC} from 'react';
import {View} from 'react-native';

import styles from './styles';

interface Props {}

const Spacer: FC<Props> = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export default memo(Spacer);
