import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResumePreview = () => {
  return (
    <View>
      <Text>ResumePreview</Text>
    </View>
  );
};

export default ResumePreview;

// const styles = StyleSheet.create({});

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// import AuthWrapper from '../../componets/AuthWrapper';
// import CustomHeader from '../../componets/CustomHeaders';
// import CustomButton from '../../componets/CustomButton';
// import BASE_COLORS from '../../utils/colors';
// import { FONTS } from '../../theme/fonts';

// const ResumePreviewScreen = () => {
//   const navigation = useNavigation();

//   // 📝 Handlers
//   const handleEdit = () => {
//     navigation.navigate('EditResumeScreen'); // aapka edit screen ka name daaliye
//   };

//   const handleDelete = () => {
//     // confirm delete popup ya action
//     alert('Are you sure you want to delete this resume?');
//   };

//   return (
//     <AuthWrapper>
//       {/* Header Back */}
//       <CustomHeader
//         leftIcon={<Ionicons name="chevron-back" size={24} color={BASE_COLORS.BLACK} />}
//         onLeftPress={() => navigation.goBack()}
//       />

//       {/* Heading Row with Edit + Delete */}
//       <View style={styles.headerRow}>
//         <Text style={styles.headerTitle}>Your Resume</Text>
//         <View style={styles.iconRow}>
//           <TouchableOpacity style={styles.iconButton} onPress={handleEdit}>
//             <Ionicons name="pencil-outline" size={18} color={BASE_COLORS.BLACK} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
//             <Ionicons name="trash-outline" size={18} color={BASE_COLORS.BLACK} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Scroll Content */}
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Profile Info */}
//         <View style={styles.profileSection}>
//           <Text style={styles.name}>Megan</Text>

//           <View style={styles.row}>
//             <Ionicons
//               name="mail-outline"
//               size={18}
//               color={BASE_COLORS.LIGHT_GRAY}
//               style={styles.icon}
//             />
//             <Text style={styles.info}>megan@email.com</Text>
//           </View>

//           <View style={styles.row}>
//             <Ionicons
//               name="call-outline"
//               size={18}
//               color={BASE_COLORS.LIGHT_GRAY}
//               style={styles.icon}
//             />
//             <Text style={styles.info}>+1 234 567 890</Text>
//           </View>

//           <View style={styles.row}>
//             <Ionicons
//               name="location-outline"
//               size={18}
//               color={BASE_COLORS.LIGHT_GRAY}
//               style={styles.icon}
//             />
//             <Text style={styles.info}>San Francisco, California</Text>
//           </View>
//         </View>

//         {/* Professional Summary */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Professional Summary</Text>
//           <Text style={styles.cardText}>
//             A detail-oriented Business Analyst with 5+ years of experience in analyzing business
//             processes and delivering data-driven solutions. Skilled in data analysis, process
//             optimization, and stakeholder collaboration. Proficient in SQL, Excel, and Power BI.
//             Seeking to apply my expertise in business analysis to drive growth at Tech Solutions Inc..
//           </Text>
//         </View>

//         {/* Experience */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Experience</Text>
//           <Text style={styles.cardSubTitle}>Business Analyst</Text>
//           <Text style={styles.cardText}>Tech Solutions Inc., San Francisco, CA</Text>
//           <Text style={styles.cardText}>January 2024 – Present</Text>

//           <Text style={styles.cardSubTitle}>Junior Business Analyst</Text>
//           <Text style={styles.cardText}>Innovative Solutions Ltd., San Francisco, CA</Text>
//           <Text style={styles.cardText}>January 2023 – December 2023</Text>
//         </View>

//         {/* Education */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Education</Text>
//           <Text style={styles.cardSubTitle}>Bachelor of Science in Business Administration</Text>
//           <Text style={styles.cardText}>University of California, Berkeley, Berkeley, CA</Text>
//           <Text style={styles.cardText}>Graduated: May 2017</Text>
//         </View>

//         {/* Certification */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Certification</Text>
//           <Text style={styles.cardSubTitle}>Certified Business Analysis Professional (CBAP)</Text>
//           <Text style={styles.cardText}>International Institute of Business Analysis (IIBA)</Text>
//           <Text style={styles.cardText}>Issued: 2020</Text>
//         </View>

//         {/* Skills */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Skills</Text>
//           <Text style={styles.cardText}>Data Analysis: SQL, Excel, Power BI, Tableau</Text>
//           <Text style={styles.cardText}>Business Process Improvement</Text>
//           <Text style={styles.cardText}>Project Management: Agile, Scrum</Text>
//           <Text style={styles.cardText}>Stakeholder Management</Text>
//           <Text style={styles.cardText}>Reporting and Dashboards</Text>
//         </View>

//         {/* Languages */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Languages</Text>
//           <Text style={styles.cardText}>English: Native</Text>
//           <Text style={styles.cardText}>Spanish: Intermediate</Text>
//         </View>
//       </ScrollView>

//       {/* Bottom Buttons */}
//       <View style={styles.bottomButtons}>
//         <CustomButton
//           label="Export as PDF"
//           onPress={() => navigation.navigate('ExportScreen')}
//           style={[styles.button, styles.filledButton]}
//           textStyle={{ color: BASE_COLORS.PRIMARY }}
//         />
//         <CustomButton
//           label="Save"
//           onPress={() => navigation.navigate('SaveScreen')}
//           style={[styles.button, styles.filledButtonSave]}
//           textStyle={{ color: BASE_COLORS.WHITE }}
//         />
//       </View>
//     </AuthWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   profileSection: {
//     marginBottom: verticalScale(15),
//     padding: moderateScale(12),
//   },
//   name: {
//     fontFamily: FONTS.BOLD,
//     fontSize: moderateScale(22),
//     color: BASE_COLORS.BLACK,
//     marginVertical: 3,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 3,
//   },
//   icon: {
//     marginRight: 6,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: moderateScale(12),
//     paddingVertical: verticalScale(10),
//     backgroundColor: BASE_COLORS.WHITE,
//   },
//   headerTitle: {
//     fontFamily: FONTS.BOLD,
//     fontSize: moderateScale(24),
//     color: BASE_COLORS.BLACK,
//   },
//   iconRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     width: moderateScale(32),
//     height: moderateScale(32),
//     borderRadius: moderateScale(8),
//     backgroundColor: BASE_COLORS.WHITE,
//     borderWidth: 1,
//     borderColor: BASE_COLORS.BORDER_COLOR,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginLeft: 8,
//   },
//   info: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: moderateScale(13),
//     color: BASE_COLORS.LIGHT_GRAY,
//   },
//   card: {
//     backgroundColor: BASE_COLORS.WHITE,
//     borderWidth: 1,
//     borderColor: BASE_COLORS.BORDER_COLOR,
//     borderRadius: moderateScale(12),
//     padding: moderateScale(12),
//     marginBottom: verticalScale(12),
//   },
//   cardTitle: {
//     fontFamily: FONTS.BOLD,
//     fontSize: moderateScale(18),
//     color: BASE_COLORS.BLACK,
//     marginVertical: verticalScale(8),
//   },
//   cardSubTitle: {
//     fontFamily: FONTS.MEDIUM,
//     fontSize: moderateScale(13),
//     color: BASE_COLORS.BLACK,
//     marginBottom: verticalScale(4),
//   },
//   cardText: {
//     fontFamily: FONTS.REGULAR,
//     fontSize: moderateScale(12),
//     color: BASE_COLORS.LIGHT_GRAY,
//     lineHeight: 18,
//   },
//   bottomButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: moderateScale(12),
//     paddingVertical: verticalScale(12),
//     backgroundColor: BASE_COLORS.WHITE,
//   },
//   button: {
//     flex: 1,
//     height: verticalScale(45),
//     marginHorizontal: moderateScale(5),
//     borderRadius: moderateScale(10),
//   },
//   filledButton: {
//     backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
//   },
//   filledButtonSave: {
//     backgroundColor: BASE_COLORS.PRIMARY,
//   },
// });

// export default ResumePreviewScreen;
