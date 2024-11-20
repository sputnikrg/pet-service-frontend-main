// src/services/apiService.ts

import axios from 'axios';
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
  return response.data;
};

// Получение списка питомцев
export const getPets = async () => {
  const response = await axios.get(`${API_PETS}/pets`);
  return response.data;
};

// Получение списка услуг
export const getServices = async () => {
  const response = await axios.get(`${API_SERVICES}/services`);
  return response.data;
};

// Получение категорий услуг
export const getServiceCategories = async () => {
  const response = await axios.get(`${API_CATIGORIES}/categories`);
  return response.data;
};

// Получение Контактов
export const getContacts = async () => {
  const response = await axios.get(`${API_CONTACTS}/contacts`);
  return response.data;
};
