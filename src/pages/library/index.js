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

const tabs = [
  { sub: '1', title: '圣经' },
  { sub: '2', title: '怀著' },
];
const source = [
  { uri: 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png', width: 38, height: 38 },
  { uri: 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png', width: 76, height: 76 },
  { uri: 'https://zos.alipayobjects.com/rmsportal/QcWDkUhvYIVEcvtosxMF.png', width: 400, height: 400 }
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
          <Bible />
          <Conceived />
        </Tabs>
      </View>
    );
  }
}
