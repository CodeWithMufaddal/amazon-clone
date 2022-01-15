import React from 'react'
import HeaderList from './HeaderList';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

   const [{ basket, user }, dispatch] = useStateValue();
   const handleAuthentication = () => {
      if(user) {
         auth.signOut();
      }
   }


   return (
      <div className="header">
         <Link to="/">
            <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
         </Link>

         <div className="header__search">
            <input type="text"
               className="header__searchInput" placeholder="Search a Product..." />
            <SearchIcon className='header__searchicon' />
         </div>

         <div className="header__nav">

            <Link to={!user && "/login"}>
               <div onClick={handleAuthentication} className="header__option">
                  <span className="header__optionlineone">Hello {user?.email}</span>
                  <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
               </div>
            </Link>


            <div className="header__option">
               <span className="header__optionlineone">Return</span>
               <span className="header__optionlinetwo">&#38;Order</span>
            </div>


            <div className="header__option">
               <span className="header__optionlineone">Your</span>
               <span className="header__optionlinetwo">Prime</span>
            </div>
            <Link to="/Checkout" className="header__Checkout">
               <div class='header__optionbasket'>
                  <ShoppingCartOutlinedIcon className="setcart" />
                  <span className=' header__basketcount'>{basket?.length}</span>
               </div>
            </Link>
         </div>
      </div>
   )
}

export default Header
