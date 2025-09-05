import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import AuthWrapper from '../../../componets/AuthWrapper';
import CustomHeader from '../../../componets/CustomHeaders';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { FONTS } from '../../../theme/fonts';

const ApplicationDetail = () => {
  const route = useRoute();
  const { job } = route.params;

  return (
    <AuthWrapper>
      <CustomHeader title={job.title} />
      <View style={styles.container}>
        <Image source={{ uri: job.logo }} style={styles.logo} />
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.location}>California, United States</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>$50k/y</Text>
          <Text style={styles.tag}>Remote</Text>
          <Text style={styles.tag}>FullTime</Text>
        </View>

        <View
          style={[
            styles.statusBox,
            { backgroundColor: job.statusColor + '20' },
          ]}
        >
          <Text style={[styles.status, { color: job.statusColor }]}>
            {job.status}
          </Text>
        </View>

        <CustomButton
          title="Send Message"
          style={styles.messageButton}
          textStyle={{ color: BASE_COLORS.WHITE }}
        />
      </View>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: moderateScale(20),
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(10),
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: FONTS.BOLD,
    color: BASE_COLORS.BLACK,
    marginTop: verticalScale(5),
  },
  company: {
    fontSize: moderateScale(14),
    fontFamily: FONTS.MEDIUM,
    color: BASE_COLORS.ERROR,
    marginBottom: verticalScale(5),
  },
  location: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.REGULAR,
    color: BASE_COLORS.GREY,
    marginBottom: verticalScale(10),
  },
  tagRow: {
    flexDirection: 'row',
    marginBottom: verticalScale(15),
  },
  tag: {
    backgroundColor: BASE_COLORS.LIGHT_GREY,
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(8),
    fontFamily: FONTS.MEDIUM,
    fontSize: moderateScale(12),
    marginHorizontal: moderateScale(5),
  },
  statusBox: {
    paddingVertical: verticalScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(20),
  },
  status: {
    fontFamily: FONTS.MEDIUM,
    fontSize: moderateScale(13),
  },
  messageButton: {
    backgroundColor: BASE_COLORS.ERROR,
    width: '100%',
  },
});

export default ApplicationDetail;
