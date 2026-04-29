import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, ActivityIndicator, TextInput, Button, Alert, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { MapView, Marker } from "./MapComponent";
import * as Location from "expo-location";
import useLocation from "../hooks/useLocation";

export default function Main() {
  const { coords, errorMsg } = useLocation(); 
  const mapRef = useRef(null);

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleRegister = async () => {
    if (!name || !street || !number || !city || !state) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const fullAddress = `${street}, ${number}, ${city}, ${state}`;
    try {
      const geocodeResult = await Location.geocodeAsync(fullAddress);
      
      if (geocodeResult.length > 0) {
        const { latitude, longitude } = geocodeResult[0];
        
        const newUser = {
          id: Date.now().toString(),
          name,
          fullAddress,
          latitude,
          longitude
        };
        
        setUsers([...users, newUser]);
        
        if (mapRef.current) {
          mapRef.current.animateToRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }, 1000);
        }
        
        setName("");
        setStreet("");
        setNumber("");
        setCity("");
        setState("");
        
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso e adicionado ao mapa!");
      } else {
        Alert.alert("Erro", "Endereço não encontrado!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao buscar endereço. Verifique sua conexão.");
    }
  };

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }
  
  if (!coords) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4734dbff" />
        <Text style={styles.loadingText}>Carregando localização...</Text>
      </View>
    );
  }
  
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.mapContainer}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {users.map((user) => (
            <Marker
              key={user.id}
              coordinate={{ latitude: user.latitude, longitude: user.longitude }}
              title={user.name}
              description={user.fullAddress}
            />
          ))}
        </MapView>
      </View>

      <ScrollView style={styles.formContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <TextInput style={styles.input} placeholder="Nome completo" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Rua" value={street} onChangeText={setStreet} />
        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Número" value={number} onChangeText={setNumber} keyboardType="numeric" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Estado" value={state} onChangeText={setState} />
        </View>
        <TextInput style={styles.input} placeholder="Cidade" value={city} onChangeText={setCity} />
        
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={handleRegister} color="#4734db" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mapContainer: {
    flex: 1, 
  },
  map: {
    flex: 1,
  },
  formContainer: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 8,
    overflow: 'hidden',
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});
