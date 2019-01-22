/**
 * Created by jkwu on 2018/6/22.
 */
import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  FlatList, ScrollView, TouchableOpacity,
  Text,
  View,
} from 'react-native';
import styleDict from '../../constants/styleDict';

const tabs = [
  { sub: '1', title: '每日晨钟' },
  { sub: '2', title: '每日灵修' },
];

const data = [
  { name: '高举主耶稣', id: 1, describe: '目录描述目录描述' },
  { name: '从心出发', id: 2, describe: '目录描述目录描述' },
  { name: '活跃的生命', id: 3, describe: '目录描述目录描述' },
  { name: '爱你一万年', id: 4, describe: '目录描述目录描述' },
  { name: '生命', id: 5, describe: '目录描述目录描述' },
  { name: '积少成多', id: 6, describe: '目录描述目录描述' },
  { name: '高举主耶稣', id: 7, describe: '目录描述目录描述' },
  { name: '圣经', id: 8, describe: '目录描述目录描述' },
  {}, {}, {}, {}, {}, {}, {}, {}, {}
];

export default class Spirtuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  _changOpenState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  _renderItem = () => {
    return (
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>创世纪</Text>
          <Text>摩西</Text>
        </View>
      </View>
    );
  };

  _renderRecentReading = () => {
    const { isOpen } = this.state;
    const ItemWidth = (styleDict.windowW - 100) / 3;
    if (isOpen) {
      return (
        data && data.length > 0 && data.map((item) => {
          return (
            <View style={{ width: ItemWidth, height: 50 }}>
              <Text>{item.name}</Text>
              <Text>{item.describe}</Text>
            </View>
          );
        })
      );
    }
    const sliceData = data.slice(0, 2);
    return (
      sliceData && sliceData.length > 0 && sliceData.map((item) => {
        return (
          <View style={{ width: ItemWidth, height: 40 }}>
            <Text>{item.name}</Text>
            <Text>{item.describe}</Text>
          </View>
        );
      })
    );
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 15 }}>
          <TouchableOpacity onPress={this._changOpenState}>
            <View style={{ flex: 1, flexDirection: 'row', width: 90, marginTop: 15 }} >
              <Text style={{ fontSize: 16 }}>最近阅读</Text>
              <View style={{ marginLeft: 5, alignItems: 'center' }}>
                {
                  this.state.isOpen ? <Icon name="ios-arrow-dropdown-outline" /> :
                  <Icon name="ios-arrow-dropright-outline" />
                }
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', width: styleDict.windowW - 120, flexWrap: 'wrap',
          padding: 5 }}
          >
            { this._renderRecentReading() }
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', height: 50, paddingHorizontal: 15, alignItems: 'center' }}>
            <Text>所有书籍</Text>
            <DatePicker />
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            {...this.props}
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={this._renderItem}
          />
        </View>
      </ScrollView>
    );
  }
}
