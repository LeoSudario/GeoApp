import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MapView = React.forwardRef(({ children, style }, ref) => {
  
  React.useImperativeHandle(ref, () => ({
    animateToRegion: () => {},
  }));

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>O Mapa não é suportado na versão Web.</Text>
      <Text style={styles.subtext}>Por favor, emule usando um dispositivo ou emulador Android/iOS (opção 'a' ou 'i' no terminal do Expo).</Text>
    </View>
  );
});

export const Marker = () => null;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e4e8',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});
