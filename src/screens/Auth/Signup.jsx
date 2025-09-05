import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Formik } from 'formik';
import { getValidationSchema } from '../../utils/validationSchema';

import CustomButton from '../../componets/CustomButton';
import CustomTextInput from '../../componets/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../componets/CustomHeaders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthWrapper from '../../componets/AuthWrapper';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { FONTS } from '../../theme/fonts';
import BASE_COLORS from '../../utils/colors';

const Signup = () => {
  const navigation = useNavigation();

  // const role = useSelector(state => state.auth.role);
  return (
    <AuthWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <CustomHeader
          leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
          onLeftPress={() => navigation.goBack()}
          description="Let’s get started with your job-seeking journey."
          heading="Create New Account"
          headingTextStyle={{
            fontSize: 24,
          }}
          descriptionTextStyle={{
            color: BASE_COLORS.SECONDARY_LIGHT,
            marginTop: 6,
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
                navigation.navigate('peronsal_information');
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
                    label="Sign Up"
                    onPress={handleSubmit}
                    style={{
                      marginHorizontal: 3,
                      marginBottom: 6,
                      marginTop: 50,
                    }}
                  />
                </>
              )}
            </Formik>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('login_screen')}
            >
              <Text style={styles.signupText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
    height: 510,
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
  },

  forgotText: {
    fontSize: 12,
    marginTop: -6,
    alignSelf: 'flex-end',
  },
  errorText: {
    color: BASE_COLORS.PRIMARY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    marginBottom: 5,
    marginTop: -4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(16),
  },
  checkbox: {
    width: moderateScale(14),
    height: moderateScale(14),
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: BASE_COLORS.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 15,
  },
  termsText: {
    flex: 1,
    fontSize: moderateScale(10),
    fontFamily: FONTS.MEDIUM,
    color: BASE_COLORS.TEXT_GRAY,
    marginBottom: 16,
  },
  linkText: {
    color: BASE_COLORS.TEXT_RED,
    fontFamily: 'Poppins_600SemiBold',
  },
  signupText: {
    color: BASE_COLORS.PRIMARY,
    fontFamily: FONTS.MEDIUM,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
