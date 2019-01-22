/**
 * Created by jkwu on 2018/6/24.
 */
import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleDict from '../../constants/styleDict';

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default class Local extends Component {
  _renderButtonGroup = () => {
    const itemWidth = (styleDict.windowW - 30) / 3;
    return (
      <View
        style={{ paddingVertical: 5, paddingHorizontal: 15, backgroundColor: 'white',
          justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
      >
        <View style={{ width: itemWidth }}>
          <Icon name="history" size={26} />
          <Text>最近</Text>
        </View>
        <View style={{ width: itemWidth, alignItems: 'center' }}>
          <Icon name="plus-circle" size={38} color="#608cff" />
        </View>
        <View style={{ width: itemWidth, alignItems: 'flex-end' }}>
          <Icon name="folder-open" size={26} color="#608cff" />
          <Text>文件</Text>
        </View>
      </View>
    );
  };

  _renderItem = () => {
    return (
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#fff', marginBottom: 3,
      flexDirection: 'row' }}
      >
        <View>
          <Icon name="book" size={32} color="#608cff" />
        </View>
        <View style={{ justifyContent: 'space-between', marginLeft: 10 }}>
          <Text style={{ fontSize: 18 }}>导入的书籍</Text>
          <Text style={{ marginLeft: 15, color: '#999693' }}>2018-06-26 19:00</Text>
        </View>
      </View>
    );
  };

  render() {
    const itemWidth = (styleDict.windowW - 30) / 3;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#eae6e4', paddingHorizontal: 15,
        justifyContent: 'center', alignItems: 'center', height: 40 }}
        >
          <View style={{ width: itemWidth }}>
            <Icon name="eject" size={28} />
          </View>
          <View style={{ width: itemWidth, justifyContent: 'center' }}>
            <Text>所有个人书籍</Text>
          </View>
          <View style={{ width: itemWidth, alignItems: 'flex-end' }}>
            <Icon name="ellipsis-h" size={28} />
            {/*<Text>选择</Text>*/}
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          {...this.props}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this._renderItem}
        />
        { this._renderButtonGroup() }
      </View>
    );
  }
}
