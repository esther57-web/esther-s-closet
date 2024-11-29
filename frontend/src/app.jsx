import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { Home } from './pages/Home';
//import { ShopCategory } from '../../pages/ShopCategory/ShopCategory';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
//import { APP_ROUTES } from '../../utils/constants';
import { useUser } from './lib/customHooks';
import { useState, useEffect } from 'react';
import MyOrders from './pages/User/MyOrders';
import CategoryPage from './pages/CategoryPage';
import Article from './pages/Article';

function App() {
    const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
    return (
        <React.StrictMode>
            <Router>
                <Header user={user}/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/all' element={<CategoryPage />}/>
                    <Route path='/:category' element={<CategoryPage />}/>
                    <Route path='articles/:articleId' element={<Article/>} />
                    <Route path="/login" element={<Login setUser={setUser}/>}/>
                    <Route path="/signIn" element={<SignUp />}/>
                    <Route path='/account/my-orders' element={<MyOrders user={user} setUser={setUser}/>} />
                    
                    
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default App