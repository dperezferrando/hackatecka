import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    borderRadius: 3,
  }

});