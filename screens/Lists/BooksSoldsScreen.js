import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';

const livros = [
    {
      "id": "1",
      "nome": "O Alquimista",
      "genero": "Aventura",
      "condicao": "Novo",
      "transacao": "Venda",
      "foto": "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX322_BO1,204,203,200_.jpg",
      "descricao": "Um jovem pastor segue seus sonhos para encontrar um tesouro."
    },
    {
      "id": "2",
      "nome": "Dom Casmurro",
      "genero": "Romance",
      "condicao": "Usado",
      "transacao": "Troca",
      "foto": "https://images-na.ssl-images-amazon.com/images/I/51ex2eKnQmL._SX322_BO1,204,203,200_.jpg",
      "descricao": "A história de Bento Santiago e seu amor por Capitu."
    },
    {
      "id": "3",
      "nome": "1984",
      "genero": "Distopia",
      "condicao": "Novo",
      "transacao": "Venda",
      "foto": "https://images-na.ssl-images-amazon.com/images/I/41IX2EZOWeL._SX324_BO1,204,203,200_.jpg",
      "descricao": "Um futuro totalitário onde o governo controla tudo."
    },
    {
      "id": "4",
      "nome": "Vidas Secas",
      "genero": "Drama",
      "condicao": "Usado",
      "transacao": "Troca",
      "foto": "https://images-na.ssl-images-amazon.com/images/I/51TWjG5HSJL._SX322_BO1,204,203,200_.jpg",
      "descricao": "A luta de uma família sertaneja contra a seca."
    },
    {
      "id": "5",
      "nome": "A Revolução dos Bichos",
      "genero": "Satírica",
      "condicao": "Novo",
      "transacao": "Venda",
      "foto": "https://images-na.ssl-images-amazon.com/images/I/41IX2EZOWeL._SX324_BO1,204,203,200_.jpg",
      "descricao": "Uma fábula sobre o poder e a corrupção."
    }
  ]
  
  

const BooksSoldsScreen = ({ navigation }) => {
  const [books, setBooks] = useState(livros);

  useEffect(() => {
    if (books.length === 0) {
      navigation.replace('BookRegister');
    }
  }, [books]);

  const renderBooks = (books) => {
    return books.map((book) => (
      <TouchableOpacity key={book.id}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={{ uri: book.foto }} style={styles.image} />
            <Text style={styles.title}>{book.nome}</Text>
            <Text style={styles.subtitle}>{book.genero}</Text>
            <Text style={styles.subtitle}>{book.condicao}</Text>
            <Text style={styles.subtitle}>{book.transacao}</Text>
            <Text style={styles.description}>{book.descricao}</Text>
            <Button onPress={() => navigation.navigate('ChatScreen',{ bookName: book.nome })}> Quero este livro </Button>
          </Card.Content>

        </Card>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderBooks(books)}
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

export default BooksSoldsScreen;
