import axios from 'axios';
import { BASE_URL, CREATE_SALE, DELETE_SALE, GET_ALL_SALES, LOGIN } from '../constant';

// Create an Axios instance
export const api = axios.create({
    baseURL: BASE_URL, // Use the base URL from environment variables
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get token from localStorage
const getToken = () => localStorage.getItem('token');

// Request interceptor to add token to headers
api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Login function
export const login = async (username: string, password: string) => {
    try {
        const response = await api.put(LOGIN, {
            email: username,
            password: password,
        });
        // Assuming the token is returned on login
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

// Get sales list function
export const getSalesList = async (limit: number, skip: number) => {
    try {
        const response = await api.get(GET_ALL_SALES + `?limit=${limit}&skip=${skip}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching sales list:', error);
        throw error;
    }
};


export const deleteSalePerson = async (id:string) => {
    try {
        const response = await api.put(DELETE_SALE + '/' + id);
        return response.data;
    } catch (error) {
        console.error('Error fetching sales list:', error);
        throw error;
    }
};
export const createSalePerson = async (body: any) => {
    try {
        const response = await api.post(CREATE_SALE, body);
        return response.data;
    } catch (error) {
        console.error('Error fetching sales list:', error);
        throw error;
    }
};
