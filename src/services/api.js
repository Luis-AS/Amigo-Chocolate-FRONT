import axios from 'axios';

const api = axios.create({
    baseURL: 'https://git.heroku.com/amigo-chocolate.git'
});

export default api;