import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import TabBarIcon from '../components/TabBarIcon';
import UsedCapsules from '../screens/usedCapsules';
import StockList from '../screens/stockList';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Usadas';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Usadas"
        component={UsedCapsules}
        options={{
          title: 'Capsulas Usadas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="counter" />,
        }}
      />
      <BottomTab.Screen
        name="Capsulas"
        component={StockList}
        options={{
          title: 'Stock de Capsulas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="coffee" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Usadas':
      return 'Capsulas Usadas';
    case 'Capsulas':
      return 'Stock de Capsulas';
  }
}
