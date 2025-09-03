import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BASE_COLORS from '../../utils/colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const ApplyModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {/* Bottom Sheet */}
        <View style={styles.bottomSheet}>
          {/* Title */}
          <Text style={styles.modalTitle}>Apply Job</Text>

          {/* Buttons */}
          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={() => navigation.navigate('apply-done')}
          >
            <Text style={styles.uploadBtnText}>Upload Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resumeBuilderBtn}>
            <Text style={styles.resumeBuilderText}>
              Upload From Resume Builder
            </Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeArea} onPress={onClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ApplyModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: BASE_COLORS.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: BASE_COLORS.BLACK,
  },
  uploadBtn: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadBtnText: {
    color: BASE_COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
  resumeBuilderBtn: {
    backgroundColor: '#ffe6e6',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  resumeBuilderText: {
    color: 'red',
    fontSize: 15,
    fontWeight: '500',
  },
  closeArea: {
    marginTop: 16,
  },
  closeText: {
    color: BASE_COLORS.BLACK,
    fontSize: 14,
  },
});
