import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { IMAGES } from '../../utils/appAssets';
import { useState } from 'react';
import ApplyModal from '../../componets/modalComponents/ApplyModal';
const jobList = [
  {
    id: 1,
    title: 'Business Analyst',
    company: 'Apple Inc.',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.APPLE,
    category: 'Finance',
    description:
      'Apple is seeking a talented Business Analyst to join our team and help drive strategic decision-making across multiple domains...',
    qualifications: [
      'Bachelor’s Degree in Business Administration, Finance, Economics, or related field',
      '2+ years experience as a Business Analyst or in a similar role',
      'Proficient in SQL, Excel, and data visualization tools',
    ],
    perks: [
      'Health insurance, dental coverage, and vision insurance',
      'Paid time off (PTO) and flexible work schedules',
      'Work-life balance: Hybrid work model available',
    ],
  },
  {
    id: 2,
    title: 'Quality Assurance',
    company: 'Spotify',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.SPOTIFY,
    category: 'Technology',
    description:
      'We are looking for a skilled QA engineer to test and improve our app performance across all platforms.',
    qualifications: [
      'Bachelor’s Degree in Computer Science or related field',
      'Strong knowledge of testing frameworks and automation tools',
    ],
    perks: [
      'Free Spotify Premium subscription',
      'Remote-friendly working model',
    ],
  },
  {
    id: 3,
    title: 'Community Officer',
    company: 'Reddit Company',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.REDDIT,
    category: 'Design',
    description:
      'Reddit is looking for a Community Officer to manage and grow our online communities responsibly.',
    qualifications: [
      'Experience with community building and engagement',
      'Strong communication and organizational skills',
    ],
    perks: ['Work from anywhere', 'Generous PTO', 'Flexible hours'],
  },
];

const JobDetails = ({ route, navigation }) => {
  const { jobId } = route.params;
  const job = jobList.find(j => j.id === jobId);
  const [applyModal, setApplyModal] = useState(false);
  if (!job) return <Text>Job not found</Text>;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Text>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.logoBox}>
        <Image source={job.logo} style={styles.logo} />
      </View>

      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>

      <View style={styles.tagRow}>
        <Text style={styles.tag}>{job.salary}</Text>
        <Text style={styles.tag}>{job.type}</Text>
        <Text style={styles.tag}>{job.mode}</Text>
      </View>

      <Text style={styles.sectionTitle}>Job Description:</Text>
      <Text style={styles.text}>{job.description}</Text>

      <Text style={styles.sectionTitle}>Qualifications:</Text>
      {job.qualifications.map((q, i) => (
        <Text key={i} style={styles.text}>
          - {q}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Perks & Benefits:</Text>
      {job.perks.map((p, i) => (
        <Text key={i} style={styles.text}>
          - {p}
        </Text>
      ))}

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => setApplyModal(true)}
      >
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>

      <ApplyModal
        visible={applyModal}
        onClose={() => setApplyModal(false)}
        buttonLabel="Book Now"
        onButtonPress={() => console.log('Booking...')}
      />
    </ScrollView>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginVertical: 50,
  },
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: '#000',
  },
  logoBox: {
    alignItems: 'center',
    marginVertical: 16,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  company: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 5,
    fontSize: 12,
    color: '#444',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  applyBtn: {
    backgroundColor: 'red',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 30,
  },
  applyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
