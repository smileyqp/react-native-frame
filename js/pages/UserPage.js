
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class UserPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>User Page! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
