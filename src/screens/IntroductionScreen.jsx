import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../utils/appAssets';
import BASE_COLORS from '../utils/colors';
import AuthWrapper from '../componets/AuthWrapper';
const { width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { FONTS } from '../theme/fonts';
import Svg, { Circle } from 'react-native-svg';
// Onboarding data
const slides = [
  {
    id: '1',
    image: IMAGES.SPLASH1,
    title: 'Your path to finding the perfect job or hiring top talent.',
    description:
      'Whether you’re a job seeker or employer, Postealo connects you with the right opportunities. Explore the app to find your perfect match.',
  },
  {
    id: '2',
    image: IMAGES.SPLASH2,
    title: 'Apply easily and directly to the best job openings.',
    description:
      'Upload your resume, apply for jobs, and track your applications all in one place. Let employers find you.',
  },
  {
    id: '3',
    image: IMAGES.SPLASH3,
    title: 'Post jobs and manage applications seamlessly.',
    description:
      'Create job listings, view applicants, and make hiring decisions all in one place. Find the best candidates for your team.',
  },
];
const CIRCLE_SIZE = 50;
const STROKE_WIDTH = 3;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const IntroductionScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('signup');
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* FlatList for Swiping */}
      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              {/* Shadow wrapper */}
              <View style={styles.imageWrapper}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View>
        {/* Bottom Controls */}
        <View style={styles.footer}>
          {/* Pagination Dots */}
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => slidesRef.current.scrollToIndex({ index })}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    styles.dot,
                    currentIndex === index && styles.activeDot,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Svg
              height={CIRCLE_SIZE}
              width={CIRCLE_SIZE}
              style={styles.progressCircle}
            >
              <Circle
                stroke="#f2f2f2"
                fill="none"
                cx={CIRCLE_SIZE / 2}
                cy={CIRCLE_SIZE / 2}
                r={RADIUS}
                strokeWidth={STROKE_WIDTH}
              />
              <Circle
                stroke={BASE_COLORS.PRIMARY}
                fill="none"
                cx={CIRCLE_SIZE / 2}
                cy={CIRCLE_SIZE / 2}
                r={RADIUS}
                strokeWidth={STROKE_WIDTH}
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={
                  CIRCUMFERENCE -
                  (CIRCUMFERENCE * (currentIndex + 1)) / slides.length
                }
                strokeLinecap="round"
              />
            </Svg>

            {/* 🔴 Inner Red Circle */}
            <View style={styles.innerCircle}>
              <Ionicons name="chevron-forward" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Android shadow
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: BASE_COLORS.WHITE, // must add for shadow to appear properly
    marginTop: 0,
  },
  image: {
    width: 360,
    height: 260,
    resizeMode: 'cover',
    marginTop: 6,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 45,
    fontWeight: 600,
    fontFamily: FONTS.BOLD,
    color: BASE_COLORS.BLACK,
    alignSelf: 'flex-start',
    letterSpacing: -0.7,
  },
  description: {
    fontSize: 12,
    textAlign: 'left',
    marginTop: 30,
    color: BASE_COLORS.BLACK,
    alignSelf: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 50,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: BASE_COLORS.PRIMARY_LIGHT,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: BASE_COLORS.PRIMARY,
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'relative',
  },
  progressCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  innerCircle: {
    backgroundColor: BASE_COLORS.PRIMARY,
    width: CIRCLE_SIZE - 10, // smaller than outer ring
    height: CIRCLE_SIZE - 10,
    borderRadius: (CIRCLE_SIZE - 10) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
