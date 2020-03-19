import * as React from 'react';
import { Text, Button, View } from 'react-native';


class UsedCounter extends React.PureComponent {

  constructor() {
    super()
    this.state = { used: 0 }
  }

  render() {
    return <View>
      <Text>Capsulas usadas: { this.state.used }</Text>
      <Button onPress={() => this.increment()}title="USAR"/>
    </View>
  }

  increment() {
    this.setState({ ...this.state, used: this.state.used + 1 })
  }

}

export default UsedCounter