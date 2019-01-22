/**
 * Created by jkwu on 2018/6/22.
 */
import React, { Component } from 'react';
import { Tabs, Carousel } from 'antd-mobile-rn';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import styleDict from '../../constants/styleDict';

const tabs = [
  { sub: '1', title: '圣经b百科' },
  { sub: '2', title: '怀著名词' },
  { sub: '3', title: '圣经词典' },
  { sub: '4', title: '怀著词汇' },
  { sub: '5', title: '圣经浅注' },
];

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _renderItem = () => {
    return (
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 3 }}>
        <Text>阿比乐(abb)</Text>
        <Text style={{ marginTop: 5, marginLeft: 15 }}>
          在世界文明史上，犹太教对公元前后崛起的基督教的形成，入《圣经》。《圣经》由两部分组成：旧约全书和新
        </Text>
      </View>
    );
  };

  render() {
    return (
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
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            {...this.props}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={this._renderItem}
          />
        </Tabs>
      </View>
    );
  }
}
