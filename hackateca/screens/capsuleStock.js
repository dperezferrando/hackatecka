import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  stock: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    margin: 3,
    justifyContent: "space-between"

  },
  nombre: {
    margin: 5,
    fontSize: 20
  },
  cantidad: {
    margin: 5,
    fontSize: 20,
    color: "#2e78b7",
    fontWeight: "bold"
  },
  container: {
    flexDirection: "row"
  },
  button: {
    margin: 5,
    backgroundColor: "#2e78b7",
    width: 20,
    alignItems: "center",
    color: "white",
    borderRadius: 3,
    textAlignVertical: "center"
  }

});

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