import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import closeIcon from '../assets/icons/xmark-solid.svg'
import PropTypes from 'prop-types';
import { categoriesData } from '../lib/data';

export const CategoryBar = ({ isMobileNavVisible, toggleMobileNav, isSmallScreen }) => {
    return (
        <section onClick={isSmallScreen ? toggleMobileNav : null}  className={`${isSmallScreen ?"xs:absolute xs:top-0 xs:left-0 xs:w-full xs:h-full xs:justify-start xs:bg-black/50" : "flex justify-center"} ${isMobileNavVisible ? "flex" : "hidden"}`}>
            <div className={`${isSmallScreen ? "flex xs:flex-col xs:w-[50%] xs:z-20 xs:h-full xs:justify-start xs:gap-2 xs:absolute xs:bg-white xs:pt-8" : "flex gap-4 mt-4"}`} onClick={(e) => e.stopPropagation()}>
                {isSmallScreen && isMobileNavVisible&& <div>
                    <img className='ml-auto mr-4 cursor-pointer' onClick={toggleMobileNav} src={closeIcon} alt='fermer le menu'></img>
                </div>}
            {categoriesData.map((category, index) => (
                <div className={`flex ${isSmallScreen ? "flex-col" : "flex-row"}`} key={index} >
                    <NavLink to={`/${category.label}`} className='xs:flex xs:justify-center xs:items-center hover:font-bold md:text-sm md:hover:underline md:hover:font-normal lg:uppercase'>{category.label}</NavLink>
                </div>
            ))}
            </div>
            
        </section>
    );
}

CategoryBar.propTypes = {
    isMobileNavVisible: PropTypes.bool.isRequired,
    toggleMobileNav: PropTypes.func.isRequired,
    isSmallScreen: PropTypes.bool.isRequired
};