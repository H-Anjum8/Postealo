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
        tabBarInactiveTintColor: '#8e8e93',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0.5,
          borderTopColor: '#ccc',
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
