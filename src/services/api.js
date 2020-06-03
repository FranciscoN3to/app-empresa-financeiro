import axios from 'axios'

export const apiAuth = axios.create({
    baseURL: 'http://192.168.1.5:3000'
})

export const api = axios.create({
    baseURL: 'http://192.168.1.5:3333'
})