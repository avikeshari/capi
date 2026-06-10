import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6a29c98df59cb8f65f1d9d24.mockapi.io',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export default instance;