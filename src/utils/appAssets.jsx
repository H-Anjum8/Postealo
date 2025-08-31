const images = {
  SPLASH_SCREEN: require('../assets/LOGO.png'),
  SPLASH1: require('../assets/SPLASH1.png'),
  SPLASH2: require('../assets/SPLASH1.png'),
  SPLASH3: require('../assets/SPLASH1.png'),
  PHOTO: require('../assets/PHOTO.png'),

  UPLOADER: require('../assets/UPLOADER.png'),
  FILE: require('../assets/FILE.png'),
  DONE: require('../assets/DONE.png'),

  USER1: require('../assets/user1.png'),
  USER2: require('../assets/user2.png'),
  USER3: require('../assets/user3.png'),
  USER4: require('../assets/user4.png'),
  USER5: require('../assets/user5.png'),
  USER6: require('../assets/user6.png'),
  USER7: require('../assets/user7.png'),

  APPLE: require('../assets/apple.png'),
  GOOGLE: require('../assets/GOOGLE.png'),
  SPOTIFY: require('../assets/SPOTIFY.png'),
  FIGMA: require('../assets/FIGMA.png'),
  PAYPAL: require('../assets/PAYPAL.png'),
  REDDIT: require('../assets/REDDIT.png'),
  PINTEREST: require('../assets/PINTEREST.png'),
};

const icons = {
  HOME: {
    ACTIVE: require('../assets/Bottom_icons/home_active.png'),
    INACTIVE: require('../assets/Bottom_icons/home_inactive.png'),
  },
  APPLICAATION: {
    ACTIVE: require('../assets/Bottom_icons/application_active.png'),
    INACTIVE: require('../assets/Bottom_icons/application_inactive.png'),
  },

  RESUME: {
    ACTIVE: require('../assets/Bottom_icons/resume_active.png'),
    INACTIVE: require('../assets/Bottom_icons/resume_inactive.png'),
  },

  MESSAGES: {
    ACTIVE: require('../assets/Bottom_icons/messages_active.png'),
    INACTIVE: require('../assets/Bottom_icons/messages_inactive.png'),
  },

  SETTING: {
    ACTIVE: require('../assets/Bottom_icons/setting_active.png'),
    INACTIVE: require('../assets/Bottom_icons/setting_inactive.png'),
  },
};

// Export assets
export const IMAGES = images;
export const ICONS = {
  ...icons,
};

export default {
  IMAGES,
  ICONS,
};
