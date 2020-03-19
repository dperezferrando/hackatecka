import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  counter: {
    alignItems: "center",
    marginTop: 10
  },
  title: {
    fontSize: 35
  },
  usedNumber: {
    fontWeight: "bold",
    fontSize: 156,
    color: "#2e78b7"
  }

});

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