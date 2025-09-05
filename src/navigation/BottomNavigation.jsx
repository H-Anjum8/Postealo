import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BOTTOM_ROUTES } from '../utils/routlist';
import { Image } from 'react-native';
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
          backgroundColor: BASE_COLORS.WHITE,
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',

          height: 90, // 👈 overall tab height
          paddingBottom: 10, // 👈 padding from bottom
          paddingTop: 5, // 👈 padding from top
        },
        tabBarItemStyle: {
          paddingVertical: 6, // 👈 controls icon + label padding
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
              <Image
                source={focused ? route.icon.ACTIVE : route.icon.INACTIVE}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
