const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/login`,
  PRODUCTS: `${API_URL}/api/products`,
  USER: `${API_URL}/api/auth`,
}

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  ADD_PRODUCT: '/Ajouter',
  SHOP: '/:category',
  PRODUCT: '/produit/:id',
  UPDATE_PRODUCT: 'produit/modifier/:id',
};

