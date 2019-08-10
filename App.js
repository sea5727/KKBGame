import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Screen/HomeScreen'
import AccountScreen from './Screen/AccountScreen'
import GameScreen from './Screen/GameScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Account : {screen : AccountScreen},
  Game : {screen : GameScreen},
}, {
  initialRouteName : 'Home'
});

const App = createAppContainer(MainNavigator);

export default App;