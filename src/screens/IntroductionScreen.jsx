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
    <AuthWrapper>
      {/* FlatList for Swiping */}
      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
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

      {/* Bottom Controls */}
      <View style={styles.footer}>
        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Ionicons name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLORS.WHITE,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.7,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    color: BASE_COLORS.BLACK,
    alignSelf: 'flex-start',
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    marginTop: 10,
    color: BASE_COLORS.DARK_GRAY,
    alignSelf: 'flex-start',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 20,
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
    backgroundColor: BASE_COLORS.PRIMARY,
    borderRadius: 25,
    padding: 12,
  },
});
