import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomHeader from '../../../componets/CustomHeaders';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { getValidationSchema } from '../../../utils/validationSchema';
import AuthWrapper from '../../../componets/AuthWrapper';
import { FONTS } from '../../../theme/fonts';

const VerifyOTP = () => {
  const navigation = useNavigation();
  const inputs = useRef([]);

  const handleChangeDigit = (text, index, values, setFieldValue) => {
    if (text.length > 1) return;

    const updatedOtp = [...values.otp];
    updatedOtp[index] = text;
    setFieldValue('otp', updatedOtp);

    if (text !== '' && index < values.otp.length - 1) {
      // Move to next box if not last one
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = values => {
    const finalCode = values.otp.join('');
    console.log('Entered Code:', finalCode);
    navigation.navigate('reset_password');
  };

  return (
    <Formik
      initialValues={{ otp: ['', '', '', ''] }}
      validationSchema={getValidationSchema('signup_verify_otp')}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleSubmit, setFieldValue }) => (
        <AuthWrapper>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <CustomHeader
              leftIcon={
                <Ionicons name="chevron-back" size={24} color="black" />
              }
              onLeftPress={() => navigation.goBack()}
              showWelcomeText={false}
              showDescription={true}
              showHeading={true}
              heading="Email Verification"
              usernameTextStyle={{
                textAlign: 'left',
                fontSize: 22,
              }}
              onNotificationPress={() =>
                navigation.navigate('all_notifications_screen')
              }
              contentContainerStyle={{ alignItems: 'flex-start' }}
            />

            <TouchableOpacity onPress={() => console.log('Resend code')}>
              <Text style={styles.emailText}>
                We've sent a verification code to the email {'\n'}
                <Text style={styles.resendLink}> info@gmail.com</Text>
              </Text>
            </TouchableOpacity>

            {/* 5 Digit Code Boxes */}
            <View style={styles.codeContainer}>
              {values.otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={el => (inputs.current[index] = el)}
                  style={[
                    styles.codeInput,
                    digit !== '' && { backgroundColor: BASE_COLORS.PRIMARY },
                  ]}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={text =>
                    handleChangeDigit(text, index, values, setFieldValue)
                  }
                />
              ))}
            </View>
            {errors.otp && touched.otp && (
              <Text style={styles.errorText}>{errors.otp}</Text>
            )}
            <Text style={styles.phoneMessage}>Resend Code</Text>

            <CustomButton
              label="Submit"
              onPress={handleSubmit}
              style={{ marginHorizontal: 3, marginTop: 66, marginBottom: 0 }}
            />

            <Text style={styles.resendText}>
              Didn't receive the email? Check your spam filter or try {'\n'}
              <Text
                style={styles.resendLink}
                onPress={() =>
                  navigation.navigate('update_email', { type: 'verify_otp' })
                }
                // onPress={() => navigation.navigate('update_email')}
              >
                another email address.
              </Text>
            </Text>
          </KeyboardAvoidingView>
        </AuthWrapper>
      )}
    </Formik>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: moderateScale(9),
    marginTop: 20,
  },
  codeInput: {
    width: moderateScale(69),
    height: moderateScale(49),
    borderWidth: 1,
    borderColor: BASE_COLORS.LIGHT_GRAY,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: BASE_COLORS.WHITE,
  },
  phoneMessage: {
    textAlign: 'center',
    marginTop: verticalScale(18),
    fontSize: moderateScale(10),
    color: BASE_COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    fontWeight: 700,
  },
  phoneNumber: {
    color: BASE_COLORS.PRIMARY,
  },
  resendText: {
    textAlign: 'left',
    marginHorizontal: 4,
    marginTop: verticalScale(13),
    fontSize: moderateScale(12),
    color: BASE_COLORS.GRAY,
    fontFamily: FONTS.REGULAR,
  },
  emailText: {
    textAlign: 'left',
    marginHorizontal: 4,
    marginTop: 2,
    marginBottom: verticalScale(30),
    fontSize: moderateScale(12),
    color: BASE_COLORS.GRAY,
    fontFamily: FONTS.REGULAR,
  },
  resendLink: {
    color: BASE_COLORS.SECONDARY,
    fontFamily: FONTS.REGULAR,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: verticalScale(10),
    fontSize: moderateScale(12),
  },
});
