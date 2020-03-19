import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CapsuleStock extends React.PureComponent {
  render() {
    const { item } = this.props;
    return <Text>{item.nombre} - {item.cantidad}</Text>
  }
}


export default CapsuleStock;