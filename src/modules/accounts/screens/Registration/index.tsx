import React, {memo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Button, Caption, Title} from 'react-native-paper';

import {AccountsScreenNames} from '../../../../app/navigation/AccountsNavigator/config';
import RegistrationForm from '../../containers/RegistrationForm';
import CommonScreenLayout from '../../../../shared/components/CommonScreenLayout';
import styles from './styles';

const Registration = () => {
  const navigation = useNavigation();

  const handleNavigateToLoginScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(AccountsScreenNames.Login);
  }, [navigation]);

  return (
    <CommonScreenLayout>
      <View style={styles.container}>
        <Title style={styles.title}>Registration</Title>
        <RegistrationForm />
        <View style={styles.textWrapper}>
          <Caption>Already have an account?</Caption>
          <Button compact mode={'text'} onPress={handleNavigateToLoginScreen}>
            Sign In
          </Button>
        </View>
      </View>
    </CommonScreenLayout>
  );
};

export default memo(Registration);
