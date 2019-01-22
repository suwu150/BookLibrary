/**
 * Created by jkwu on 2018/6/22.
 */
import React, { Component } from 'react';
import { Tabs, Carousel } from 'antd-mobile-rn';
import {
  StyleSheet, Image,
  Text,
  View,
} from 'react-native';
import styleDict from '../../constants/styleDict';

import Bible from './bible';
import Conceived from './conceived';
import Libirary from "../home";

const tabs = [
  { sub: '1', title: '圣经' },
  { sub: '2', title: '怀著' },
];
const source = [
  { uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548154663931&di=25efee35594509535ec83a0421af710f&imgtype=0&src=http%3A%2F%2Fpic13.photophoto.cn%2F20091205%2F0017029386319083_b.jpg', width: 38, height: 38 },
  { uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548154663931&di=222b6a32293fead1cdded4df0c6b6079&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0167325778b14c0000012e7e743eaa.jpg%401280w_1l_2o_100sh.jpg', width: 76, height: 76 },
  { uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548154663930&di=fb0632701d03b40d730f5d1771336009&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F15%2F36%2F57%2F03358PICK7i_1024.jpg', width: 400, height: 400 },
  { uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548154663931&di=a5cdeba6a34758f10791109536f52e58&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d250563b2b7132f87512f6c7afc5.jpg%401280w_1l_2o_100sh.jpg', width: 400, height: 400 },
];

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    source.map(item => { this._prefetchSource(item); return null });
  }

  _prefetchSource = (item) => {
    if (item.uri && (item.uri.indexOf('http') > 0 || item.uri.indexOf('https') > 0)) {
      Image.prefetch(item.uri);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Carousel
            className="my-carousel"
            autoplay={true}
            infinite
            selectedIndex={1}
            swipeSpeed={35}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {source.map(item => {
              return (
                <View style={{ height: 150 }}>
                  <Image source={item} style={{ height: 150, width: styleDict.windowW }} />
                </View>
              );
            })}
          </Carousel>
        </View>
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
          <Bible navigation={this.props.navigation} />
          <Conceived navigation={this.props.navigation} />
        </Tabs>
      </View>
    );
  }
}
