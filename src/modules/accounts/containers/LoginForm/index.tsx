import React, {memo, useCallback} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';

import Spacer from '../../../../shared/components/Spacer';
import {formValidationSchema, initialFormValues} from './config';

const LoginForm = () => {
  const handleFormSubmit = useCallback(async (values, {resetForm}) => {
    console.log(values);
    resetForm();
  }, []);

  return (
    <Formik
      validateOnMount
      validationSchema={formValidationSchema}
      initialValues={initialFormValues}
      onSubmit={handleFormSubmit}>
      {({values, handleChange, isSubmitting, isValid, handleSubmit}) => {
        return (
          <>
            <Spacer>
              <TextInput
                label={'Email'}
                autoCompleteType={'email'}
                keyboardType={'email-address'}
                value={values.email}
                onChangeText={handleChange('email')}
              />
            </Spacer>
            <Spacer>
              <TextInput
                secureTextEntry
                label={'Password'}
                autoCompleteType={'password'}
                value={values.password}
                onChangeText={handleChange('password')}
              />
            </Spacer>
            <Button
              onPress={handleSubmit}
              disabled={!isValid}
              loading={isSubmitting}
              mode={'contained'}>
              Submit
            </Button>
          </>
        );
      }}
    </Formik>
  );
};

export default memo(LoginForm);
