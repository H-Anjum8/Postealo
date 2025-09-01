import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PeronsalInformation = () => {
  return (
    <View>
      <Text>PeronsalInformation</Text>
    </View>
  );
};

export default PeronsalInformation;

const styles = StyleSheet.create({});

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Linking,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { Formik } from 'formik';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import BASE_COLORS from '../../utils/colors';
// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import AuthWrapper from '../../components/AuthWrapper';
// import CustomHeader from '../../components/CustomHeaders';
// import { getValidationSchema } from '../../utils/validationSchema';
// import { FONTS } from '../../theme/fonts';

// const Signup = () => {
//   const navigation = useNavigation();
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   const openTerms = () => {
//     Linking.openURL('https://yourapp.com/terms');
//   };

//   const openPrivacy = () => {
//     Linking.openURL('https://yourapp.com/privacy');
//   };

//   return (
//     <AuthWrapper>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         <CustomHeader
//           leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
//           onLeftPress={() => navigation.goBack()}
//           showWelcomeText={false}
//           showDescription={true}
//           showUsername={true}
//           username="Personal Information"
//           description="Let's get started with your job-seeking journey."
//           usernameTextStyle={{ fontSize: 22 }}
//           descriptionTextStyle={{
//             textAlign: 'left',
//             fontSize: 11,
//             marginBottom: 30,
//           }}
//           onNotificationPress={() =>
//             navigation.navigate('all_notifications_screen')
//           }
//           contentContainerStyle={{ alignItems: 'flex-start' }}
//         />

//         <Formik
//           initialValues={{
//             fullName: '',
//             phone: '',
//             education: '',
//             experience: '',
//             skills: '',
//             preferredLocation: '',
//           }}
//           validationSchema={getValidationSchema('personalInfo')}
//           onSubmit={values => {
//             if (!agreeTerms) return;
//             console.log('Personal Info:', values);
//             navigation.navigate('signup_otp_verify');
//           }}
//         >
//           {({ handleChange, handleSubmit, values, errors, touched }) => (
//             <>
//               <CustomTextInput
//                 placeholder="Your Full Name"
//                 iconName="person-outline"
//                 value={values.fullName}
//                 onChangeText={handleChange('fullName')}
//               />
//               {touched.fullName && errors.fullName && (
//                 <Text style={styles.errorText}>{errors.fullName}</Text>
//               )}

//               <CustomTextInput
//                 placeholder="Enter Your Phone"
//                 iconName="call-outline"
//                 value={values.phone}
//                 onChangeText={handleChange('phone')}
//                 keyboardType="phone-pad"
//               />
//               {touched.phone && errors.phone && (
//                 <Text style={styles.errorText}>{errors.phone}</Text>
//               )}

//               <CustomTextInput
//                 placeholder="Education"
//                 iconName="school-outline"
//                 value={values.education}
//                 onChangeText={handleChange('education')}
//               />
//               {touched.education && errors.education && (
//                 <Text style={styles.errorText}>{errors.education}</Text>
//               )}

//               <CustomTextInput
//                 placeholder="Experience"
//                 iconName="briefcase-outline"
//                 value={values.experience}
//                 onChangeText={handleChange('experience')}
//               />
//               {touched.experience && errors.experience && (
//                 <Text style={styles.errorText}>{errors.experience}</Text>
//               )}

//               <CustomTextInput
//                 placeholder="Skills"
//                 iconName="bulb-outline"
//                 value={values.skills}
//                 onChangeText={handleChange('skills')}
//               />
//               {touched.skills && errors.skills && (
//                 <Text style={styles.errorText}>{errors.skills}</Text>
//               )}

//               <CustomTextInput
//                 placeholder="Preferred Location"
//                 iconName="location-outline"
//                 value={values.preferredLocation}
//                 onChangeText={handleChange('preferredLocation')}
//               />
//               {touched.preferredLocation && errors.preferredLocation && (
//                 <Text style={styles.errorText}>{errors.preferredLocation}</Text>
//               )}

//               {/* Terms & Conditions */}
//               <View style={styles.checkboxRow}>
//                 <TouchableOpacity
//                   style={[
//                     styles.checkbox,
//                     {
//                       backgroundColor: agreeTerms
//                         ? BASE_COLORS.SECONDARY
//                         : '#fff',
//                     },
//                   ]}
//                   onPress={() => setAgreeTerms(!agreeTerms)}
//                 >
//                   {agreeTerms && (
//                     <Ionicons
//                       name="checkmark"
//                       size={moderateScale(10)}
//                       color="#fff"
//                     />
//                   )}
//                 </TouchableOpacity>
//                 <Text style={styles.termsText}>
//                   By continuing, you agree to the{' '}
//                   <Text style={styles.linkText} onPress={openTerms}>
//                     Terms of Service
//                   </Text>{' '}
//                   and{' '}
//                   <Text style={styles.linkText} onPress={openPrivacy}>
//                     Privacy Policy
//                   </Text>
//                 </Text>
//               </View>

//               <CustomButton
//                 label="Continue"
//                 disabled={!agreeTerms}
//                 onPress={handleSubmit}
//                 style={{
//                   marginHorizontal: 3,
//                   marginTop: 14,
//                   marginBottom: 6,
//                   height: 55,
//                 }}
//               />
//             </>
//           )}
//         </Formik>
//       </KeyboardAvoidingView>
//     </AuthWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   errorText: {
//     color: BASE_COLORS.TEXT_RED,
//     fontSize: 12,
//     fontFamily: FONTS.REGULAR,
//     marginBottom: 5,
//     marginTop: -4,
//   },
//   checkboxRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: verticalScale(16),
//   },
//   checkbox: {
//     width: moderateScale(14),
//     height: moderateScale(14),
//     borderRadius: 8,
//     borderWidth: 1.5,
//     borderColor: BASE_COLORS.SECONDARY,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//     marginBottom: 15,
//   },
//   termsText: {
//     flex: 1,
//     fontSize: moderateScale(10),
//     fontFamily: FONTS.MEDIUM,
//     color: BASE_COLORS.TEXT_GRAY,
//     marginBottom: 16,
//   },
//   linkText: {
//     color: BASE_COLORS.TEXT_RED,
//     fontFamily: 'Poppins_600SemiBold',
//   },
// });

// export default Signup;
