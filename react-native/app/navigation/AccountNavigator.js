import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserDetailsScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={UserDetailsScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="My List" component={ViewImageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
