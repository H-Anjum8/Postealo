import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';

import AuthWrapper from '../../../componets/AuthWrapper';
import CustomHeader from '../../../componets/CustomHeaders';
import CustomTextInput from '../../../componets/CustomTextInput';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { FONTS } from '../../../theme/fonts';
import { getValidationSchema } from '../../../utils/validationSchema';

const PersonalInformation = () => {
  const navigation = useNavigation();

  return (
    <AuthWrapper>
      {/* 🔹 Header */}
      <CustomHeader
        leftIcon={
          <Ionicons name="chevron-back" size={24} color={BASE_COLORS.BLACK} />
        }
        onLeftPress={() => navigation.goBack()}
        heading="Personal Information "
        showWelcomeText={false}
        descriptionTextStyle={{
          textAlign: 'left',
          fontSize: 12,
          marginTop: 10,
          marginVertical: 80,
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
        initialValues={{
          name: '',
          email: '',
          phone: '',
        }}
        validationSchema={getValidationSchema('personal_information')}
        onSubmit={values => {
          console.log('Submitted:', values);
          navigation.navigate('setting'); // OR do something else
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.label}>Name</Text>
            <CustomTextInput
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Enter name"
              editable
              leftIcon={
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={BASE_COLORS.GRAY}
                />
              }
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <Text style={styles.label}>Email Address</Text>
            <CustomTextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Enter email"
              editable
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={BASE_COLORS.GRAY}
                />
              }
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text style={styles.label}>Phone No.</Text>
            <CustomTextInput
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              placeholder="111–111–1111"
              editable
              leftIcon={
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={BASE_COLORS.GRAY}
                />
              }
            />
            {touched.phone && errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}

            <CustomButton
              label="Edit"
              onPress={handleSubmit}
              style={{ marginHorizontal: 3, marginTop: 30, height: 53 }}
              textStyle={{ fontSize: 15 }}
            />
          </ScrollView>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: moderateScale(22),
    fontFamily: FONTS.SEMI_BOLD,
    color: BASE_COLORS.BLACK,
  },
  label: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.REGULAR,
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(7),
    marginTop: verticalScale(6),
  },
  errorText: {
    fontSize: moderateScale(11),
    color: BASE_COLORS.PRIMARY,
    marginBottom: verticalScale(4),
    marginTop: -verticalScale(3),
  },
});
