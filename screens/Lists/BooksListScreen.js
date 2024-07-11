import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';

const livros = [
  { id: '1', nome: 'A Biblioteca da Meia-Noite', genero: 'Ficção', condicao: 'Novo', transacao: 'Venda', foto: 'https://m.media-amazon.com/images/I/51kAYMwbQIL.SY445_SX342.jpg', descricao: 'Livro A Biblioteca da Meia-Noite' },
  { id: '2', nome: 'Memórias Póstumas de Brás Cubas', genero: 'Romance', condicao: 'Usado', transacao: 'Troca', foto: 'https://m.media-amazon.com/images/I/51-9DsDM4DL.SY445_SX342.jpg', descricao: 'Descrição do Memórias Póstumas' },
  { id: '3', nome: 'O Senhor dos Anéis', genero: 'Fantasia', condicao: 'Novo', transacao: 'Venda', foto: 'https://m.media-amazon.com/images/I/51yxqpcD9iL.SY445_SX342.jpg', descricao: 'Descrição do O Senhor dos Anéis' },
  { id: '4', nome: 'Iracema', genero: 'Romance', condicao: 'Usado', transacao: 'Troca', foto: 'https://m.media-amazon.com/images/I/51-9DsDM4DL.SY445_SX342.jpg', descricao: 'Descrição do Iracema' },
  { id: '5', nome: 'Grande Sertão: Veredas', genero: 'Romance', condicao: 'Novo', transacao: 'Venda', foto: 'https://m.media-amazon.com/images/I/51wdOrz6uNL.SY445_SX342.jpg', descricao: 'Descrição do Grande Sertão' }
];

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState(livros);

  useEffect(() => {
    if (books.length === 0) {
      navigation.replace('BookRegister');
    }
  }, [books]);

  const renderBooks = (books) => {
    return books.map((book) => (
      <TouchableOpacity key={book.id} onPress={() => navigation.navigate('BookRegister', { book })}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={{ uri: book.foto }} style={styles.image} />
            <Text style={styles.title}>{book.nome}</Text>
            <Text style={styles.subtitle}>{book.genero}</Text>
            <Text style={styles.subtitle}>{book.condicao}</Text>
            <Text style={styles.subtitle}>{book.transacao}</Text>
            <Text style={styles.description}>{book.descricao}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderBooks(books)}
      <Button mode="contained" onPress={() => navigation.navigate('BookRegister')} style={styles.button}>
        Adicionar Livro
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    width: '90%',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    width: '90%',
  },
});

export default BookListScreen;
