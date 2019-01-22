/**
 * Created by jkwu on 2018/6/22.
 */
import React, { Component } from 'react';
import { Tabs } from 'antd-mobile-rn';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import styleDict from '../../constants/styleDict';

const tabs = [
  { sub: '1', title: '全部' },
  { sub: '2', title: '旧约' },
  { sub: '3', title: '新约' },
];

const data = [{}, {}, {}, {}, {}];

export default class Bible extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _renderItem = () => {
    return (
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>创世纪</Text>
          <Text>摩西</Text>
        </View>
        <Text style={{ marginTop: 5 }}>
          在世界文明史上，犹太教对公元前后崛起的基督教的形成，入《圣经》。《圣经》由两部分组成：旧约全书和新
        </Text>
      </View>
    );
  };

  render() {
    return (
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
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          {...this.props}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this._renderItem}
        />
      </Tabs>
    );
  }
}
