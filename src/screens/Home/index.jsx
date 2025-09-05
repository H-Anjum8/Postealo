import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from 'react-native-size-matters';
import { IMAGES } from '../../utils/appAssets';
import JobCard from '../../componets/DashboardComponets/JobCard';
import DashboardHeader from '../../componets/DashboardHeader';
import BASE_COLORS from '../../utils/colors';
import AuthWrapper from '../../componets/AuthWrapper';
const filterCategories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Technology' },
  { id: 4, name: 'Finance' },
];

// Dummy Data
const jobCompanies = [
  { id: 1, name: 'Google', role: 'UI/UX Designer', logo: IMAGES.GOOGLE },
  { id: 2, name: 'Paypal', role: 'Sales & Marketing', logo: IMAGES.PAYPAL },
  {
    id: 3,
    name: 'Pinterest',
    role: 'Writing & Content',
    logo: IMAGES.PINTEREST,
  },
];

const jobs = [
  {
    id: 1,
    title: 'Business Analyst',
    company: 'Apple Inc.',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    logo: IMAGES.APPLE,
    category: 'Finance',
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
  },
];
// Category Card Component
const CategoryCard = ({ item }) => (
  <View style={styles.categoryCard}>
    <Image source={item.logo} style={styles.categoryLogo} />
    <Text style={styles.categoryName}>{item.name}</Text>
    <Text style={styles.categoryRole}>{item.role}</Text>
  </View>
);

// Filter Button Component
const CategoryFilter = ({ item, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.filterBtn, isActive && styles.filterBtnActive]}
    onPress={onPress}
  >
    <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
      {item.name}
    </Text>
  </TouchableOpacity>
);

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter jobs based on category
  const filteredJobs =
    selectedCategory === 'All'
      ? jobs
      : jobs.filter(job => job.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Search Bar */}

      <DashboardHeader
        showSearch
        placeholder="Search for a job or company"
        onSearchChange={text => console.log(text)}
        onFilterPress={() => console.log('Filter clicked')}
        onNotificationPress={() => console.log('Notifications clicked')}
      />
      <AuthWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Jobs for You */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Jobs for you</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* jobCompanies */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {jobCompanies.map(item => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </ScrollView>
          {/* Filter Categories */}
          <View style={{ marginTop: 16, marginHorizontal: -10 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              {filterCategories.map(item => (
                <CategoryFilter
                  key={item.id}
                  item={item}
                  isActive={item.name === selectedCategory}
                  onPress={() => setSelectedCategory(item.name)}
                />
              ))}
            </ScrollView>
          </View>

          {/* Job Cards */}
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>
              No jobs available in this category
            </Text>
          )}
        </ScrollView>
      </AuthWrapper>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: moderateScale(15),
    padding: moderateScale(10),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  searchInput: { flex: 1, marginLeft: 8 },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 0,
    marginBottom: 5,
  },
  sectionTitle: { fontSize: 16, fontWeight: '600' },
  seeAll: { color: BASE_COLORS.GRAY, fontSize: 10 },

  categoryCard: {
    backgroundColor: BASE_COLORS.WHITE,
    padding: 15,
    borderRadius: 26,
    marginTop: 12,
    marginRight: 10,
    alignItems: 'center',
    width: 120,
  },
  categoryLogo: { width: 40, height: 40, marginBottom: 5 },
  categoryName: { fontWeight: '600', fontSize: 14, marginVertical: 6 },
  categoryRole: { fontSize: 8, color: 'gray', textAlign: 'center' },

  filterBtn: {
    borderWidth: 0,
    borderColor: '#ddd',
    paddingHorizontal: 17,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 14,

    backgroundColor: BASE_COLORS.BORDER_COLOR,
  },
  filterBtnActive: {
    backgroundColor: BASE_COLORS.WHITE,
    borderColor: 'red',
  },
  filterText: {
    fontSize: 11,
    color: 'gray',
  },
  filterTextActive: {
    color: BASE_COLORS.PRIMARY,
    fontWeight: '600',
  },
});
