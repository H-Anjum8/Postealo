import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import AuthWrapper from '../../componets/AuthWrapper';
import CustomHeader from '../../componets/CustomHeaders';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BASE_COLORS from '../../utils/colors';
import CustomButton from '../../componets/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const SelectResume = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { resume } = route.params || {};
  const [selected, setSelected] = useState(false);

  return (
    <AuthWrapper>
      <CustomHeader
        leftIcon={<Ionicons name="chevron-back" size={24} color="black" />}
        onLeftPress={() => navigation.goBack()}
        heading="Resume Builder"
        headingTextStyle={{
          fontSize: 19,
        }}
        showWelcomeText={false}
        showDescription={false}
        showHeading={true}
      />

      <SafeAreaView style={styles.container}>
        {/* Uploaded Resume Box */}
        <TouchableOpacity
          style={styles.resumeBox}
          onPress={() => setSelected(!selected)}
          activeOpacity={0.7}
        >
          <View
            style={{
              padding: 10,
              borderRadius: 20,
              borderColor: BASE_COLORS.GRAY,
            }}
          >
            <Ionicons
              name="document-text-outline"
              size={22}
              color={BASE_COLORS.PRIMARY}
            />
          </View>

          <Text style={styles.resumeName}>
            {resume?.name || 'No resume uploaded'}
          </Text>

          {/* Circle Checkbox */}
          <Ionicons
            name={selected ? 'checkmark-circle' : 'ellipse-outline'}
            size={22}
            color={selected ? BASE_COLORS.PRIMARY : '#999'}
          />
        </TouchableOpacity>

        {/* Create New Resume Button */}
        <CustomButton
          label="Create New Resume"
          onPress={() => navigation.navigate('create_resume')}
          style={{ marginVertical: 13 }}
        />

        {/* Bottom Upload & Submit - only show if resume selected */}
        {selected && (
          <View style={styles.bottomBtn}>
            <CustomButton
              label="Upload & Submit"
              onPress={() => navigation.navigate('apply-done')}
            />
          </View>
        )}
      </SafeAreaView>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  resumeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: BASE_COLORS.BACKGROUND_COLOR,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 10,
    backgroundColor: BASE_COLORS.WHITE,
    justifyContent: 'space-between',
  },

  resumeName: {
    flex: 1,
    fontSize: 14,
    color: BASE_COLORS.BLACK,
    marginHorizontal: 10,
  },
  bottomBtn: {
    marginTop: 'auto',
    marginBottom: 15,
  },
});

export default SelectResume;
