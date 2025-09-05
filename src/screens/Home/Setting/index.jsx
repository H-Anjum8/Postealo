import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { menuItems } from '../../../utils/staticData';
import CustomButton from '../../../componets/CustomButton';
import BASE_COLORS from '../../../utils/colors';
import { FONTS } from '../../../theme/fonts';
import AuthWrapper from '../../../componets/AuthWrapper';
import DeleteAccountModal from '../../../componets/modalComponents/DeleteAccountModal';
import LogoutModal from '../../../componets/modalComponents/LogoutModal';
import { IMAGES } from '../../../utils/appAssets';

const Setting = () => {
  const navigation = useNavigation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    navigation.navigate('login_screen');
  };

  const handleDeleteConfirm = () => {
    setShowDeleteModal(false);
    navigation.navigate('login_screen');
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <AuthWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={handleImagePick}>
            <Image
              source={profileImage ? { uri: profileImage } : IMAGES.USER1}
              style={styles.profileImage}
            />
            <View style={styles.editIcon}>
              <Ionicons name="camera" size={16} color={BASE_COLORS.WHITE} />
            </View>
          </TouchableOpacity>

          <Text style={styles.userName}>Mac Collins</Text>
          <Text style={styles.userEmail}>maccollins@gmail.com</Text>

          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('edit_profile')}
            activeOpacity={0.8}
          >
            <Ionicons
              name="create-outline"
              size={moderateScale(13)}
              color={BASE_COLORS.WHITE}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                if (item.nav_link === 'delete_account_screen') {
                  setShowDeleteModal(true);
                } else {
                  navigation.navigate(item.nav_link);
                }
              }}
            >
              <Ionicons
                name={item.icon}
                size={20}
                color={BASE_COLORS.GRAY}
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons
                name="chevron-forward"
                size={18}
                color={BASE_COLORS.PRIMARY}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <CustomButton
          label="Log Out"
          onPress={() => setShowLogoutModal(true)}
          style={{ marginTop: 40, marginHorizontal: 2, height: 53 }}
          icon={
            <Ionicons
              name="log-out-outline"
              size={moderateScale(16)}
              color={BASE_COLORS.WHITE}
            />
          }
        />
      </ScrollView>
      {/* Delete Modal */}
      <DeleteAccountModal
        visible={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
      />

      {/* Logout Modal */}
      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </AuthWrapper>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(20),
  },
  profileImage: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    backgroundColor: BASE_COLORS.LIGHT_GRAY,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: BASE_COLORS.PRIMARY,
    borderRadius: 20,
    padding: 5,
  },
  userName: {
    fontSize: moderateScale(18),
    fontFamily: FONTS.MEDIUM,
    fontWeight: '500',
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(2),
    marginTop: verticalScale(8),
  },
  userEmail: {
    fontSize: moderateScale(12),
    color: BASE_COLORS.TEXT_SECONDARY,
    marginBottom: verticalScale(2),
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BASE_COLORS.PRIMARY,
    paddingVertical: verticalScale(6),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(3),
  },
  editProfileText: {
    color: BASE_COLORS.WHITE,
    fontSize: moderateScale(10),
    fontFamily: FONTS.MEDIUM,
  },

  menuText: {
    flex: 1,
    fontSize: moderateScale(12),
    color: BASE_COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
  },
  menuSection: {
    marginTop: verticalScale(3),
    marginBottom: verticalScale(10),
  },
  menuContainer: {
    marginTop: verticalScale(6),
  },
  menuIcon: {
    marginRight: moderateScale(10),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 0.3,
    borderBottomColor: BASE_COLORS.LIGHT_GRAY,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowIcon: {
    marginLeft: moderateScale(8),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: BASE_COLORS.BLACKISH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: BASE_COLORS.WHITE,
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: BASE_COLORS.BLACK,
    marginBottom: verticalScale(5),
    textAlign: 'center',
  },
  modaldetail: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: BASE_COLORS.DARK_GRAY,
    marginBottom: verticalScale(8),
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
    alignItems: 'center',
    width: '100%',
  },
  cancelText: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.LIGHT_GRAY,
    fontWeight: '500',
  },
  logoutText: {
    fontSize: moderateScale(14),
    color: BASE_COLORS.PRIMARY,
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: verticalScale(18),
    backgroundColor: BASE_COLORS.PRIMARY_DARK,
    marginHorizontal: moderateScale(15),
  },
});
