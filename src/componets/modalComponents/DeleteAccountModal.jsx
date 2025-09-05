import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import BASE_COLORS from '../../utils/colors';
import { FONTS } from '../../theme/fonts';

const DeleteAccountModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Delete Account</Text>
          <Text style={styles.modaldetail}>
            Deleting your account will permanently remove your{'\n'}
            profile and all associated data from the Postealo{'\n'}
            Repairs app. This action cannot be undone.
          </Text>
          <View style={styles.optionRow}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity onPress={onConfirm}>
              <Text style={styles.logoutText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;

const styles = StyleSheet.create({
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
    fontFamily: FONTS.MEDIUM,
  },
  modaldetail: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: BASE_COLORS.DARK_GRAY,
    marginBottom: verticalScale(8),
    textAlign: 'center',
    fontFamily: FONTS.REGULAR,
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
