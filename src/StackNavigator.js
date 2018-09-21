import {createStackNavigator} from 'react-navigation'

import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'

export const StackNavigator = createStackNavigator({

  FirstScreen: {
    screen: FirstScreen
  },
  SecondScreen: {
    screen: SecondScreen
  }

},

{
  headerMode: "none"
}

)
