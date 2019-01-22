/**
 * Created by jkwu on 2018/7/30.
 */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Share, Dimensions, Platform, Alert } from 'react-native';
import Pdf from 'react-native-pdf';
import RNShare from 'react-native-share';
import IconFeather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'flex-start',
    alignItems: 'center', marginTop: 5,
  },
  pdf: {
    flex: 1, width: Dimensions.get('window').width,
  }
});

export default class ViewGraph extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { item } = state.params;
    return {
      title: `${item.name || ''}.pdf`,
      headerRight: (
        <View style={{ marginRight: 15 }}>
          <TouchableOpacity
            onPress={() => {
              if (Platform.OS === 'ios') {
                Share.share({ url: item.path, title: `${item.name || '='}.pdf` })
                  .then((res) => { console.log(res); })
                  .catch((error) => Alert.alert('分享出错', error.message));
              } else {
                const options = {
                  url: `file://${item.path}`,
                  type: 'application/pdf',
                  showAppsToView: true,
                  title: `${item.name || '-'}`
                };
                RNShare.open(options)
                  .then((res) => { console.log(res); })
                  .catch((err) => {
                    err && Alert.alert('分享出错', err.message);
                  });
              }
            }}
          >
            <IconFeather name="share-2" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      ),
    };
  };

  render() {
    const source = require('../../assets/images/code.pdf');
    return (
      <View style={styles.container}>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page) => {
            console.log(`current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}
