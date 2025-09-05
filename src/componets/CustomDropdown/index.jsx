import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';

const CustomDropdown = ({
  placeholder,
  selectedValue,
  onValueChange,
  options,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      {/* Dropdown Field */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text style={{ color: selectedValue ? '#000' : '#999' }}>
          {selectedValue || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#000" />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.modalBg}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalBox}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item);
                    setVisible(false);
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: BASE_COLORS.WHITE,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    padding: 20,
  },
  modalBox: {
    backgroundColor: BASE_COLORS.WHITE,
    borderRadius: 8,
    padding: 15,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default CustomDropdown;
