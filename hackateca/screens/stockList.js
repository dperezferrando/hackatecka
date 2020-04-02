import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, FlatList } from 'react-native-gesture-handler';
import capsulitas from "../data/capsulitas";
import CapsuleStock from "../components/capsuleStock";

export default ({ capsulitas, increment }) => {
  return (
    <FlatList 
      data={capsulitas}
      style={styles.lista}
      renderItem={({ item }) => <CapsuleStock item={item} increment={increment} />}
      keyExtractor={(item, i) => i.toString()}
    />
  );
}


const styles = StyleSheet.create({
  lista: {
    marginTop: 10
  }
});
