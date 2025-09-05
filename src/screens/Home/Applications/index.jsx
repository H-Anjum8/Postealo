import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import AuthWrapper from '../../../componets/AuthWrapper';
import BASE_COLORS from '../../../utils/colors';
import { FONTS } from '../../../theme/fonts';
import { IMAGES } from '../../../utils/appAssets';
import DashboardHeader from '../../../componets/DashboardHeader';

// Dummy Applications Data
const applications = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'Google LLC',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Pending',
    category: 'Design',
    statusColor: BASE_COLORS.STATUS,
    logo: IMAGES.GOOGLE, // ✅ imported from project
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Paypal',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Accepted',
    category: 'Design',
    statusColor: BASE_COLORS.GREEN,
    logo: IMAGES.PAYPAL,
  },
  {
    id: '3',
    title: 'Application Developer',
    company: 'Figma',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Rejected',
    category: 'Design',
    statusColor: BASE_COLORS.PRIMARY,
    logo: IMAGES.FIGMA,
  },
  {
    id: '4',
    title: 'Graphic Designer',
    company: 'Pinterest',
    status: 'Application Pending',
    statusColor: BASE_COLORS.STATUS,
    logo: IMAGES.PINTEREST,
  },
];

const MyApplicationsScreen = () => {
  const navigation = useNavigation();

  // ✅ Search state
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(applications);

  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredData(applications);
    } else {
      const filtered = applications.filter(
        item =>
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.company.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [searchText]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('application_detail', { job: item })}
    >
      <View style={styles.row}>
        <Image source={item.logo} style={styles.logo} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.company}</Text>
        </View>
        <Ionicons
          name="chevron-forward"
          size={20}
          color={BASE_COLORS.PRIMARY}
        />
      </View>
      <View
        style={[
          styles.statusContainer,
          { backgroundColor: item.statusColor + '20' },
        ]}
      >
        <Text style={[styles.status, { color: item.statusColor }]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <AuthWrapper>
      <View style={styles.container}>
        {/* ✅ Header with Notification */}
        <DashboardHeader
          title="Resume Builder"
          headerStyle={{ marginTop: -4, marginBottom: 20 }}
          onNotificationPress={() => console.log('Notifications clicked')}
        />

        {/* ✅ Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={moderateScale(18)}
            color={BASE_COLORS.LIGHT_GRAY}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={BASE_COLORS.GREY}
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* ✅ Applications List */}
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(12),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  headerTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.BOLD,
    color: BASE_COLORS.BLACK,
  },
  notificationButton: {
    padding: 5,
  },
  messageText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS.REGULAR,
    color: BASE_COLORS.TEXT_INPUT_FIELD,
    marginTop: verticalScale(2),
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    marginBottom: verticalScale(16),
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTS.REGULAR,
    fontSize: moderateScale(13),
    paddingVertical: verticalScale(6),
    marginLeft: moderateScale(6),
    color: BASE_COLORS.BLACK,
  },
  list: {
    paddingBottom: verticalScale(20),
  },
  card: {
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    paddingVertical: moderateScale(22),
    marginBottom: verticalScale(10),
    shadowColor: BASE_COLORS.BLACK,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(40),
    height: moderateScale(40),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: moderateScale(14),
    color: BASE_COLORS.BLACK,
  },
  subtitle: {
    fontFamily: FONTS.REGULAR,
    fontSize: moderateScale(12),
    color: BASE_COLORS.GREY,
  },
  statusContainer: {
    marginTop: verticalScale(8),
    paddingVertical: verticalScale(4),
    paddingHorizontal: moderateScale(8),
    marginHorizontal: moderateScale(40),
    borderRadius: moderateScale(8),
    alignSelf: 'flex-start',
  },
  status: {
    fontFamily: FONTS.medium,
    fontSize: moderateScale(12),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(14),
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

    // ✅ iOS shadow
    shadowColor: BASE_COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // ✅ Android shadow (elevation)
    elevation: 5,
  },
});

export default MyApplicationsScreen;
