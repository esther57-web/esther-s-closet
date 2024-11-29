import axios from 'axios';
import { API_ROUTES } from '../utils/constants';
/*
function formatProducts(productArray) {
  return productArray.map((product) => {
    const newProduct = { ...product };
    // eslint-disable-next-line no-underscore-dangle
    newProduct.id = newProduct._id;
    return newProduct;
  });
}*/

export function storeInLocalStorage(token, userId) {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const userId = getFromLocalStorage('userId');
    
    if (!token) {
      return defaultReturnObject;
    }
  
    return { authenticated: true, user: { userId, token } };
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}

export async function getUser(id) {
  try {
    const response = await axios ({
      method: 'GET',
      url: `${API_ROUTES.USER}/${id}`
    });
    const user = response.data;
    user.id = user._id;
    return user

  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getProducts() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.PRODUCTS}`,
    });
    // eslint-disable-next-line array-callback-return
    //const products = formatProducts(response.data);
    const products = response.data
    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function deleteProduct(id) {
  fetch(`${API_ROUTES.PRODUCTS}/${id}`), {
    method: 'DELETE'
  }
  .then(response => {
    if (response.status === 200) {
        alert("Article supprimé")
        window.location.href = '/'
    } else {
        alert("Erreur : l'article n'a pas pu être supprimé. Veuillez réessayer.");
    } 
})
  
}