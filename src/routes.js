import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import {useSelector} from "react-redux";

import { TouchableOpacity, StyleSheet } from 'react-native'

import Icon  from 'react-native-vector-icons/MaterialIcons'

import Login from './pages/Login'
//deashbord
import Main from './pages/Main'
//users
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'
import UpdateUser from './pages/UpdateUser'
  //global functions 
  import { getUsers } from './controllers/usersControllers'

//emploees
import Employees from './pages/Employees'
import CreateEmployee from './pages/CreateEmployee'
import UpdateEmployee from './pages/UpdateEmployee'
//clintes
import Clientes from './pages/Clientes'
import CreateCliente from './pages/CreateCliente'
import UpdateCliente from './pages/UpdateCliente'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DashboardStack({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard" 
        component={Main}
        options={{
          headerTitle: 'Dashboard',
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={styleHead.menuButton}>
                  <Icon name="menu" style={styleHead.menuIcon}/>
              </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

function UserStack({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Users" 
        component={Users}
        options={{
          headerTitle: 'Usuários',
          headerShown: false,
          headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()} style={styleHead.menuButton}>
                  <Icon name="menu" style={styleHead.menuIcon}/>
              </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => getUsers(navigation)} style={styleHead.menuButton}>
                <Icon name="refresh" style={styleHead.menuIcon}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="CreateUser" 
        component={CreateUser}
        options={{
          headerTitle: 'Novo usuário',
        }}
      />
      <Stack.Screen 
        name="UpdateUser" 
        component={UpdateUser}
        options={{
          headerTitle: 'Editar usuário',
        }}
      />
    </Stack.Navigator>
  )
}


function MenuApp() {
  
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Usuários" component={UserStack} />
    </Drawer.Navigator>
  )
}


const Navigation = () => {

  const isAuth = useSelector(state => state.auth.userAuth)

  return (
    <NavigationContainer>
      {
        !isAuth &&
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
      }
      {
        isAuth &&
        <Stack.Navigator>
          <Stack.Screen name="App" component={MenuApp} options={{headerShown: false}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  )
}

export default Navigation


/*


const Stack = createStackNavigator({
  Users: {
    screen: Users,
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styleHead.menuButton}>
            <Icon name="menu" style={styleHead.menuIcon}/>
        </TouchableOpacity>
      ),
      title: 'Usuários',
    })
  },
  CreateUser: {
    screen: CreateUser,
    navigationOptions: {
      title: 'Inserir usuário',
    }
  },
})

 
const Drawer = createDrawerNavigator({
  Main: {
    screen: Main.Screen,
    navigationOptions: {
      title: Main.title,
    },
  },
  Users: {
    screen: Stack,
    navigationOptions: {
      title: 'Usuários',
    }
  },
  UpdateUser: {
    screen: UpdateUser.Screen,
    navigationOptions: {
      title: UpdateUser.title,
    }
  },
  Employees: {
    screen: Employees.Screen,
    navigationOptions: {
      title: Employees.title,
    }
  },
  CreateEmployee: {
    screen: CreateEmployee.Screen,
    navigationOptions: {
      title: CreateEmployee.title,
    }
  },
  UpdateEmployee: {
    screen: UpdateEmployee.Screen,
    navigationOptions: {
      title: UpdateEmployee.title,
    }
  },
  Clientes: {
    screen: Clientes.Screen,
    navigationOptions: {
      title: Clientes.title,
    }
  },
  CreateCliente: {
    screen: CreateCliente.Screen,
    navigationOptions: {
      title: CreateCliente.title,
    }
  },
  UpdateCliente: {
    screen: UpdateCliente.Screen,
    navigationOptions: {
      title: UpdateCliente.title,
    }
  },
})

const Auth = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    App: {
      screen: Drawer
    },
    initialRouteName: 'Login'
  },
 

) 

export default createAppContainer(Auth)

*/

const styleHead = StyleSheet.create({

  header:{
    //  width: Dimensions.get('window').width,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd'
      
  },
  headerTextBox: {
    //  width: (Dimensions.get('window').width - 90),
  },
  headerText:{
    textAlign: 'center',
    width: '100%',
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
  },
  menuButton: {
    margin: 10,
    width: 25,
  },
  menuIcon: {
      fontSize: 25,
      color: '#000'
  }

})