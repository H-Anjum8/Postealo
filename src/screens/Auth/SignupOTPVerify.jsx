import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BASE_COLORS from '../../utils/colors';
import { FONTS } from '../../theme/fonts';
import { getValidationSchema } from '../../utils/validationSchema';
import CustomHeader from '../../componets/CustomHeaders';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomButton from '../../componets/CustomButton';

const VerifyOTP = () => {
  const navigation = useNavigation();
  const inputs = useRef([]);

  const handleChangeDigit = (text, index, values, setFieldValue) => {
    if (text.length > 1) return;

    const updatedOtp = [...values.otp];
    updatedOtp[index] = text;
    setFieldValue('otp', updatedOtp);

    if (text !== '' && index < 3) {
      // Move to next box if not last one
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = values => {
    const finalCode = values.otp.join('');
    console.log('Entered Code:', finalCode);
    navigation.navigate('upload_profile_image');
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
              description="Enter the 6-digit code sent to your email/phone"
              descriptionTextStyle={{
                textAlign: 'left',
                fontSize: 11,
                marginTop: 2,
              }}
              headingTextStyle={{
                textAlign: 'left',
                fontSize: 24,
              }}
              onNotificationPress={() =>
                navigation.navigate('all_notifications_screen')
              }
              contentContainerStyle={{ alignItems: 'flex-start' }}
            />

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
              style={{
                marginHorizontal: 3,
                marginTop: 70,
                marginBottom: 0,
                height: 54,
              }}
            />

            <Text style={styles.resendText}>
              Didn't receive the email? Check your spam filter or try {'\n'}
              <Text
                style={styles.resendLink}
                onPress={() => navigation.navigate('update_email')}
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
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(5),
    marginTop: 38,
  },
  codeInput: {
    width: moderateScale(70),
    height: moderateScale(49),
    borderWidth: 1,
    borderColor: BASE_COLORS.PRIMARY,

    borderRadius: 10,
    textAlign: 'center',
    fontSize: moderateScale(20),
    color: BASE_COLORS.WHITE,
  },
  phoneMessage: {
    textAlign: 'center',
    marginTop: verticalScale(18),
    fontSize: moderateScale(10),
    color: BASE_COLORS.TEXT_SECONDARY,
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
    fontSize: moderateScale(10),
    color: BASE_COLORS.TEXT_GRAY,
    fontFamily: FONTS.REGULAR,
  },
  emailText: {
    textAlign: 'left',
    marginHorizontal: 4,
    marginBottom: verticalScale(30),
    fontSize: moderateScale(12),
    color: BASE_COLORS.TEXT_SECONDARY,
    fontFamily: FONTS.REGULAR,
  },
  resendLink: {
    color: BASE_COLORS.SECONDARY,
    fontFamily: FONTS.REGULAR,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: verticalScale(10),
    fontSize: moderateScale(12),
  },
});
