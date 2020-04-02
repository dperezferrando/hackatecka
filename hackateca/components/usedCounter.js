import * as React from 'react';
import { Text, Button, View } from 'react-native';
import styles from "../styles/counter";

class UsedCounter extends React.PureComponent {

  constructor() {
    super()
    this.state = { used: 0 }
  }

  render() {
    return <View style={styles.counter}>
      <Text style={styles.title}>Capsulas usadas</Text>
      <Text style={styles.usedNumber}>{ this.state.used }</Text>
      <Button onPress={() => this.increment()}title="USAR"/>
    </View>
  }

  increment() {
    this.setState({ ...this.state, used: this.state.used + 1 })
  }
}



export default UsedCounter