import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, FlatList } from 'react-native-gesture-handler';
import capsulitas from "../data/capsulitas";
import CapsuleStock from "./capsuleStock";

export default () => {
  return (
    <FlatList data={capsulitas} style={styles.lista} renderItem={({ item }) => <CapsuleStock item={item} />}/>
  );
}


const styles = StyleSheet.create({
  lista: {
    marginTop: 10
  }
});
