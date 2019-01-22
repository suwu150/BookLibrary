/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Platform, Share, Alert } from 'react-native';
import { Tabs } from 'antd-mobile-rn';
import Button from 'react-native-customer-button';
import StringDistinction from 'react-native-string-distinction';
import Icon from 'react-native-vector-icons/Ionicons';
import styleDict from '../../constants/styleDict';

import Libirary from '../library';
import Spirtuality from '../spirtuality';
import Encyclopedia from '../encyclopedia';
import Local from '../local';
import RNShare from "react-native-share";
import IconFeather from "../library/booKContent";
const tabs = [
  { sub: '1', title: '书库' },
  { sub: '2', title: '灵修' },
  { sub: '3', title: '百科' },
  { sub: '4', title: '本地' }
];

export default class Home extends Component {
  // header: null,
  // static navigationOptions = () => {
  //   return {
  //     header: null
  //   };
  // };

  _toContent = (gender) => {
    const { navigation } = this.props;
    navigation.navigate('Content', { gender });
  };

  render() {
    const itemWidth = styleDict.windowW / 2;
    const itemHeight = styleDict.windowH - 10;
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', paddingLeft: 10, width: styleDict.windowW, justifyContent: 'center',
          backgroundColor: '#fff', alignItems: 'center', marginBottom: 10 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center',
            borderWidth: 1, borderColor: '#999693', height: 38 }}
          >
            <Button
              style={{ width: 70, height: '100%', backgroundColor: '#cfccc9' }}
              title="搜索内容"
            />
            <TextInput
              placeholder="搜索，如：隐形的珍宝"
              value={''}
              style={{ width: 180, paddingLeft: 10 }}
            />
            <Button
              style={{ width: 50, height: '100%', backgroundColor: '#00b300' }}
              textStyle={{ color: '#fff' }}
              title="搜索"
            />
          </View>
          <Icon
            style={{ width: 30, height: 30, marginLeft: 10 }}
            name="ios-settings-outline"
            size={28}
            color="#999693"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Tabs
            tabs={tabs}
            initialPage={'1'}
            useOnPan={false}
            animated={false}
            swipeable={false}
            usePaged
            prerenderingSiblingsNumber={3}
            tabBarBackgroundColor={styleDict.colorSet.pageBackground}
            tabBarActiveTextColor={styleDict.colorSet.mainColor}
            tabBarInactiveTextColor={styleDict.colorSet.fontColor}
            tabBarTextStyle={{ fontSize: styleDict.fontSet.mSize }}
            tabBarUnderlineStyle={{ backgroundColor: styleDict.colorSet.mainColor }}
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} animated={false} />}
          >
            <Libirary navigation={this.props.navigation} />
            <Spirtuality navigation={this.props.navigation} />
            <Encyclopedia navigation={this.props.navigation} />
            <Local navigation={this.props.navigation} />
          </Tabs>
        </View>
      </View>
    );
  }
}
