import { Link } from "react-router-dom";
import heartIcon from "../assets/icons/heart-regular.svg";
import cartIcon from "../assets/icons/bag-shopping-solid.svg";
import userIcon from "../assets/icons/user-regular.svg";
import searchIcon from "../assets/icons/magnifying-glass-solid.svg";
import closeIcon from "../assets/icons/xmark-solid.svg";
import './Header.css'
import { CategoryBar } from "./CategoryBar";
import { useState } from "react";
import { useEffect } from "react";
import menuIcon from "../assets/icons/bars-solid.svg";
import * as PropTypes from 'prop-types';

const Header = ({user = null}) => {
  //responsive searchbar
  let [isMobileSearchBarVisible, setIsMobileSearchBarVisible] = useState()
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileSearchBarVisible(true);
      } else {
        setIsMobileSearchBarVisible(false);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const toggleMobileSearchBar = () => {
      setIsMobileSearchBarVisible(!isMobileSearchBarVisible)
  }
  //responsive category menu
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
    
  const toggleMobileNav = () => {
      setIsMobileNavVisible(!isMobileNavVisible);
  }

    let [isSmallScreen, setIsSmallScreen] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true);
                setIsMobileNavVisible(false)
            } else {
                setIsSmallScreen(false);
                setIsMobileNavVisible(true)
            }          
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isSmallScreen]);

    

  return (
    <header>
      <section className="top-bar">
        <form className={`header-search ${isMobileSearchBarVisible ? "visible" : "none"}`}>
          <label htmlFor="search-bar">
            <img src={closeIcon} className="search-close-btn" onClick={toggleMobileSearchBar} alt="icone fermer"></img>
            <input id="search-bar" type="text" placeholder="rechercher"></input>
            <button type="submit"><img src={searchIcon} alt="icone rechercher"></img></button>
          </label>
        </form>
        <div className="logo-section">
          <img src={menuIcon} onClick={toggleMobileNav} className="menu-btn" alt="dérouler le menu de catégories"></img>
          <Link to="/" className="logo">Esther&apos;s Closet</Link>
        </div>
        
        <div className="links">
          <img src={searchIcon} onClick={toggleMobileSearchBar} className="mobile-search-btn" alt="icone rechercher mobile"></img>
          <Link to="/"><img src={heartIcon} alt="icone favoris"></img></Link>
          <Link to={ user ? "/account/my-orders" :"/login"}><img src={userIcon} alt="icone utilisateur"></img></Link>
          <Link to="/"><img src={cartIcon} alt="icone panier"></img></Link>
        </div>
      </section>
      <CategoryBar isSmallScreen={isSmallScreen} isMobileNavVisible={isMobileNavVisible} toggleMobileNav={toggleMobileNav} />
    </header>
  )
}

export default Header

Header.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
};

