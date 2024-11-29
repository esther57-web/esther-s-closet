import eye from '../assets/icons/eye-regular.svg'
import eyeSlash from '../assets/icons/eye-slash-regular.svg'
import { Link } from "react-router-dom"
import { useState } from "react"
import './SignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_ROUTES} from '../utils/constants';

export const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [isPasswordValid, setIsPasswordValid] = useState('');
  let [isEmailValid, setIsEmailValid] = useState('');

  const signUpFunc = async () => {
        try {
            if (isPasswordValid === true && isEmailValid === true) {
                const response = await axios({
                    method: 'POST',
                    url: API_ROUTES.SIGN_UP,
                    data: {
                      email,
                      password,
                    },
                  });
                  console.log(response.data)
                  if (!response?.data) {
                    console.log(`Quelque chose s'est mal passé durant la tentative d'inscription :` , response);
                    return;
                  }
                  
                  console.log('Votre compte a bien été créé, vous pouvez vous connecter' );
                  navigate('/login')
            } else {
                console.log("L'email ou le mot de passe n'est pas valide")
            }
            
          } catch (err) {
            console.log(`Une erreur s'est produite:` , err);
          } 
  };
// vérification du mot de passe
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    let [passwordError, setPasswordError] = useState('')
    let [emailError, setEmailError] = useState('')
  
    const handlePassword1Change = (event) => {
      setPassword1(event.target.value);
    };
  
    const handlePassword2Change = (event) => {
      setPassword2(event.target.value);
    };
  
    const verifyPassword = () => {
        if (password1 === "" || password2 === "") {
            setPasswordError("Veuillez remplir les deux champs mots de passe")
        } else if (password1.length < 8 ) {
            setPasswordError("Le mot de passe doit contenir 8 caractères minimum")
        } else if (password1 === password2) {
            setIsPasswordValid(true)
            setPassword(password1)
            setPasswordError("")
        } else {
            setPasswordError('Les mots de passe des deux champs ne sont pas identiques.');
        }

      
    };
    
// vérification de l'email

    const verifyEmail = () => {
        if (email === "") {
            setEmailError("Veuillez remplir ce champ")
            setIsEmailValid(false)
        } else if (email.includes("@") && email.includes(".") ) {
            setIsEmailValid(true)
            setEmailError("")
        } else {
            setIsEmailValid(false)
            setEmailError("Veuillez utiliser le format email@example.com")
        }
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault()
        verifyEmail();
        verifyPassword();
        signUpFunc();
    };

  return (
    <main>
        <form className='signin-form'>
        <h1>Inscription</h1>
        <label htmlFor="email">
            <p>E-mail :</p>
            <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} autoComplete="username"></input>
            <p className='error'>{emailError}</p>
        </label>
        <label htmlFor="password">
            <p>Mot de passe :</p>
            <div className='password-input'>
                <input id="password" value={password1} onChange={handlePassword1Change} type={isPasswordVisible ? "text" : "password"}/>
                <img onClick={togglePassword} src={isPasswordVisible ? eyeSlash : eye} alt="Toggle Password Visibility"/>
                <p className='error'>{passwordError}</p>
            </div>
        </label>
        <label htmlFor="password">
            <p>Confirmation du mot de passe :</p>
            <div className='password-input'>
                <input id="confirm-password" value={password2} onChange={handlePassword2Change}  type={isPasswordVisible ? "text" : "password"}/>
                <img onClick={togglePassword} src={isPasswordVisible ? eyeSlash : eye} alt="Toggle Password Visibility"/>
                <p className='error'>{passwordError}</p>
            </div>
        </label>
        <button id="submit" onClick={handleSignUp} type="submit">S&apos;inscrire</button>
        <div className='signin-login'>
            <p>Tu as déjà un compte ? </p>
            <Link to="/login">Connecte-toi !</Link>
        </div>
    </form>
    </main>
  )
}
