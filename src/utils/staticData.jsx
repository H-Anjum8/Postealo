import { IMAGES } from './appAssets';
import BASE_COLORS from './colors';

export const menuItems = [
  {
    title: 'Personal Information',
    icon: 'person-outline',
    nav_link: 'personal_information',
  },

  {
    title: 'Change Password',
    icon: 'key-outline',
    nav_link: 'change_password',
  },
  {
    title: 'Privacy Policy',
    icon: 'shield-checkmark-outline',
    nav_link: 'privacy_policy',
  },
  {
    title: 'Terms & Conditions',
    icon: 'document-text-outline',
    nav_link: 'terms_and_conditions',
  },

  {
    title: 'Delete Account',
    icon: 'trash-outline',
    nav_link: 'delete_account_screen',
  },
];

// Dummy Applications Data
export const applications = [
  {
    id: '1',
    title: 'UI/UX Designer',
    company: 'Google LLC',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Pending',
    category: 'Design',
    statusColor: BASE_COLORS.STATUS,
    logo: IMAGES.GOOGLE, // ✅ imported from project
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Paypal',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Accepted',
    category: 'Design',
    statusColor: BASE_COLORS.GREEN,
    logo: IMAGES.PAYPAL,
  },
  {
    id: '3',
    title: 'Application Developer',
    company: 'Figma',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Rejected',
    category: 'Design',
    statusColor: BASE_COLORS.PRIMARY,
    logo: IMAGES.FIGMA,
  },
  {
    id: '4',
    title: 'Graphic Designer',
    company: 'Pinterest',
    location: 'California, United States',
    salary: '$32k/yr',
    type: 'Remote',
    mode: 'Full Time',
    status: 'Application Pending',
    category: 'Design',
    statusColor: BASE_COLORS.STATUS,
    logo: IMAGES.PINTEREST,
  },
];

export const mesgData = [
  { id: 1, text: 'Lorem ipsum dolor sit amet consectetur.', type: 'sent' },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'received',
  },
  { id: 3, text: 'Lorem ipsum dolor sit amet consectetur.', type: 'sent' },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'received',
  },
  { id: 5, text: 'Lorem ipsum dolor sit amet consectetur.', type: 'sent' },
  {
    id: 6,
    text: 'Lorem ipsum dolor sit amet consectetur.',
    type: 'received',
  },
];

export const messagesData = [
  {
    id: '1',
    name: 'John Deo',
    message: 'Hello Jonas',
    time: 'Now',
    image: IMAGES.USER1,
    unread: true,
  },
  {
    id: '2',
    name: 'Angela',
    message: 'Hello Jonas',
    time: 'Now',
    image: IMAGES.USER2,
    unread: true,
  },
  {
    id: '3',
    name: 'Nicole',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: '01:04 pm',
    image: IMAGES.USER3,
  },
  {
    id: '4',
    name: 'John Styles',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: '02:54 pm',
    image: IMAGES.USER4,
  },
  {
    id: '5',
    name: 'Saul White',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: '06:25 am',
    image: IMAGES.USER5,
  },
  {
    id: '6',
    name: 'Michelle Turcotte',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: 'yesterday',
    image: IMAGES.USER6,
  },
  {
    id: '7',
    name: 'Jane Deo',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: 'yesterday',
    image: IMAGES.USER7,
  },
  {
    id: '8',
    name: 'Harry Cane',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: 'yesterday',
    image: IMAGES.USER1,
  },
  {
    id: '9',
    name: 'Harry Cane2',
    message: 'Lorem ipsum dolor sit amet consectetur.',
    time: 'yesterday',
    image: IMAGES.USER2,
  },
];
