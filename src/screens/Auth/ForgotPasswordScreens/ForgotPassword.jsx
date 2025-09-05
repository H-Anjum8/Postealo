import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomHeader from '../../../componets/CustomHeaders';
import CustomButton from '../../../componets/CustomButton';
import CustomTextInput from '../../../componets/CustomTextInput';
import BASE_COLORS from '../../../utils/colors';
import { getValidationSchema } from '../../../utils/validationSchema';
import AuthWrapper from '../../../componets/AuthWrapper';
import { FONTS } from '../../../theme/fonts';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const handleLogin = values => {
    navigation.navigate('verify_otp');
  };

  return (
    <AuthWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <CustomHeader
          leftIcon={
            <Ionicons name="chevron-back" size={24} color={BASE_COLORS.BLACK} />
          }
          onLeftPress={() => navigation.goBack()}
          description="Kindly provide the registered email to change the passcode."
          heading="Enter Your Email"
          showWelcomeText={false}
          descriptionTextStyle={{
            textAlign: 'left',
            fontSize: 14,
            marginTop: 10,
            marginVertical: 90,
            color: BASE_COLORS.SECONDARY_LIGHT,
            fontFamily: FONTS.REGULAR,
          }}
          headingTextStyle={{
            fontFamily: FONTS.BOLD,
          }}
          showDescription
          showHeading
        />

        <Formik
          initialValues={{ email: '' }}
          validationSchema={getValidationSchema('add_email')}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <View style={styles.formContainer}>
                <CustomTextInput
                  placeholder="Enter your email"
                  iconName="mail-outline"
                  iconColor={BASE_COLORS.LIGHT_GRAY}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <CustomButton
                  label="Submit"
                  onPress={handleSubmit}
                  style={{
                    marginHorizontal: 3,
                    marginTop: 120,
                    height: 54,
                    marginBottom: 0,
                  }}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  errorText: {
    color: BASE_COLORS.PRIMARY,
    fontSize: 12,
    marginVertical: 12,
    fontFamily: FONTS.REGULAR,
  },
  button: {
    marginHorizontal: 2,
    height: 56,
    marginTop: 80,
    marginVertical: 40,
  },
});
