import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

export const getTasks = async () => {
  const response = await ApiInstance.get('/tasks');
  return response.data;
};

export const createTask = async (task) => {
  const response = await ApiInstance.post('/tasks', task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await ApiInstance.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
    const response = await ApiInstance.delete(`/tasks/${id}`);
    return response.data;
    };

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};