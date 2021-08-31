import React, {memo} from 'react';
import {TextInput, Button} from 'react-native-paper';
import {Formik} from 'formik';

import Spacer from '../../../../shared/components/Spacer';
import {formValidationSchema, initialFormValues} from './config';

const RegistrationForm = () => {
  return (
    <Formik
      validateOnMount
      validationSchema={formValidationSchema}
      initialValues={initialFormValues}
      onSubmit={value => console.log(value)}>
      {({values, handleChange, isSubmitting, isValid, handleSubmit}) => {
        return (
          <>
            <Spacer>
              <TextInput
                label={'Full Name'}
                value={values.fullName}
                onChangeText={handleChange('fullName')}
              />
            </Spacer>
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

export default memo(RegistrationForm);
