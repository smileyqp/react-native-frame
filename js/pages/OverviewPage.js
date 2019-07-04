
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
export default class OverviewPage extends Component {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      TopTab1:{
        screen:TopTab,
        navigationOptions: {
          title:'TopTab1'
        }
      },
      TopTab2:{
        screen:TopTab,
        navigationOptions: {
          title:'TopTab2'
        }
      }
    }));
    return (
      <View style={{flex:1,marginTop:30}}>
        <TabNavigator/>
      </View>
    );
  }
}

/**
 * 顶部导航组件
 */
class TopTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLabel}</Text>
          <Text onPress = { () => {
            NavigationUtil.goPage({
              navigation:this.props.navigation
            },"DetailPage")}}>跳转到详情页</Text>
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
