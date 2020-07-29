import React,{useEffect} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Search,ShoppingBasket, FaceRounded}from '@material-ui/icons';
import {useStateValue} from './redux/StateProvider'; 
import { auth } from './firebase/Firebase';

const Header = () => {
    const [{basket,user},dispatch]=useStateValue();
    console.log("Header component");

    const login=()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
       <nav className="header">
           <Link to="/">
             <img src={require("./images/amazon_PNG11.png")} className="header__logo"  alt="logo"/>
           </Link>
           <div className="header__search">
            <input type="text" className="header__searchInput"/>
                <Search className="header_searchIcon"/>
           </div>
           <div className="header__nav">
               <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLine1">Hello {user?.email}</span>
                        <span className="header__optionLine2">{user?'Sign Out':'Sign In'}</span>
                    </div>          
               </Link>
               <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& Orders</span>
                    </div>          
               </Link>
               <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>          
               </Link>
               <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasket/>
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                    </div>
               </Link>
               
           </div>
          
       </nav>
    );
};

export default React.memo(Header);