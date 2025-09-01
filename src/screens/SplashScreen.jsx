import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { IMAGES } from '../utils/appAssets';
import { FONTS } from '../theme/fonts';
import BASE_COLORS from '../utils/colors';
const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image source={IMAGES.LOGO} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Welcome To</Text>
        <Text style={styles.appName}>Postealo</Text>
        <Text style={styles.tagline}>
          Connecting Opportunities,{'\n'}Empowering Careers
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  logoContainer: {
    marginTop: 4,
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 180,
    height: 180,
  },
  textContainer: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 18,
    color: BASE_COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    letterSpacing: -1,
  },
  appName: {
    fontSize: 24,
    marginTop: -4,
    fontWeight: '700',
    fontFamily: FONTS.MEDIUM,
    color: BASE_COLORS.PRIMARY,
    marginBottom: 4,
    letterSpacing: -1,
  },
  tagline: {
    fontFamily: FONTS.LIGHT_ITALIC,
    fontSize: 12,
    textAlign: 'center',
    color: BASE_COLORS.BLACK,
    lineHeight: 14,
  },
});
