import React, {Component} from 'react';
import { View, Text } from 'react-native';

import styles from './styles/FirstStyles'

export default class SecondScreen extends Component {

  render() {
    return (
      <View style={styles.main}>
        <Text>Segunda pantalla!</Text>
        </View>;
    );
  }

}
