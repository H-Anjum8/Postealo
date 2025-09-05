import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_ROUTES } from '../utils/routlist';
import { Image, View } from 'react-native';
import BASE_COLORS from '../utils/colors';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: BASE_COLORS.SECONDARY,
        tabBarInactiveTintColor: BASE_COLORS.GRAY,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden',
          backgroundColor: BASE_COLORS.WHITE,
          borderTopWidth: 0.5,
          borderTopColor: BASE_COLORS.BORDER_COLOR,
          height: 70,
          paddingBottom: 10,
          // marginTop: 5,
        },

        tabBarItemStyle: {
          paddingTop: -20,
        },
        tabBarLabelStyle: {
          fontSize: 7,
          marginBottom: 10,
        },
      }}
    >
      {BOTTOM_ROUTES.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            ...route.options,
            tabBarLabel: route.label || route.name,
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  borderTopWidth: focused ? 3 : 0, // 👈 added
                  borderTopColor: focused ? BASE_COLORS.PRIMARY : 'transparent', // 👈 added
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingTop: 5,
                  width: '100%',
                }}
              >
                <Image
                  source={focused ? route.icon.ACTIVE : route.icon.INACTIVE}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
