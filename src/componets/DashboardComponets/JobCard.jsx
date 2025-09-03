import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const JobCard = ({ job }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.jobCard}>
      <Image source={job.logo} style={styles.jobLogo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <Text style={styles.company}>{job.company}</Text>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>{job.salary}</Text>
          <Text style={styles.badge}>{job.type}</Text>
          <Text style={styles.badge}>{job.mode}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => navigation.navigate('job_details', { jobId: job.id })}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  jobLogo: { width: 40, height: 40, marginRight: 10 },
  jobTitle: { fontWeight: '700', fontSize: 14 },
  company: { fontSize: 12, color: 'gray' },
  badgeRow: { flexDirection: 'row', marginTop: 5 },
  badge: {
    fontSize: 11,
    color: 'gray',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginRight: 5,
  },
  applyBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
});
