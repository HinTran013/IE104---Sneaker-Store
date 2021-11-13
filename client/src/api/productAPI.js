import Axios from 'axios';

const GET_URL = 'http://localhost:3001/product';

export const getAllProduct = () => {
     return Axios.get(GET_URL).then(res => res.data);
};

export const getOneProduct = (id) => {
     return Axios.get(`http://localhost:3001/product/${id}`).then(res => res.data);
};