import axios from 'axios';


const API_URL = 'https://backend-url.com/api'; //   URL бэкенда

// Получение пользователя
export const getUser = async (userId: number) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data;
};

// Получение списка питомцев
export const getPets = async () => {
  const response = await axios.get(`${API_URL}/pets`);
  return response.data;
};

// Получение списка услуг
export const getServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

// Получение категорий услуг
export const getServiceCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

// Получение категорий Контактов
export const getContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data;
};
