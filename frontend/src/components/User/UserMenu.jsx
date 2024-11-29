import './UserMenu.css'
import { NavLink, useNavigate } from 'react-router-dom';
import * as PropTypes from 'prop-types';

export const UserMenu = ({setUser, userInfo, setUserInfo}) => {
    const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
    setUserInfo(null)
    setUser(null);
    navigate('/');
  };
 
  return (
    <section className='user-menu'>
        <div className='user-menu-title'>
           <h2>Mon Compte</h2>
           <p>{userInfo.email}</p> 
        </div>
        <div className='user-menu-links'>
            <NavLink to="/account/my-orders">Mes achats</NavLink>
            <NavLink to="/account/my-data">Mes données</NavLink>
            <NavLink to="/contact">Nous contacter</NavLink>
        </div>
        <p className='disconnect-btn' onClick={disconnect}>Se déconnecter</p>
    </section>
  )
}

UserMenu.propTypes = {
    setUser: PropTypes.func.isRequired,
    userInfo : PropTypes.object,
    setUserInfo : PropTypes.func
  };