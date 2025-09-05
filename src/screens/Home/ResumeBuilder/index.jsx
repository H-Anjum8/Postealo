import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AuthWrapper from '../../../componets/AuthWrapper';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { FONTS } from '../../../theme/fonts';

const ResumeBuilder = () => {
  const navigation = useNavigation();

  return (
    <AuthWrapper>
      {/* ✅ Header with Notification */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Resume Builder</Text>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => navigation.navigate('all_notifications_screen')}
        >
          <Ionicons
            name="notifications-outline"
            size={moderateScale(20)}
            color={BASE_COLORS.PRIMARY}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* No Resume Message */}
        <Text style={styles.title}>No Resume Created Yet</Text>
        <Text style={styles.description}>
          You haven't created a resume yet. Build your professional resume to
          apply for jobs quickly.
        </Text>

        {/* Create Resume Button */}
        <CustomButton
          label="Create New Resume"
          onPress={() => navigation.navigate('select_resume_language')}
          style={{ marginHorizontal: 2, marginTop: 20, height: 53 }}
          textStyle={{ fontSize: 14 }}
        />
      </View>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: moderateScale(18),
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(10),
    textAlign: 'center',
  },
  description: {
    fontFamily: FONTS.MEDIUM,
    fontSize: moderateScale(13),
    color: BASE_COLORS.GRAY,
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(5),
    paddingHorizontal: moderateScale(10),
  },
  headerTitle: {
    fontSize: moderateScale(22),
    fontFamily: FONTS.BOLD,
    color: BASE_COLORS.BLACK,
  },
  notificationButton: {
    backgroundColor: BASE_COLORS.WHITE,
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    // iOS shadow
    shadowColor: BASE_COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
});

export default ResumeBuilder;
