import React , { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Employee from "./EmployeeTypes/Employee";
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

function Footer(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Employee" component={Employee} />
    </Tab.Navigator>
  )
};


export default Footer;