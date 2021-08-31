import React, {memo, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Caption, Button, Title} from 'react-native-paper';

import CommonScreenLayout from '../../../../shared/components/CommonScreenLayout';
import LoginForm from '../../containers/LoginForm';
import {AccountsScreenNames} from '../../../../app/navigation/AccountsNavigator/config';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();

  const handleNavigateToRegistrationScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate(AccountsScreenNames.Registration);
  }, [navigation]);

  return (
    <CommonScreenLayout>
      <View style={styles.container}>
        <Title style={styles.title}>Login</Title>
        <LoginForm />
        <View style={styles.textWrapper}>
          <Caption>Dont have account?</Caption>
          <Button
            compact
            mode={'text'}
            onPress={handleNavigateToRegistrationScreen}>
            Sign Up
          </Button>
        </View>
      </View>
    </CommonScreenLayout>
  );
};

export default memo(Login);
