import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});
export const getUsers = () => {
    
    return api.get('/users');
};

export const createUser = (data) => {
    console.log(data)
    return api.post('/users', data);
};

export const updateUser = (id, data) => {
    return api.put(`/users/${id}`, data);
};

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};
