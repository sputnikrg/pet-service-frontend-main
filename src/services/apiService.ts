// src/services/apiService.ts

import axios from 'axios';
<<<<<<< HEAD


// Получение пользователя
export const getUser = async (userId: number) => {
  const response = await axios.get(`/api/users/${userId}`);
=======
import { 
  API_USERS, 
  API_PETS, 
  API_SERVICES, 
  API_CATIGORIES, 
  API_CONTACTS 
} from '../config';

// Получение пользователя
export const getUser = async (userId: number) => {
  const response = await axios.get(`${API_USERS}/users/${userId}`);
>>>>>>> 253a0005565bc58b42e9068b31903066a004cd10
  return response.data;
};

// Получение списка питомцев
export const getPets = async () => {
<<<<<<< HEAD
  const response = await axios.get(`/api/pets`);
=======
  const response = await axios.get(`${API_PETS}/pets`);
>>>>>>> 253a0005565bc58b42e9068b31903066a004cd10
  return response.data;
};

// Получение списка услуг
export const getServices = async () => {
<<<<<<< HEAD
  const response = await axios.get(`/api/services`);
=======
  const response = await axios.get(`${API_SERVICES}/services`);
>>>>>>> 253a0005565bc58b42e9068b31903066a004cd10
  return response.data;
};

// Получение категорий услуг
export const getServiceCategories = async () => {
<<<<<<< HEAD
  const response = await axios.get(`/api/categories`);
=======
  const response = await axios.get(`${API_CATIGORIES}/categories`);
>>>>>>> 253a0005565bc58b42e9068b31903066a004cd10
  return response.data;
};

// Получение Контактов
export const getContacts = async () => {
<<<<<<< HEAD
  const response = await axios.get(`/api/contacts`);
=======
  const response = await axios.get(`${API_CONTACTS}/contacts`);
>>>>>>> 253a0005565bc58b42e9068b31903066a004cd10
  return response.data;
};
