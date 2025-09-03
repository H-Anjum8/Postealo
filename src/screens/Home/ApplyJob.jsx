// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// // Validation schema
// const JobApplySchema = Yup.object().shape({
//   fullName: Yup.string().required('Full name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   resume: Yup.mixed().required('Resume is required'),
// });

// const ApplyJob= () => {
//   const [fileName, setFileName] = useState(null);

//   const pickDocument = async (setFieldValue) => {
//     try {
//       const res = await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
//       });
//       setFileName(res.name);
//       setFieldValue('resume', res);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User cancelled picker');
//       } else {
//         throw err;
//       }
//     }
//   };

//   const handleSubmitForm = (values) => {
//     Alert.alert('Form Submitted', JSON.stringify(values, null, 2));
//     console.log(values);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Apply Job</Text>
//       <Text style={styles.subText}>
//         Submit your resume to be considered for this position.
//       </Text>

//       <Formik
//         initialValues={{ fullName: '', email: '', resume: null }}
//         validationSchema={JobApplySchema}
//         onSubmit={handleSubmitForm}
//       >
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           errors,
//           touched,
//           setFieldValue,
//         }) => (
//           <View>
//             {/* Full Name */}
//             <TextInput
//               style={styles.input}
//               placeholder="Your Full Name"
//               onChangeText={handleChange('fullName')}
//               onBlur={handleBlur('fullName')}
//               value={values.fullName}
//             />
//             {errors.fullName && touched.fullName && (
//               <Text style={styles.error}>{errors.fullName}</Text>
//             )}

//             {/* Email */}
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your Email"
//               keyboardType="email-address"
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//             />
//             {errors.email && touched.email && (
//               <Text style={styles.error}>{errors.email}</Text>
//             )}

//             {/* Resume Upload */}
//             <TouchableOpacity
//               style={styles.uploadBox}
//               onPress={() => pickDocument(setFieldValue)}
//             >
//               <Text style={{ color: '#555' }}>
//                 {fileName ? fileName : 'Upload CV/Resume'}
//               </Text>
//             </TouchableOpacity>
//             {errors.resume && touched.resume && (
//               <Text style={styles.error}>{errors.resume}</Text>
//             )}

//             {/* Submit Button */}
//             <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
//               <Text style={styles.submitText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#000',
//   },
//   subText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 10,
//   },
//   uploadBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderStyle: 'dashed',
//     borderRadius: 8,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   submitBtn: {
//     backgroundColor: '#d60000',
//     borderRadius: 8,
//     padding: 15,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 5,
//   },
// });

// export default ApplyJob;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ApplyJob = () => {
  return (
    <View>
      <Text>ApplyJobScreen</Text>
    </View>
  );
};

export default ApplyJob;

const styles = StyleSheet.create({});
