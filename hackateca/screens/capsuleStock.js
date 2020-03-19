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
      <Button onPress={() => this.increment(1)} title="+"/>
      <Button onPress={() => this.increment(-1)} title="-"/>
    </View>
  }

  increment(number) {
    this.setState({ ...this.state, cantidad: this.state.cantidad + number })
  }
}


export default CapsuleStock;