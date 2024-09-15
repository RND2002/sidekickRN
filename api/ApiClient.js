import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://192.168.72.26:8080/api/v1'
    }
);