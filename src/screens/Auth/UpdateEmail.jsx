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
import { getValidationSchema } from '../../utils/validationSchema';
import BASE_COLORS from '../../utils/colors';
import { useRoute } from '@react-navigation/native';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomHeader from '../../componets/CustomHeaders';
import CustomTextInput from '../../componets/CustomTextInput';
import CustomButton from '../../componets/CustomButton';

const UpdateEmail = () => {
  const navigation = useNavigation();

  const handleLogin = values => {
    navigation.navigate('signup_otp_verify');
  };

  return (
    <AuthWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <CustomHeader
          leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
          onLeftPress={() => navigation.goBack()}
          description="It seems like you didn’t receive the email. Please enter a new email address, and we’ll send the verification code again."
          heading="Update Your Email "
          headingTextStyle={{ fontSize: 22, marginTop: -4 }}
          descriptionTextStyle={{
            textAlign: 'left',
            fontSize: 10,
            paddingHorizontal: 2,
            marginBottom: 25,
          }}
          showWelcomeText={false}
          showDescription={true}
          showHeading={true}
        />

        <Formik
          initialValues={{ email: '' }}
          validationSchema={getValidationSchema('emailUpdate')}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              <View
                style={{
                  height: 254,
                  justifyContent: 'space-between',
                }}
              >
                <CustomTextInput
                  placeholder="Enter your email"
                  iconName="mail-outline"
                  iconColor={BASE_COLORS.TEXT_RED}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <CustomButton
                  label="Submit"
                  onPress={handleSubmit}
                  style={{ marginHorizontal: 3 }}
                />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export default UpdateEmail;

const styles = StyleSheet.create({
  errorText: {
    color: BASE_COLORS.PRIMARY,
    fontSize: 12,
  },
  button: {
    marginHorizontal: 3,
    marginBottom: 6,
  },
});
