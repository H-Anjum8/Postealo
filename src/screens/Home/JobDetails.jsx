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
import CustomHeader from '../../componets/CustomHeaders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomButton from '../../componets/CustomButton';
const jobList = [
  {
    id: 1,
    title: 'Business Analyst',
    company: 'Apple Inc.',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.APPLE,
    category: 'Finance',
    details:
      ' Apple Inc. is a globally renowned technology company known for its innovative products, including the iPhone, Mac computers, iPad, Apple Watch, and software platforms like iOS, macOS, and watchOS. ',
    description:
      'Apple is looking for a talented Business Analyst to join our team and help drive strategic decisions with data insights. The Business Analyst will work closely with cross-functional teams to analyze business operations, identify areas for improvement, and provide actionable recommendations. You will play a key role in shaping the future of Apple’s products and services by providing insights into key business metrics and helping to streamline processes.',
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
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.SPOTIFY,
    category: 'Technology',
    details:
      ' Spotify Inc. is a globally renowned technology company known for its innovative products, including the iPhone, Mac computers, iPad, Apple Watch, and software platforms like iOS, macOS, and watchOS. ',
    description:
      'Apple is looking for a talented Business Analyst to join our team and help drive strategic decisions with data insights. The Business Analyst will work closely with cross-functional teams to analyze business operations, identify areas for improvement, and provide actionable recommendations. You will play a key role in shaping the future of Apple’s products and services by providing insights into key business metrics and helping to streamline processes.',
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
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.REDDIT,
    category: 'Design',
    details:
      ' Reddit Inc. is a globally renowned technology company known for its innovative products, including the iPhone, Mac computers, iPad, Apple Watch, and software platforms like iOS, macOS, and watchOS. ',
    description:
      'Apple is looking for a talented Business Analyst to join our team and help drive strategic decisions with data insights. The Business Analyst will work closely with cross-functional teams to analyze business operations, identify areas for improvement, and provide actionable recommendations. You will play a key role in shaping the future of Apple’s products and services by providing insights into key business metrics and helping to streamline processes.',
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
    <AuthWrapper>
      {/* Header */}
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
        <Text style={styles.line}></Text>
        <Text style={styles.location}>{job.location}</Text>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>{job.salary}</Text>
          <Text style={styles.tag}>{job.type}</Text>
          <Text style={styles.tag}>{job.mode}</Text>
        </View>
        <Text style={styles.details}>{job.details}</Text>
      </View>
      <Text style={styles.sectionTitle}>Job Description:</Text>
      <Text style={styles.text}>{job.description}</Text>

      <Text style={styles.sectionTitle}>Qualifications:</Text>
      {job.qualifications.map((q, i) => (
        <Text key={i} style={styles.text}>
          {i + 1}. {q}
        </Text>
      ))}

      <View style={{ marginBottom: 30 }}>
        <Text style={styles.benefitTitle}>Perks & Benefits:</Text>
        {job.perks.map((p, i) => (
          <Text key={i} style={styles.text}>
            {i + 1}. {p}
          </Text>
        ))}
      </View>

      {/* <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => setApplyModal(true)}
      >
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity> */}
      <CustomButton
        label="Apply"
        onPress={() => setApplyModal(true)}
        style={styles.saveButton}
        textStyle={{ fontSize: 12 }}
      />

      <ApplyModal
        visible={applyModal}
        onClose={() => setApplyModal(false)}
        buttonLabel="Book Now"
        onButtonPress={() => console.log('Booking...')}
      />
    </AuthWrapper>
  );
};

export default JobDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 4,
    paddingBottom: 17,
    borderRadius: 20,
  },
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: '#000',
  },
  logoBox: {
    width: 75,
    height: 75,
    marginTop: 30,
    alignSelf: 'center',
    padding: 43,
    backgroundColor: '#fff',
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
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  company: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: BASE_COLORS.BORDER_COLOR,
    textAlign: 'center',
    marginTop: 7,
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
