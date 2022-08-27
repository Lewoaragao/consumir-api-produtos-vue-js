/* eslint-disable */
import axios from 'axios'

export const http = axios.create({
    // baseURL: 'http://localhost:8080/api/'
    baseURL: 'https://api-rest-spring-produtos-lca.herokuapp.com/api/'
})
