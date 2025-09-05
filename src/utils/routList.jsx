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
import Home from '../screens/Home';
import BottomNavigation from '../navigation/BottomNavigation';
import JobDetails from '../screens/Home/JobDetails';
import ApplyJob from '../screens/Home/ApplyJob';
import ApplyDone from '../screens/Home/ApplyDone';
import ForgotPassword from '../screens/Auth/ForgotPasswordScreens/ForgotPassword';
import VerifyOTP from '../screens/Auth/ForgotPasswordScreens/VerifyOTP';
import ChatScreen from '../screens/Home/Message/ChatScreen';
import PersonalInformation from '../screens/Home/Setting/PersonalInformation';
import ChangePassword from '../screens/Home/Setting/ChangePassword';
import PrivacyPolicy from '../screens/Home/Setting/PrivacyPolicy';
import TermsAndConditions from '../screens/Home/Setting/TermsAndConditions';
import ResetPassword from '../screens/Auth/ForgotPasswordScreens/ResetPassword';
import EditProfile from '../screens/Home/Setting/EditProfile';
import ApplicationDetail from '../screens/Home/Applications/ApplicationDetail';
import ResumeLanguage from '../screens/Home/ResumeBuilder/ResumeLanguage';
import CreateResume from '../screens/Home/ResumeBuilder/CreateResume';
import EditResume from '../screens/Home/ResumeBuilder/EditResume';
import SelectResume from '../screens/Home/SelectResume';
import PdfPreview from '../screens/Home/ResumeBuilder/PdfPreview';
import ResumePreview from '../screens/Home/ResumeBuilder/ResumePreview';

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

  ForgotPassword: {
    name: 'forgot_password',
    component: ForgotPassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  VerifyOTP: {
    name: 'verify_otp',
    component: VerifyOTP,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ResetPassword: {
    name: 'reset_password',
    component: ResetPassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

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
  Dashboard: {
    name: 'dashboard',
    component: BottomNavigation,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  JobDetails: {
    name: 'job_details',
    component: JobDetails,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ApplyJob: {
    name: 'apply-job',
    component: ApplyJob,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  SelectResume: {
    name: 'select_resume',
    component: SelectResume,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ApplyDone: {
    name: 'apply-done',
    component: ApplyDone,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  // applications Screens
  ApplicationDetail: {
    name: 'application_detail',
    component: ApplicationDetail,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  // Resume Builder Screens
  CreateResume: {
    name: 'create_resume',
    component: CreateResume,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ResumeLanguage: {
    name: 'resume_language',
    component: ResumeLanguage,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PdfPreview: {
    name: 'pdf_preview',
    component: PdfPreview,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  EditResume: {
    name: 'edit_resume',
    component: EditResume,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ResumePreview: {
    name: 'resume_preview',
    component: ResumePreview,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  // Messages screens
  ChatScreen: {
    name: 'chat_screen',
    component: ChatScreen,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  // Setting screens
  setting: {
    name: 'setting',
    component: Setting,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PersonalInformation: {
    name: 'personal_information',
    component: PersonalInformation,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  ChangePassword: {
    name: 'change_password',
    component: ChangePassword,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  PrivacyPolicy: {
    name: 'privacy_policy',
    component: PrivacyPolicy,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
  TermsAndConditions: {
    name: 'terms_and_conditions',
    component: TermsAndConditions,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },

  EditProfile: {
    name: 'edit_profile',
    component: EditProfile,
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
    authRequired: false,
  },
};

export const BOTTOM_ROUTES = [
  {
    name: 'home',
    component: Home,
    icon: ICONS.HOME,
    label: 'Home',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },

  {
    name: 'applications',
    component: Applications,
    icon: ICONS.APPLICATION,
    label: 'Applications',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },

  {
    name: 'resume_builder',
    component: ResumeBuilder,

    icon: ICONS.RESUME,
    label: 'Resume Builder',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  {
    name: 'message',
    component: Message,

    icon: ICONS.MESSAGES,
    label: 'Message',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  {
    name: 'setting',
    component: Setting,
    icon: ICONS.SETTING,
    label: 'Settings',
    options: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
];

export const getAuthScreens = () => {
  return Object.values(Routes).filter(route => !route.authRequired);
};

export const getProtectedScreens = () => {
  return Object.values(Routes).filter(route => route.authRequired);
};

export default Routes;
