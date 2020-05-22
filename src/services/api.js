import axios from 'axios'

export const apiAuth = axios.create({
    baseURL: 'http://localhost:3000'
})

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})