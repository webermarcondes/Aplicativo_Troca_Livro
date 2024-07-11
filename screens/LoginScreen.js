import React, { useState } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [emailErro, setEmailErro] = useState(false);
  const [senha, setSenha] = useState('');
  const [senhaErro, setSenhaErro] = useState(false);
  const [validado, SetValidado] = useState(false);


  const navigation = useNavigation();


  const updateValidado = () => {
    SetValidado(!emailErro && !senhaErro);
  }

  const validateEmail = () => {
    if(!(email.length > 0 && email.includes('@'))) {
      setEmailErro(true);
      
    }
    else {
      setEmailErro(false);
      updateValidado();
  
    }

    

  }


  const validateSenha = () => {
    if(senha.length === 8) {
      setSenhaErro(false);
      updateValidado();
    }
    else {
      setSenhaErro(true);
    }

    
  }



  const login = () => {

    validateEmail();
    validateSenha();

    if(validado) {
      setEmail('');
      setSenha('');
      SetValidado(false);
      setSenhaErro(false);
      setEmailErro(false);

      navigation.navigate('MenuScreen')
    }
    
  }


 
  return (

    <View style={styles.container}>
      <Title style={styles.title}>TELA DE LOGIN</Title>
      <TextInput
        label="E-MAIL"
        mode="outlined"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        onBlur={validateEmail}
        keyboardType="email-address"
      />    
      {emailErro && <Text style={styles.errorText}>Por favor, insira um e-mail válido com @.</Text>}

      
      <TextInput
        label="SENHA"
        mode="outlined"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        onBlur={validateSenha}
      />
      {senhaErro && <Text style={styles.errorText}>Por favor, insira uma senha valida com 8 caracteres.</Text>}

      <Button mode='contained' style={styles.button} onPress={login}>
        Fazer Login
      </Button>

      <Button onPress={() => alert('chama o ADM no zap')}>
         Esqueci a Senha
      </Button>
      <Button onPress={() => navigation.navigate('UserRegister')}>
        Criar nova conta
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 15,
  },
  button: {  
    width: '90%',
  },

  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  }
});





export default LoginScreen;
