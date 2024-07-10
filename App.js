// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './screens/Lists/BooksListScreen';
import BookRegisterScreen from './screens/Registers/BookRegisterScreen';
import { BookProvider } from './db/BookContexts';
import MenuScreen from './screens/MenuScreen';
import UsersRegisterScreen from './screens/Registers/UsersRegisterScreen'
import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name="BookList" component={BookListScreen}/>
          <Stack.Screen name="BookRegister" component={BookRegisterScreen}/>  
          <Stack.Screen name ="MenuScreen" component={MenuScreen}/>
          <Stack.Screen name = "UserRegister" component={UsersRegisterScreen}/>
          <Stack.Screen name = "LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="UserScreen" component={UserScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
};

export default App;
