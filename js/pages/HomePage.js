import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator/>
  }
}



