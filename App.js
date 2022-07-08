import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FA from './src/screens/FA';

const navigator = createStackNavigator({
  FA: FA
}, {
  InitialRouteName: 'FA',
  defaultNavigationOptions: {
    title: 'FA'
  }
});

export default createAppContainer(navigator);