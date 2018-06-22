/**
 * Created by jkwu on 2018/6/18.
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Tabs } from 'antd-mobile-rn';
import Button from 'react-native-customer-button';
import StringDistinction from 'react-native-string-distinction';
import styleDict from '../../constants/styleDict';

const tabs = [
  { sub: '1', title: '书库' },
  { sub: '2', title: '灵修' },
  { sub: '3', title: '百科' },
  { sub: '4', title: '本地' }
];

export default class Home extends Component {
  _toContent = (gender) => {
    const { navigation } = this.props;
    navigation.navigate('Content', { gender });
  };

  render() {
    const itemWidth = styleDict.windowW / 2;
    const itemHeight = styleDict.windowH - 10;
    return (
      <View style={{ flex: 1, paddingVertical: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', width: styleDict.windowW }} >
          <Button
            style={{ width: 50 }}
            title="搜索内容"
          />
          <TextInput
            placeholder="搜索，如：隐形的珍宝"
            value={''}
            style={{ width: styleDict.windowW - 150 }}
          />
          <Button
            style={{ width: 50 }}
            title="搜索"
          />
          <Image />
        </View>
        <View>
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
            <Text>dsfds</Text>
          </Tabs>

        </View>
      </View>
    );
  }
}
