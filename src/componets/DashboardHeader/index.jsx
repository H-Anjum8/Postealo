import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomTextInput from '../CustomTextInput'; // import your reusable input
import COLORS, { BASE_COLORS } from '../../utils/colors';

const DashboardHeader = ({
  showSearch = false, // if true -> search bar
  placeholder = 'Search...',
  onSearchChange,
  onFilterPress,
  onNotificationPress,
  title, // if provided, show title
  headerStyle,
}) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      {showSearch ? (
        // CASE 1: Search Header
        <View style={styles.searchWrapper}>
          <CustomTextInput
            placeholder={placeholder}
            iconName="search-outline"
            value={null}
            onChangeText={onSearchChange}
            inputContainerStyle={styles.searchContainer}
            textInputStyle={styles.searchInput}
          />
          <TouchableOpacity style={styles.filterBtn} onPress={onFilterPress}>
            <Ionicons name="options-outline" size={22} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
      ) : (
        // CASE 2: Title Header
        <Text style={styles.title}>{title}</Text>
      )}

      {/* Notification Icon (Common) */}
      <View>
        <TouchableOpacity
          style={styles.notifyBtn}
          onPress={onNotificationPress}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color={COLORS.PRIMARY}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,

    paddingTop: 18,
  },
  searchWrapper: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  searchContainer: {
    marginTop: 5,
    flex: 1,
    borderRadius: 10,
    height: 36,
    backgroundColor: BASE_COLORS.WHITE,
  },
  searchInput: {
    height: 36,
    fontSize: 12,
    backgroundColor: BASE_COLORS.TRANSPARENT,
  },
  filterBtn: {
    marginLeft: 10,
    position: 'absolute',
    right: 12,
    top: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: BASE_COLORS.BLACK,
  },
  notifyBtn: {
    marginLeft: 12,
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: 50,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
});
