import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResumeLanguage = () => {
  return (
    <View>
      <Text>ResumeLanguage</Text>
    </View>
  );
};

export default ResumeLanguage;

const styles = StyleSheet.create({});

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// import AuthWrapper from '../../componets/AuthWrapper';
// import CustomHeader from '../../componets/CustomHeaders';
// import CustomButton from '../../componets/CustomButton';
// import BASE_COLORS from '../../utils/colors';
// import { FONTS } from '../../theme/fonts';

// const SelectResumeLanguageScreen = () => {
//   const navigation = useNavigation();
//   const [selectedLanguage, setSelectedLanguage] = useState('English');

//   return (
//     <AuthWrapper>
//       <CustomHeader
//         leftIcon={
//           <Ionicons name="chevron-back" size={24} color={BASE_COLORS.BLACK} />
//         }
//         onLeftPress={() => navigation.goBack()}
//         heading="Select Resume Language"
//         showWelcomeText={false}
//         headingTextStyle={{
//           fontFamily: FONTS.BOLD,
//           fontSize: moderateScale(22),
//         }}
//         showHeading
//       />

//       <View style={styles.container}>
//         <View>
//           {/* English Option */}
//           <TouchableOpacity
//             style={[
//               styles.option,
//               selectedLanguage === 'English' && styles.activeOption,
//             ]}
//             onPress={() => setSelectedLanguage('English')}
//           >
//             <Ionicons
//               name={
//                 selectedLanguage === 'English'
//                   ? 'radio-button-on'
//                   : 'radio-button-off'
//               }
//               size={20}
//               color={BASE_COLORS.PRIMARY}
//               style={styles.radioIcon}
//             />
//             <Text style={styles.optionText}>English</Text>
//           </TouchableOpacity>

//           {/* Spanish Option */}
//           <TouchableOpacity
//             style={[
//               styles.option,
//               selectedLanguage === 'Spanish' && styles.activeOption,
//             ]}
//             onPress={() => setSelectedLanguage('Spanish')}
//           >
//             <Ionicons
//               name={
//                 selectedLanguage === 'Spanish'
//                   ? 'radio-button-on'
//                   : 'radio-button-off'
//               }
//               size={20}
//               color={BASE_COLORS.PRIMARY}
//               style={styles.radioIcon}
//             />
//             <Text style={styles.optionText}>Español (Spanish)</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Continue Button at Bottom */}
//         <CustomButton
//           label="Continue"
//           onPress={() =>
//             navigation.navigate('resume_form_screen', {
//               language: selectedLanguage,
//             })
//           }
//           style={{ marginHorizontal: 3, marginBottom: verticalScale(20), height: 53 }}
//           textStyle={{ fontSize: 14 }}
//         />
//       </View>
//     </AuthWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: moderateScale(10),
//     justifyContent: 'space-between', // pushes button to bottom
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: BASE_COLORS.BORDER_COLOR,
//     borderRadius: moderateScale(10),
//     padding: moderateScale(14),
//     marginVertical: verticalScale(8),
//   },
//   activeOption: {
//     borderColor: BASE_COLORS.BORDER_COLOR,
//   },
//   radioIcon: {
//     marginRight: moderateScale(10),
//   },
//   optionText: {
//     fontFamily: FONTS.MEDIUM,
//     fontSize: moderateScale(14),
//     color: BASE_COLORS.BLACK,
//   },
// });

// export default SelectResumeLanguageScreen;
