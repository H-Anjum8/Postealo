import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthWrapper from '../../../componets/AuthWrapper';
import DashboardHeader from '../../../componets/DashboardHeader';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const PdfPreview = () => {
  const navigation = useNavigation();
  return (
    <AuthWrapper>
      {/* Header */}
      <DashboardHeader
        title="Resume Builder"
        headerStyle={{ marginTop: -4, marginBottom: 20 }}
        onNotificationPress={() => console.log('Notifications clicked')}
      />

      <View style={styles.container1}>
        <View style={styles.card}>
          <View style={styles.cardLeft}>
            <Ionicons name="document-text-outline" size={28} color="#E30613" />
            <Text style={styles.cardText}>Megan</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate('edit_resume')}
            >
              <Ionicons name="create-outline" size={22} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="trash-outline"
                size={18}
                color={BASE_COLORS.BLACK}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Create Resume Button */}
        <CustomButton
          label="Create New Resume"
          onPress={() => navigation.navigate('create_resume')}
          style={{ marginHorizontal: 2, marginBottom: 70, height: 53 }}
          textStyle={{ fontSize: 14 }}
        />
      </View>
      {/* Resume Card */}
    </AuthWrapper>
  );
};

export default PdfPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  container1: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#000' },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  cardLeft: { flexDirection: 'row', alignItems: 'center' },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: BASE_COLORS.BLACK,
  },
  iconButton: {
    width: moderateScale(32),
    height: moderateScale(32),
    borderRadius: moderateScale(8),
    backgroundColor: BASE_COLORS.WHITE,
    borderWidth: 1,
    borderColor: BASE_COLORS.BORDER_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  cardActions: { flexDirection: 'row' },
  iconBtn: { marginLeft: 12 },

  createBtn: {
    backgroundColor: BASE_COLORS.PRIMARY,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 70,
  },
  createBtnText: { color: BASE_COLORS.WHITE, fontSize: 16, fontWeight: '600' },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: BASE_COLORS.WHITE,
  },
  navItem: { alignItems: 'center' },
  navItemActive: { alignItems: 'center' },
  navText: { fontSize: 12, color: '#555', marginTop: 2 },
});
