import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import { getValidationSchema } from '../../utils/validationSchema';
import BASE_COLORS from '../../utils/colors';
import COLORS from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FONTS } from '../../theme/fonts';
import CustomHeader from '../../componets/CustomHeaders';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomTextInput from '../../componets/CustomTextInput';
import CustomButton from '../../componets/CustomButton';
const Login = ({ route }) => {
  const navigation = useNavigation();

  return (
    <AuthWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <CustomHeader
          leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
          onLeftPress={() => navigation.goBack()}
          description="Pleae login to continue."
          heading="Login to Your Account"
          headingTextStyle={{
            fontSize: 24,
          }}
          showWelcomeText={false}
          showDescription={true}
          showHeading={true}
        />
        <View style={styles.mainContainer}>
          <View>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={getValidationSchema('login')}
              onSubmit={values => {
                console.log('Logging in with:', values);

                // Navigate based on role
                navigation.navigate('dashboard');
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                  <CustomTextInput
                    placeholder="Phone Number or Email"
                    iconName="mail-outline"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Enter Your Password"
                    iconName="lock-closed-outline"
                    secure
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}

                  <TouchableOpacity style={styles.forgotButton}>
                    <Text
                      style={styles.forgotText}
                      onPress={() => navigation.navigate('forgot_password')}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>

                  <CustomButton
                    label="Login In"
                    onPress={handleSubmit}
                    style={{
                      marginHorizontal: 3,
                      marginBottom: 6,
                      marginTop: 47,
                    }}
                  />
                </>
              )}
            </Formik>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.footerText}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',

    height: 600,
  },
  errorText: {
    color: BASE_COLORS.TEXT_RED,
    fontSize: 12,
    marginBottom: 12,
    marginTop: -4,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    fontSize: 12,
    color: BASE_COLORS.TEXT_RED,
  },
  button: {
    marginTop: 20,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.TEXT_TERNARY,
  },
  signupText: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
