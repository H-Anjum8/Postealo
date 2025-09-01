import HomeScreen from '../screens/Home';
import Applications from '../screens/Home/Applications';
import Message from '../screens/Home/Message';
import ResumeBuilder from '../screens/Home/ResumeBuilder';
import Setting from '../screens/Home/Setting';
import IntroductionScreen from '../screens/IntroductionScreen';
import SplashScreen from '../screens/SplashScreen';
import { ICONS } from './appAssets';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import PeronsalInformation from '../screens/Auth/PeronsalInformation';
import SignupOTPVerify from '../screens/Auth/SignupOTPVerify';
import UpdateEmail from '../screens/Auth/UpdateEmail';
import UploadProfileImage from '../screens/Auth/UploadProfileImage';

const Routes = {
  Splash: {
    name: 'splash_screen',
    component: SplashScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  IntroductionScreen: {
    name: 'introduction',
    component: IntroductionScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  Login: {
    name: 'login_screen',
    component: Login,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PeronsalInformation: {
    name: 'peronsal_information',
    component: PeronsalInformation,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  UpdateEmail: {
    name: 'update_email',
    component: UpdateEmail,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  //   ForgotPassword: {
  //     name: 'forgot_password',
  //     component: ForgotPassword,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   VerifyOTP: {
  //     name: 'verify_otp',
  //     component: VerifyOTP,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   NewPassword: {
  //     name: 'new_password',
  //     component: NewPassword,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   ResetPasswordSuccess: {
  //     name: 'reset_pass_success',
  //     component: ResetPasswordSuccess,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  Signup: {
    name: 'signup',
    component: Signup,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  SignupOTPVerify: {
    name: 'signup_otp_verify',
    component: SignupOTPVerify,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  UploadProfileImage: {
    name: 'upload_profile_image',
    component: UploadProfileImage,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  HomeScreen: {
    name: 'home_screen',
    component: HomeScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  //   SignupDone: {
  //     name: 'signup_done',
  //     component: SignupDone,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   Dashboard: {
  //     name: 'dashboard',
  //     component: BottomNavigation,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },

  // Setting screens
  //   ChangePassword: {
  //     name: 'change_password',
  //     component: ChangePassword,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   PrivacyPolicy: {
  //     name: 'privacy_policy',
  //     component: PrivacyPolicy,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   TermsAndConditions: {
  //     name: 'terms_and_conditions',
  //     component: TermsAndConditions,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   PersonalInformation: {
  //     name: 'personal_information',
  //     component: PersonalInformation,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
  //   EditProfile: {
  //     name: 'edit_profile',
  //     component: EditProfile,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },

  //   setting: {
  //     name: 'setting',
  //     component: Setting,
  //     options: {
  //       headerShown: false,
  //       gestureEnabled: false,
  //     },
  //     authRequired: false,
  //   },
};

export const BOTTOM_ROUTES = [
  {
    name: 'home',
    component: HomeScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.HOME,
    label: 'Home',
  },

  {
    name: 'applications',
    component: Applications,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.APPLICAATION,
    label: 'Applications',
  },

  {
    name: 'resume_builder',
    component: ResumeBuilder,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.RESUME,
    label: 'Resume Builder',
  },
  {
    name: 'message',
    component: Message,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.MESSAGES,
    label: 'Message',
  },
  {
    name: 'setting',
    component: Setting,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    icon: ICONS.SETTING,
    label: 'Settings',
  },
];

export const getAuthScreens = () => {
  return Object.values(Routes).filter(route => !route.authRequired);
};

export const getProtectedScreens = () => {
  return Object.values(Routes).filter(route => route.authRequired);
};

export default Routes;
