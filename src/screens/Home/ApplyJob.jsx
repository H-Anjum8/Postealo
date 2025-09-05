import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { pick, types } from '@react-native-documents/picker';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomHeader from '../../componets/CustomHeaders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';
import CustomTextInput from '../../componets/CustomTextInput'; // 👈 import your custom input
import CustomButton from '../../componets/CustomButton';
import { getValidationSchema } from '../../utils/validationSchema';
import { useNavigation } from '@react-navigation/native';

const ApplyJob = () => {
  const [resume, setResume] = useState(null);
  const navigation = useNavigation();
  // Pick Resume
  const pickResume = async setFieldValue => {
    try {
      const [file] = await pick({
        type: [types.pdf, types.doc, types.docx],
      });
      setResume(file);
      setFieldValue('resume', file);
    } catch (err) {
      console.log('Document pick error:', err);
    }
  };

  // Submit
  const handleform = values => {
    if (values.resume) {
      navigation.navigate('select_resume', { resume: values.resume });
    }
  };

  return (
    <AuthWrapper>
      <CustomHeader
        leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
        onLeftPress={() => navigation.goBack()}
        description="Submit your resume to be considered for this position."
        heading="Apply Job"
        headingTextStyle={{
          fontSize: 24,
          marginTop: 2,
        }}
        descriptionTextStyle={{
          color: BASE_COLORS.SECONDARY_LIGHT,

          marginTop: 6,
        }}
        showWelcomeText={false}
        showDescription={true}
        showHeading={true}
      />

      <View style={styles.container}>
        <Formik
          initialValues={{ fullName: '', email: '', resume: null }}
          validationSchema={getValidationSchema('uplodoadResume')}
          onSubmit={handleform}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <>
              {/* Full Name */}
              <CustomTextInput
                placeholder="Your Full Name"
                iconName="person-outline"
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}

              {/* Email */}
              <CustomTextInput
                placeholder="Enter Your Email"
                iconName="mail-outline"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* Upload Resume */}
              <TouchableOpacity
                style={styles.uploadBox}
                onPress={() => pickResume(setFieldValue)}
              >
                <Ionicons name="cloud-upload-outline" size={30} color="#999" />
                <Text style={styles.uploadText}>
                  {resume ? resume.name : 'Upload CV/Resume'}
                </Text>
              </TouchableOpacity>
              {!values.resume && (
                <Text style={styles.errorText}>Resume is required</Text>
              )}

              {/* Submit Button */}
              <CustomButton
                label="Submit"
                onPress={handleSubmit}
                style={{
                  marginHorizontal: 3,
                  marginBottom: 6,
                  marginTop: 26,
                }}
              />
              {/* <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity> */}
            </>
          )}
        </Formik>
      </View>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 35,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  submitBtn: {
    backgroundColor: '#E50914',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 10,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
    marginLeft: 4,
  },
});

export default ApplyJob;
