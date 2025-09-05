// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import { moderateScale, verticalScale } from 'react-native-size-matters';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AuthWrapper from '../../componets/AuthWrapper';
// import CustomHeader from '../../componets/CustomHeaders';
// import CustomTextInput from '../../componets/CustomTextInput';
// import CustomButton from '../../componets/CustomButton';
// import CustomDropdown from '../../componets/CustomDropdown';
// import BASE_COLORS from '../../utils/colors';
// import { FONTS } from '../../theme/fonts';

// const CreateResume = ({ navigation }) => {
//   const [experience, setExperience] = useState([
//     { jobTitle: '', company: '', startDate: '', endDate: '' },
//   ]);
//   const [education, setEducation] = useState([
//     { degree: '', institute: '', graduationYear: '' },
//   ]);
//   const [certifications, setCertifications] = useState([
//     { name: '', issuer: '', year: '' },
//   ]);
//   const [skills, setSkills] = useState(['']);
//   const [languages, setLanguages] = useState([
//     { language: '', proficiency: '' },
//   ]);
//   const [message, setMessage] = useState('');
//   const [dateField, setDateField] = useState(null);
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   // ✅ Date Picker logic
//   const handleConfirmDate = date => {
//     const formatted = date.toISOString().split('T')[0];
//     if (dateField) {
//       const [section, index, field] = dateField;
//       if (section === 'experience') {
//         const updated = [...experience];
//         updated[index][field] = formatted;
//         setExperience(updated);
//       }
//     }
//     setDateField(null);
//     setDatePickerVisibility(false);
//   };

//   // ✅ Save Resume
//   const handleSave = () => {
//     const resumeData = {
//       message,
//       experience,
//       education,
//       certifications,
//       skills,
//       languages,
//     };
//     console.log('Saved Resume:', resumeData);
//     Alert.alert('Success', 'Resume Saved Successfully!');
//   };

//   // ✅ Preview Resume
//   const handlePreview = () => {
//     navigation.navigate('PreviewResume', {
//       resumeData: {
//         message,
//         experience,
//         education,
//         certifications,
//         skills,
//         languages,
//       },
//     });
//   };

//   // ✅ Export PDF (Placeholder)
//   const handleExport = () => {
//     Alert.alert('Export', 'Export to PDF coming soon!');
//   };

//   return (
//     <AuthWrapper>
//       <CustomHeader
//         leftIcon={
//           <Ionicons name="chevron-back" size={24} color={BASE_COLORS.BLACK} />
//         }
//         onLeftPress={() => navigation.goBack()}
//         heading="Create New Resume"
//         showWelcomeText={false}
//         headingTextStyle={{ fontFamily: FONTS.BOLD }} // text-only styles
//         containerStyle={{ padding: moderateScale(12) }}
//         showHeading
//       />

//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Personal Info */}
//         <Text style={styles.sectionTitle}>Personal Information</Text>
//         <CustomTextInput placeholder="Your Full Name" />
//         <CustomTextInput placeholder="Enter your Phone" />
//         <CustomTextInput placeholder="Enter your email" />
//         <CustomTextInput placeholder="Enter your Address" />

//         {/* Professional Summary */}
//         <Text style={styles.sectionTitle}>Professional Summary</Text>
//         <CustomTextInput
//           placeholder="Type here....."
//           value={message}
//           onChangeText={setMessage}
//           multiline
//           numberOfLines={6}
//           inputContainerStyle={[styles.messageInput]}
//           textInputStyle={{
//             height: verticalScale(120),
//             textAlignVertical: 'top',
//           }}
//         />

//         {/* Experience */}
//         <Text style={styles.sectionTitle}>Experience</Text>
//         {experience.map((exp, index) => (
//           <View key={index} style={styles.box}>
//             <CustomTextInput
//               placeholder="Job Title"
//               value={exp.jobTitle}
//               onChangeText={txt => {
//                 const updated = [...experience];
//                 updated[index].jobTitle = txt;
//                 setExperience(updated);
//               }}
//             />
//             <CustomTextInput
//               placeholder="Company Name"
//               value={exp.company}
//               onChangeText={txt => {
//                 const updated = [...experience];
//                 updated[index].company = txt;
//                 setExperience(updated);
//               }}
//             />
//             <View style={styles.row}>
//               <TouchableOpacity
//                 style={styles.dateInput}
//                 onPress={() => {
//                   setDateField(['experience', index, 'startDate']);
//                   setDatePickerVisibility(true);
//                 }}
//               >
//                 <CustomTextInput
//                   placeholder="Start Date"
//                   value={exp.startDate}
//                   editable={false}
//                   leftIcon={
//                     <Ionicons
//                       name="calendar-outline"
//                       size={20}
//                       color={BASE_COLORS.PRIMARY}
//                     />
//                   }
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.dateInput}
//                 onPress={() => {
//                   setDateField(['experience', index, 'endDate']);
//                   setDatePickerVisibility(true);
//                 }}
//               >
//                 <CustomTextInput
//                   placeholder="End Date"
//                   value={exp.endDate}
//                   editable={false}
//                   leftIcon={
//                     <Ionicons
//                       name="calendar-outline"
//                       size={20}
//                       color={BASE_COLORS.PRIMARY}
//                     />
//                   }
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//         <View style={styles.rightBtnWrapper}>
//           <CustomButton
//             label="Add More"
//             onPress={() =>
//               setExperience([
//                 ...experience,
//                 { jobTitle: '', company: '', startDate: '', endDate: '' },
//               ])
//             }
//             style={styles.addBtnSmall}
//           />
//         </View>

//         {/* Education */}
//         <Text style={styles.sectionTitle}>Education</Text>
//         {education.map((edu, idx) => (
//           <View key={idx} style={styles.box}>
//             <CustomTextInput
//               placeholder="Enter your Degree"
//               value={edu.degree}
//               onChangeText={txt => {
//                 const updated = [...education];
//                 updated[idx].degree = txt;
//                 setEducation(updated);
//               }}
//             />
//             <CustomTextInput
//               placeholder="Institute / University"
//               value={edu.institute}
//               onChangeText={txt => {
//                 const updated = [...education];
//                 updated[idx].institute = txt;
//                 setEducation(updated);
//               }}
//             />
//             <CustomTextInput
//               placeholder="Graduation Year"
//               value={edu.graduationYear}
//               onChangeText={txt => {
//                 const updated = [...education];
//                 updated[idx].graduationYear = txt;
//                 setEducation(updated);
//               }}
//             />
//           </View>
//         ))}
//         <View style={styles.rightBtnWrapper}>
//           <CustomButton
//             label="Add More"
//             onPress={() =>
//               setEducation([
//                 ...education,
//                 { degree: '', institute: '', graduationYear: '' },
//               ])
//             }
//             style={styles.addBtnSmall}
//           />
//         </View>

//         {/* Certifications */}
//         <Text style={styles.sectionTitle}>Certifications</Text>
//         {certifications.map((cert, idx) => (
//           <View key={idx} style={styles.box}>
//             <CustomTextInput
//               placeholder="Enter your Certification Title"
//               value={cert.name}
//               onChangeText={txt => {
//                 const updated = [...certifications];
//                 updated[idx].name = txt;
//                 setCertifications(updated);
//               }}
//             />
//             <CustomTextInput
//               placeholder="Enter the Certification Provider"
//               value={cert.issuer}
//               onChangeText={txt => {
//                 const updated = [...certifications];
//                 updated[idx].issuer = txt;
//                 setCertifications(updated);
//               }}
//             />
//             <CustomTextInput
//               placeholder="Year of Certification"
//               value={cert.year}
//               onChangeText={txt => {
//                 const updated = [...certifications];
//                 updated[idx].year = txt;
//                 setCertifications(updated);
//               }}
//             />
//           </View>
//         ))}
//         <View style={styles.rightBtnWrapper}>
//           <CustomButton
//             label="Add More"
//             onPress={() =>
//               setCertifications([
//                 ...certifications,
//                 { name: '', issuer: '', year: '' },
//               ])
//             }
//             style={styles.addBtnSmall}
//           />
//         </View>

//         {/* Skills */}
//         <Text style={styles.sectionTitle}>Skills</Text>
//         {skills.map((skill, idx) => (
//           <CustomTextInput
//             key={idx}
//             placeholder="Enter Your Skill"
//             value={skill}
//             onChangeText={txt => {
//               const updated = [...skills];
//               updated[idx] = txt;
//               setSkills(updated);
//             }}
//           />
//         ))}
//         <View style={styles.rightBtnWrapper}>
//           <CustomButton
//             label="Add More"
//             onPress={() => setSkills([...skills, ''])}
//             style={styles.addBtnSmall}
//           />
//         </View>

//         {/* Languages */}
//         <Text style={styles.sectionTitle}>Languages Spoken</Text>
//         {languages.map((lang, index) => (
//           <View key={index} style={styles.box}>
//             <CustomTextInput
//               placeholder="Enter Your Language"
//               value={lang.language}
//               onChangeText={txt => {
//                 const updated = [...languages];
//                 updated[index].language = txt;
//                 setLanguages(updated);
//               }}
//             />
//             <CustomDropdown
//               placeholder="Proficiency"
//               selectedValue={lang.proficiency}
//               onValueChange={val => {
//                 const updated = [...languages];
//                 updated[index].proficiency = val;
//                 setLanguages(updated);
//               }}
//               options={[
//                 'Beginner',
//                 'Intermediate',
//                 'Advanced',
//                 'Fluent',
//                 'Native',
//               ]}
//             />
//           </View>
//         ))}
//         <View style={styles.rightBtnWrapper}>
//           <CustomButton
//             label="Add More"
//             onPress={() =>
//               setLanguages([...languages, { language: '', proficiency: '' }])
//             }
//             style={styles.addBtnSmall}
//           />
//         </View>

//         {/* Bottom Buttons */}
//         <View style={styles.bottomButtons}>
//           <CustomButton
//             label="Preview"
//             style={styles.secondaryBtn}
//             textStyle={{ color: BASE_COLORS.PRIMARY }}
//             onPress={handlePreview}
//           />
//           <CustomButton
//             label="Export as PDF"
//             style={styles.secondaryBtn}
//             textStyle={{ color: BASE_COLORS.PRIMARY }}
//             onPress={handleExport}
//           />
//         </View>
//         <CustomButton
//           label="Save"
//           style={styles.saveBtn}
//           onPress={handleSave}
//         />
//       </ScrollView>

//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirmDate}
//         onCancel={() => setDatePickerVisibility(false)}
//       />
//     </AuthWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   // container: { padding: moderateScale(12), paddingBottom: verticalScale(40) },
//   sectionTitle: {
//     fontFamily: FONTS.BOLD,
//     fontSize: moderateScale(14),
//     color: BASE_COLORS.BLACK,
//     marginVertical: verticalScale(8),
//   },
//   box: { marginBottom: verticalScale(10) },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: verticalScale(10),
//   },
//   dateInput: { flex: 1, marginHorizontal: moderateScale(5) },
//   rightBtnWrapper: { alignItems: 'flex-end', marginVertical: verticalScale(5) },
//   addBtnSmall: {
//     backgroundColor: BASE_COLORS.PRIMARY,
//     width: '50%',
//     height: 40,
//   },
//   bottomButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: verticalScale(15),
//   },
//   secondaryBtn: {
//     flex: 1,
//     marginHorizontal: 5,
//     backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
//     height: 50,
//   },
//   messageInput: { minHeight: verticalScale(124), alignItems: 'flex-start' },
//   saveBtn: { height: 50 },
// });

// export default CreateResume;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CreateResume = () => {
  return (
    <View>
      <Text>CreateResume</Text>
    </View>
  );
};

export default CreateResume;

const styles = StyleSheet.create({});
