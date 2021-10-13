import ShowCriteria from './screens/ShowCriteria'
import CompareCriterias from './screens/CompareCriterias'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const screens = {
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
}

const config = {
  headerMode: 'none',
  initialRouteName: 'Screen1'
}

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);
