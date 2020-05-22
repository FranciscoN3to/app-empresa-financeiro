import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/Login'
//deashbord
import Main from './pages/Main'
//users
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
//emploees
import Employees from './pages/Employees'
import CreateEmployee from './pages/CreateEmployee'
import UpdateEmployee from './pages/UpdateEmployee'
//clintes
import Clientes from './pages/Clientes'
import CreateCliente from './pages/CreateCliente'
import UpdateCliente from './pages/UpdateCliente'


const Auth = createSwitchNavigator()

 

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

function Home() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  createSwitchNavigator(
    {
        App,
        Auth: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Auth',
    }
)

 

export default createAppContainer()
 
/**
 *         Login,
        Main,
        Users,
        CreateUser,
        UpdateUser,
        Employees,
        CreateEmployee,
        UpdateEmployee,
        Clientes,
        CreateCliente,
        UpdateCliente
 */