import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import BASE_COLORS from '../../utils/colors';

const JobCard = ({ job }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.jobCard}>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image source={job.logo} style={styles.jobLogo} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>{job.salary}</Text>
          <Text style={styles.badge}>{job.type}</Text>
          <Text style={styles.badge}>{job.mode}</Text>
        </View>
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => navigation.navigate('job_details', { jobId: job.id })}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  jobCard: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    marginTop: 14,
    padding: 15,
    borderRadius: 20,
    backgroundColor: BASE_COLORS.WHITE,
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
  },
  imgContainer: {
    width: 40,
    height: 40,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    // elevation: 2,
    borderColor: BASE_COLORS.BORDER_COLOR,
    borderWidth: 1,
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobLogo: {
    width: 30,
    height: 30,
  },
  jobTitle: { fontWeight: '700', fontSize: 14 },
  company: { fontSize: 12, color: BASE_COLORS.GRAY },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginLeft: -18,
  },
  badge: {
    fontSize: 8,
    color: 'gray',
    padding: 6,
    borderWidth: 1,
    borderColor: BASE_COLORS.BORDER_COLOR,
    borderRadius: 6,
    marginRight: 10,
  },
  applyBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
