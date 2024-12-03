import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: { 'Content-Type': 'application/json' },
});

export const signIn = async (data: { email: string; password: string }) => {
  const response = await api.post('/login', data);
  return response.data;
};

export const signUp = async (data: { email: string; password: string }) => {
  const response = await api.post('/register', data);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data.data;
};
