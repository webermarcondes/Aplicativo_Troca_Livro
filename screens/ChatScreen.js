import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ChatScreen = ({ route }) => {
  const { bookName } = route.params;  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: `Olá! Gostaria de saber mais sobre o livro "${bookName}".`, user: 'other' }
  ]);

  const handleSend = () => {
    setMessages([...messages, { id: messages.length + 1, text: message, user: 'me' }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TELA DE CHAT DE COMPRA OU TROCA DO LIVRO</Text>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.message,
              msg.user === 'me' ? styles.myMessage : styles.otherMessage
            ]}
          >
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D4A0FF',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  myMessage: {
    backgroundColor: '#E0BBE4',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#D3E0FF',
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
