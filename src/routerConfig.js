import Home from './pages/home';
import Content from './pages/content';

const stackConfig = {
  Home: { screen: Home },
  Content: { screen: Content },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#000000',
    },
    headerStyle: {
      fontWeight: 'bold',
      color: '#000000',
    }
  },
  mode: 'card',
  headerMode: 'none',
};

export {
  stackConfig,
  stackNavigatorConfig,
};
