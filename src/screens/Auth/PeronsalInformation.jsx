import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';
import { getValidationSchema } from '../../utils/validationSchema';
import { FONTS } from '../../theme/fonts';
import CustomTextInput from '../../componets/CustomTextInput';
import CustomButton from '../../componets/CustomButton';
import CustomHeader from '../../componets/CustomHeaders';
import AuthWrapper from '../../componets/AuthWrapper';
import { Picker } from '@react-native-picker/picker'; // 👈 dropdown

const Signup = () => {
  const navigation = useNavigation();

  return (
    <AuthWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <CustomHeader
          leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
          onLeftPress={() => navigation.goBack()}
          showWelcomeText={false}
          showDescription={true}
          showHeading={true}
          heading="Personal Information"
          description="Let's get started with your job-seeking journey."
          usernameTextStyle={{ fontSize: 22 }}
          descriptionTextStyle={{
            textAlign: 'left',
            fontSize: 11,
            marginTop: 6,
          }}
          onNotificationPress={() =>
            navigation.navigate('all_notifications_screen')
          }
          contentContainerStyle={{ alignItems: 'flex-start' }}
        />
        <View style={styles.mainContainer}>
          <Formik
            initialValues={{
              fullName: '',
              phone: '',
              education: '',
              experience: '',
              skills: '',
              preferredLocation: '',
            }}
            validationSchema={getValidationSchema('personalInfo')}
            onSubmit={values => {
              console.log('Personal Info:', values);
              navigation.navigate('signup_otp_verify');
            }}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <>
                <ScrollView
                  contentContainerStyle={{ paddingBottom: 120 }}
                  showsVerticalScrollIndicator={false}
                >
                  <CustomTextInput
                    placeholder="Your Full Name"
                    iconName="person-outline"
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                  />
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.errorText}>{errors.fullName}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Enter Your Phone"
                    iconName="call-outline"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    keyboardType="phone-pad"
                  />
                  {touched.phone && errors.phone && (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                  )}

                  {/* 👇 Dropdown for Education */}
                  <View style={styles.dropdownContainer}>
                    <Ionicons
                      name="school-outline"
                      size={20}
                      color={BASE_COLORS.TEXT_INPUT_FIELD}
                      style={{ marginRight: 8 }}
                    />
                    <Picker
                      selectedValue={values.education}
                      onValueChange={value => setFieldValue('education', value)}
                      style={styles.picker}
                    >
                      <Picker.Item label="Select Education" value="" />
                      <Picker.Item label="High School" value="highschool" />
                      <Picker.Item label="Bachelor's" value="bachelor" />
                      <Picker.Item label="Master's" value="master" />
                      <Picker.Item label="PhD" value="phd" />
                    </Picker>
                  </View>
                  {touched.education && errors.education && (
                    <Text style={styles.errorText}>{errors.education}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Experience"
                    iconName="briefcase-outline"
                    value={values.experience}
                    onChangeText={handleChange('experience')}
                  />
                  {touched.experience && errors.experience && (
                    <Text style={styles.errorText}>{errors.experience}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Skills"
                    iconName="bulb-outline"
                    value={values.skills}
                    onChangeText={handleChange('skills')}
                  />
                  {touched.skills && errors.skills && (
                    <Text style={styles.errorText}>{errors.skills}</Text>
                  )}

                  <CustomTextInput
                    placeholder="Preferred Location"
                    iconName="location-outline"
                    value={values.preferredLocation}
                    onChangeText={handleChange('preferredLocation')}
                  />
                  {touched.preferredLocation && errors.preferredLocation && (
                    <Text style={styles.errorText}>
                      {errors.preferredLocation}
                    </Text>
                  )}
                </ScrollView>

                {/* 👇 Fixed Bottom Button */}
                <View style={styles.bottomButton}>
                  <CustomButton
                    label="Continue"
                    onPress={handleSubmit}
                    style={{
                      marginHorizontal: 0,
                      marginBottom: 6,
                      marginTop: 47,
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 24,
    flex: 1,
  },
  errorText: {
    color: BASE_COLORS.PRIMARY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    marginBottom: 5,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BASE_COLORS.BORDER_COLOR,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
  },
  picker: {
    flex: 1,
    fontSize: 14,
    color: BASE_COLORS.TEXT_INPUT_FIELD,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
  },
});

export default Signup;
