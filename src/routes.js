import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const RootStack = createStackNavigator({
    Main,
    Home: Page1,
    End: Page2,
});

const AppContainer = createAppContainer (RootStack);

export default AppContainer;
