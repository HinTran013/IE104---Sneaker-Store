import Axios from 'axios';

const API_URL = 'http://localhost:3001/cart';

export const getCurrent = async (customerID) => {
     const res = await Axios.get(API_URL + '/getcurrent', {
          params: {
               customerID: customerID
          }
     });
     return res.data;
};

export const createCart = async (customerID) => {
     await Axios.post(API_URL + '/createcart', { customerID: customerID })
     .then(res => {
          console.log(res.data)
     }).catch(err => {
          console.log(err)
     });
};

export const addToCart = async (
     customerID,
     id,
     name,
     brand,
     price,
     size,
     color
) => {
     await Axios.post(API_URL + '/addtocart', {
          customerID: customerID, 
          id: id,
          name: name,
          brand: brand,
          price: price,
          size: size,
          color: color 
     })
     .then(res => {
          console.log(res.data)
     }).catch(err => {
          console.log(err)
     });
};