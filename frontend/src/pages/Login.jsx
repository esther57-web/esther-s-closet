import eye from '../assets/icons/eye-regular.svg'
import eyeSlash from '../assets/icons/eye-slash-regular.svg'
import { Link } from "react-router-dom"
import { useState } from "react"
import './Login.css'
import axios from 'axios';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../utils/constants';
import { useUser } from '../lib/customHooks';
import { storeInLocalStorage } from '../lib/common';

export const Login = ({setUser}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePassword = () => {
      setIsPasswordVisible(!isPasswordVisible)
  }

  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const loginFunc = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.token) {
        console.log(`Une erreur s'est produite lors de la connexion`, response);
      } else {
        storeInLocalStorage(response.data.token, response.data.userId);
        setUser(response.data);
        console.log(`connexion réussie !`)
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      console.log(`Une erreur s'est produite lors de la connexion`, err);
    } 
  };
return (
    <main>
        <form className='login-form'>
      <h1>Connexion</h1>
      <label htmlFor="email">
          <p>E-mail :</p>
          <input id="email" value={email} onChange={(e) => { setEmail(e.target.value); }} type="email" autoComplete="username"></input>
      </label>
      <label htmlFor="password">
          <p>Mot de passe :</p>
          <div className='password-input'>
              <input id="password" value={password} onChange={(e) => { setPassword(e.target.value); }} type={isPasswordVisible ? "text" : "password"}/>
              <img onClick={togglePassword} src={isPasswordVisible ? eyeSlash : eye} alt="Toggle Password Visibility"/>
          </div>
      </label>
      <Link className='forgot-link'>Mot de passe oublié ?</Link>
      <button id="submit" onClick={(e) => {loginFunc(e)}} type="submit">Se connecter</button>
      <div className='login-sign-in'>
          <p>Tu n&apos;as pas de compte ? </p>
          <Link to="/signIn">Inscris-toi !</Link>
      </div>
  </form>
    </main>
)
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired,
  };