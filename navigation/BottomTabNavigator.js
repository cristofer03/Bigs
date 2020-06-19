import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Transaction from '../screens/Transaction';
import Services from '../screens/ServicesScreen';
import RechargeScreen from '../screens/RechargeScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={RechargeScreen}
        options={{
          title: 'Recargas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-phone-portrait" />,
        }}
      />
      <BottomTab.Screen
        name="Services"
        component={Services}
        options={{
          title: 'Servicios',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
        }}
      />
            <BottomTab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          title: 'Transacciones',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-list" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Recargas';
    case 'Services':
      return 'Servicios';
      case 'Transacciones':
        return 'Transacciones';
      
  }
}
