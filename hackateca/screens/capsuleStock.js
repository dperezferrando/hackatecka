import * as React from 'react';
import { Button, Text, View } from 'react-native';

class CapsuleStock extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = { cantidad: this.props.item.cantidad}
  }
  render() {
    const { item } = this.props;
    return <View>
      <Text>{item.nombre} - {this.state.cantidad}</Text>
      <Button onPress={() => this.increment()} title="+"/>
      <Button onPress={() => this.decrement()} title="-"/>
    </View>
  }

  increment() {
    this.setState({ ...this.state, cantidad: this.state.cantidad + 1 })
  }

  decrement() {
    this.setState({ ...this.state, cantidad: this.state.cantidad - 1 })
  }
}


export default CapsuleStock;