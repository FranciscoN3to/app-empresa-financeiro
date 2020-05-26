import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

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

 
const Drawer = createDrawerNavigator({
  Main: {
    screen: Main.Screen,
    navigationOptions: {
      title: Main.title,
    },
  },
  Users: {
    screen: Users,
    navigationOptions: {
      title: 'Usuários',
    }
  },
  CreateUser: {
    screen: CreateUser.Screen,
    navigationOptions: {
      title: CreateUser.title,
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