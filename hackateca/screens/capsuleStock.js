import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from "../styles/stocks";

class CapsuleStock extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = { cantidad: this.props.item.cantidad}
  }
  render() {
    const { item } = this.props;
    return <View style={styles.stock}>
      <View style={styles.container}>
        <Text style={styles.nombre}>{item.nombre}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.cantidad}>{this.state.cantidad}</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.increment(1)}> 
          <Text> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.increment(-1)}>
          <Text> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  }

  increment(number) {
    this.setState({ ...this.state, cantidad: this.state.cantidad + number })
  }
}


export default CapsuleStock;