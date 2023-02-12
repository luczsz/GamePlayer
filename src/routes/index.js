import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import {} from '@expo/vector-icons';

import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import Agendar from '../pages/Agendar';



export default function Routes(){

    const RoutesApp = createNativeStackNavigator();
    
    return(
        <RoutesApp.Navigator>
            <RoutesApp.Screen
                name='SingIn'
                component={SingIn}
                options={{
                    headerShown: false,
                }}
            />
            <RoutesApp.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <RoutesApp.Screen
                name='Agendar'
                component={Agendar}
            />
        </RoutesApp.Navigator>
    );
}