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
  const route = useRoute();
  const { type } = route.params || {};

  const handleLogin = values => {
    if (type === 'signup_otp_verify') {
      navigation.navigate('signup_otp_verify');
    } else {
      navigation.navigate('verify_otp');
    }
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
            marginTop: 10,
          }}
          showWelcomeText={false}
          showDescription={true}
          showHeading={true}
        />
        <View style={{ marginTop: 20 }}>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={getValidationSchema('emailUpdate')}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <View
                  style={{
                    height: 230,
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
        </View>
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
