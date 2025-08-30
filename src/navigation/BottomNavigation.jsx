// import React, { useEffect } from 'react';
// import { Image } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useDispatch, useSelector } from 'react-redux';

// import { BOTTOM_ROUTES_USER, BOTTOM_ROUTES_MANAGER } from '../utils/routlist';

// import BASE_COLORS from '../utils/colors';
// import {
//   selectUserRole,
//   setUserRole, // ✅ Import this to manually set role
// } from '../store/slices/authSlice'; // ✅ Update path if needed

// const Tab = createBottomTabNavigator();

// const BottomNavigation = () => {
//   const dispatch = useDispatch();
//   const role = useSelector(selectUserRole);

//   let bottomRoutes = [];

//   switch (role) {
//     case 'mechanic':
//       bottomRoutes = BOTTOM_ROUTES_USER;
//       break;
//     // Add more roles if needed
//     case 'truck_owner':
//     default:
//       bottomRoutes = BOTTOM_ROUTES_MANAGER;
//       break;
//   }

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: BASE_COLORS.SECONDARY,
//         tabBarInactiveTintColor: '#8e8e93',
//         tabBarStyle: {
//           backgroundColor: '#ffffff',
//           borderTopWidth: 0.5,
//           borderTopColor: '#ccc',
//         },
//       }}
//     >
//       {bottomRoutes.map(route => (
//         <Tab.Screen
//           key={route.name}
//           name={route.name}
//           component={route.component}
//           options={{
//             ...route.options,
//             tabBarLabel: route.label || route.name,
//             tabBarIcon: ({ color, focused }) => (
//               <Image
//                 source={focused ? route.icon.active : route.icon.inactive}
//                 style={{ width: 24, height: 24 }}
//                 resizeMode="contain"
//               />
//             ),
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// };

// export default BottomNavigation;

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BottomNavigation = () => {
  return (
    <View>
      <Text>BottomNavigation</Text>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
