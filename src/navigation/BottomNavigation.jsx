import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BOTTOM_ROUTES from '../utils/routlist';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: BASE_COLORS.PRIMARY,
        tabBarInactiveTintColor: '#8e8e93',
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
                source={route.icon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: color,
                }}
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
