import React, {Component} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles/FirstStyles'

export default class FirstScreen extends Component {

  render() {
    return (
      <View style={styles.main}>
        <Text>Hola perro</Text>
        <Text>Hola perro</Text>
        <Text>Hola perro</Text>
        <TouchableHighlight
          onPress={
          () => this.props.navigation.navigate("SecondScreen")
          }>
          <Text>A la otra pantalla</Text>
        </TouchableHighlight>
      </View>;)
  }

}
