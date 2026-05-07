import axios from 'axios';

const taskApi= axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
});

export const createTask = (taskData) => taskApi.post('/create/tasks', taskData);

export const getAllTasks = () => taskApi.get('/get/tasks');

export const getTaskById = (id) => taskApi.get(`/get/tasks/${id}`);

export const updateTask = (id, updatedData) => taskApi.put(`/update/tasks/${id}`, updatedData);

export const deleteTask = (id) => taskApi.delete(`/delete/tasks/${id}`);    