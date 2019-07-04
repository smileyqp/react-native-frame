
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator,
    createAppContainer} from 'react-navigation';
import AreaPage from '../pages/AreaPage';
import CarPage from '../pages/CarPage';
import OverviewPage from '../pages/OverviewPage';
import TaskPage from '../pages/TaskPage';
import UserPage from '../pages/UserPage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NavigationUtil from "./NavigationUtil";



const TABS = {
        AreaPage: {
            screen: AreaPage,
            navigationOptions: {
                tabBarLabel:"园区",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'map'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        CarPage: {
            screen: CarPage,
            navigationOptions: {
                tabBarLabel:"车辆",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'car'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        OverviewPage: {
            screen: OverviewPage,
            navigationOptions: {
                tabBarLabel:"概览",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'info-circle'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        TaskPage: {
            screen: TaskPage,
            navigationOptions: {
                tabBarLabel:"任务",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'tasks'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },
        UserPage: {
            screen: UserPage,
            navigationOptions: {
                tabBarLabel:"个人",
                tabBarIcon:({tintColor,focused})=>(
                    <FontAwesome
                        name={'user'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        }
    }


export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator (){
        const {AreaPage,CarPage,OverviewPage,TaskPage,UserPage} = TABS;
        const tabs = {AreaPage,CarPage,OverviewPage,TaskPage,UserPage};
        AreaPage.navigationOptions.tabBarLabel= '园区';//动态配置tab属性
        return createAppContainer(createBottomTabNavigator(tabs,{
            lazy:true,
            animationEnabled:false,
            initialRouteName:'OverviewPage',
            tabBarOptions:{
                tabStyle:{minWidth:50,marginTop:5},
                upperCaseLabel:false,
                scrollEnabled:false,
                labelStyle:{
                    fontSize:12
                }
            }
        }));
    }

    render() {
        // NavigationUtil.navigation = this.props.navigation;
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

