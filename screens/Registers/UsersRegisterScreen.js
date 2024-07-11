import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const user = {
  nome: 'João Silva',
  dataDeNascimento: '01/01/1990',
  cpf: '123.456.789-00',
  endereco: 'Rua das Flores, 123, São Paulo, SP'
};

const UsersRegisterScreen = () => {
  const [userData, setUserData] = useState(user);
  return (
    <View style={styles.container}>
      <TextInput
        label="NOME"
        mode="outlined"
        value={userData.nome}
        style={styles.input}
        onChangeText={(text) => setUserData({ ...userData, nome: text })}
      />
      <TextInput
        label="DATA DE NASCIMENTO"
        mode="outlined"
        value={userData.dataDeNascimento}
        style={styles.input}
        onChangeText={(text) => setUserData({ ...userData, dataDeNascimento: text })}
      />
      <TextInput
        label="CPF"
        mode="outlined"
        value={userData.cpf}
        style={styles.input}
        onChangeText={(text) => setUserData({ ...userData, cpf: text })}
      />
      <TextInput
        label="ENDEREÇO"
        mode="outlined"
        value={userData.endereco}
        style={styles.input}
        onChangeText={(text) => setUserData({ ...userData, endereco: text })}
      />
      <Button mode='' style={styles.button}>
        Alterar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    width: '90%',
    paddingVertical: 10,
  },
});

export default UsersRegisterScreen;
