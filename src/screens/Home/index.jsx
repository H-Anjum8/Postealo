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
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          placeholder="Search for a job or company"
          style={styles.searchInput}
        />
        <Ionicons name="options-outline" size={20} color="gray" />
      </View>

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

        {/* Job Cards */}
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>
            No jobs available in this category
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

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
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  sectionTitle: { fontSize: 16, fontWeight: '600' },
  seeAll: { color: 'red', fontSize: 14 },

  categoryCard: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 12,
    margin: 8,
    alignItems: 'center',
    width: 120,
  },
  categoryLogo: { width: 40, height: 40, marginBottom: 5 },
  categoryName: { fontWeight: '600', fontSize: 14 },
  categoryRole: { fontSize: 12, color: 'gray', textAlign: 'center' },

  filterBtn: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  filterBtnActive: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  filterText: {
    fontSize: 13,
    color: 'gray',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});
