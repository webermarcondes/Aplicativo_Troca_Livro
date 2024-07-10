import { useNavigation } from "@react-navigation/native"
import { View } from "react-native"
import { Button } from "react-native-paper"

const UserScreen = () => {

    const navigation = useNavigation()
    return (
        <View>
            <Button>
                Teste
            </Button>
        </View>
    )
}

export default UserScreen;