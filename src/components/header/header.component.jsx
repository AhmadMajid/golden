import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import BasketIcon from '../basket-icon/basket-icon.component';
import BasketDropdown from '../basket-dropdown/basket-dropdown.component';
import { selectBasketHidden } from '../../redux/basket/basket.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/sneaker.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/returns'>
          RETURNS & CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
         ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
         )}
         <BasketIcon />
      </div>
      { 
        hidden ? null : <BasketDropdown />
      }
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectBasketHidden
  });

  export default connect(mapStateToProps)(Header);