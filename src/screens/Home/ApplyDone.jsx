import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomButton from '../../componets/CustomButton';
import { IMAGES } from '../../utils/appAssets';
import BASE_COLORS from '../../utils/colors';
import { FONTS } from '../../theme/fonts';

const ApplyDone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Center Icon */}
      <Image
        source={IMAGES.DONE}
        style={styles.checkImage}
        resizeMode="contain"
      />
      {/* Heading */}
      <Text style={styles.heading}>Congratulations</Text>
      {/* Subtext */}
      <Text style={styles.subText}>
        Your application has been successfully submitted.
      </Text>
      {/* Continue button */}
      <CustomButton
        label="Back to Home"
        onPress={() => navigation.navigate('dashboard')}
        style={{
          marginHorizontal: -4,
          marginTop: 60,
          height: 54,
        }}
        textStyle={{ fontSize: 12 }}
      />
    </View>
  );
};

export default ApplyDone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    // justifyContent: 'flex-end',
  },
  checkImage: {
    width: moderateScale(62),
    height: moderateScale(62),
    marginBottom: verticalScale(12),
  },
  heading: {
    fontSize: 26,
    fontWeight: 700,
    fontFamily: FONTS.MEDIUM,
    color: BASE_COLORS.PRIMARY,
    marginBottom: verticalScale(2),
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FONTS.REGULAR,
    color: BASE_COLORS.TEXT_TERNARY,
    marginBottom: verticalScale(-30),
    paddingHorizontal: moderateScale(6),
  },
});
