import RNFS from 'react-native-fs';

const filePath = RNFS.DocumentDirectoryPath + '/books.json';

export const getLivros = async () => {
  try {
    const fileExists = await RNFS.exists(filePath);
    if (fileExists) {
      const data = await RNFS.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } else {
      const initialData = [];
      await RNFS.writeFile(filePath, JSON.stringify(initialData), 'utf8');
      return initialData;
    }
  } catch (error) {
    console.error('Erro ao ler os livros:', error);
    throw error;
  }
};

export const saveLivros = async (books) => {
  try {
    await RNFS.writeFile(filePath, JSON.stringify(books), 'utf8');
  } catch (error) {
    console.error('Erro ao salvar os livros:', error);
    throw error;
  }
};
