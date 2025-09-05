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

const ResetPassword = () => {
  const navigation = useNavigation();

  const handlePasswordUpdate = values => {
    navigation.navigate('login_screen');
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
          description="Your new password will be different from the existing & previous ones."
          heading="New Password"
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
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={getValidationSchema('newpassword')}
          onSubmit={handlePasswordUpdate}
          validateOnMount
          validateOnBlur
          validateOnChange
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
              {/* Password Label + Input */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password</Text>
                <CustomTextInput
                  placeholder="Enter your password"
                  iconName="lock-closed-outline"
                  iconColor={BASE_COLORS.LIGHT_GRAY}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {/* Confirm Password Label + Input */}

                <Text style={styles.inputLabel}>Confirm Password</Text>
                <CustomTextInput
                  placeholder="Confirm your password"
                  iconName="lock-closed-outline"
                  iconColor={BASE_COLORS.LIGHT_GRAY}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
              <CustomButton
                label="Confirm"
                onPress={handleSubmit}
                style={{
                  marginHorizontal: 3,
                  marginTop: 30,
                  height: 54,
                  marginBottom: 0,
                }}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  errorText: {
    color: BASE_COLORS.PRIMARY,
    fontSize: 12,
    marginVertical: 5,
    fontFamily: FONTS.REGULAR,
  },
  inputGroup: {
    marginTop: 30,
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: FONTS.MEDIUM,
    color: BASE_COLORS.LIGHT_GRAY,
    marginTop: 4,
    marginBottom: 6,
    marginLeft: 4,
  },
});
