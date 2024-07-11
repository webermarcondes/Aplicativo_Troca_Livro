import { useNavigation } from '@react-navigation/native';
import UsersRegisterScreen from "./Registers/UsersRegisterScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View} from 'react-native';
import BookRegisterScreen from './Registers/BookRegisterScreen';
import BookListScreen from './Lists/BooksListScreen';
import BooksSoldsScreen from './Lists/BooksSoldsScreen';



const MenuScreen = () => {

    const navigation = useNavigation();

    const Tab = createBottomTabNavigator();
    
    return (
    <Tab.Navigator>
        <Tab.Screen name="Meu usuário"  component={UsersRegisterScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Cadastrar Livro" component={BookRegisterScreen} options={{headerShown: false}}/>
        <Tab.Screen name="meus Livros" component={BookListScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Livros disponiveis" component={BooksSoldsScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
    )
}

export default MenuScreen;