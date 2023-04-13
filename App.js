import React, { useState } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View, TouchableOpacity, Alert, TextInput } from "react-native";
import SweetAlert from 'react-native-sweet-alert';

const App = () => {

  const [textInputValue, setTextInputValue] = useState("");

  const handleButtonPress = () => {
    if (textInputValue) {
      setWelcomeMessage(`¡Bienvenido, ${textInputValue}!`);
    }
  };
  const [welcomeMessage, setWelcomeMessage] = useState("");

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://1000marcas.net/wp-content/uploads/2022/06/ACME-logo.png" }} style={styles.image}/>
      <Text style={styles.title}>Página de Login!</Text>
      
      <TextInput
        style={styles.input}
        value={textInputValue}
        onChangeText={setTextInputValue}
        placeholder="Escriba su nombre"
      />
      <TextInput
        style={styles.input}
        placeholder="Escriba su contraseña"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={handleButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{welcomeMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2CE0D8",
  },
  title: { fontSize: 30, color: "#fff", margin: 10 },
  image: { height: 200, width: 350, borderRadius: 50 },
  button: {
    backgroundColor: "#10428A",
    padding: 7,
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "80%",
  },
});

export default App;
