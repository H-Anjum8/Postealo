import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthWrapper from '../../../componets/AuthWrapper';
import CustomHeader from '../../../componets/CustomHeaders';
import { FONTS } from '../../../theme/fonts';
import BASE_COLORS from '../../../utils/colors';
import CustomButton from '../../../componets/CustomButton';

const ApplicationDetail = () => {
  const route = useRoute();
  const { job } = route.params;
  const navigation = useNavigation();
  return (
    <AuthWrapper>
      <CustomHeader
        leftIcon={
          <Ionicons name="chevron-back" size={20} color={BASE_COLORS.BLACK} />
        }
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={job.logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <View style={styles.line} />
        <Text style={styles.location}>{job.location}</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>{job.salary}</Text>
          <Text style={styles.tag}>{job.type}</Text>
          <Text style={styles.tag}>{job.mode}</Text>
        </View>
      </View>
      <Text style={styles.line}></Text>
      <View
        style={[styles.statusBox, { backgroundColor: job.statusColor + '20' }]}
      >
        <Text style={[styles.status, { color: job.statusColor }]}>
          {job.status}
        </Text>
      </View>

      <CustomButton
        label="Send Message"
        onPress={() => navigation.navigate('dashboard')}
        style={{ marginHorizontal: 3 }}
        textStyle={{ fontSize: 12 }}
      />
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BASE_COLORS.WHITE,
    paddingHorizontal: 16,
    marginTop: 4,
    paddingBottom: 30,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
  },
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: BASE_COLORS.BLACK,
  },
  logoBox: {
    width: 75,
    height: 75,
    marginTop: 30,
    alignSelf: 'center',
    padding: 46,
    backgroundColor: BASE_COLORS.WHITE,
    // elevation: 2,
    borderColor: BASE_COLORS.BORDER_COLOR,
    borderWidth: 1,
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  company: {
    fontSize: 12,
    color: BASE_COLORS.PRIMARY,
    textAlign: 'center',
    marginBottom: 10,
  },
  line: {
    borderTopWidth: 2,
    borderTopColor: BASE_COLORS.BORDER_COLOR,
    textAlign: 'center',
    marginTop: 24,
  },
  location: {
    marginTop: -14,
    fontSize: 12,
    color: BASE_COLORS.GRAY,
    textAlign: 'center',
    marginBottom: 10,
  },

  tagRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    // marginLeft: -18,
  },
  tag: {
    fontSize: 8,
    color: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
  details: {
    fontSize: 9,
    paddingVertical: 6,
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: 16,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 9,
    color: '#333',
    marginTop: 4,
    marginBottom: 6,
    lineHeight: 14,
  },

  statusBox: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(20),
    alignItems: 'center',
    textAlign: 'center',
  },
  status: {
    fontFamily: FONTS.MEDIUM,
    fontSize: moderateScale(13),
  },
  // messageButton: {
  //   backgroundColor: BASE_COLORS.ERROR,
  //   width: '100%',
  // },
});

export default ApplicationDetail;
