import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../src/presentation/Screens/Home/Home'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Home} />
      <Tab.Screen name="Transaction" component={Home} />
      <Tab.Screen name="Prices" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  )
}

export default Tabs
