import React,{useEffect} from 'react';
import './Product.css';
import Cookie from 'js-cookie';
import {useStateValue} from '../redux/StateProvider';
const Product = ({id,title,price,image,rating}) => {

    const[{basket},dispatch]=useStateValue();

    useEffect(()=>{
        console.log("current",basket);
        Cookie.set("CartItems",JSON.stringify(basket));
    },[basket])

    const addToCart=({id,title,price,image,rating})=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                price,
                image,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>           
                </p>
                <div className="product__rating">
                        {[...Array(rating).keys()].map((x)=>(
                                <p key={x}>⭐️</p>
                        ))}
                </div>
            </div>  
            <img src={image}/>
            <button onClick={()=>addToCart({id,title,price,image,rating})}>Add to basket</button>       
        </div>
    );
};

export default React.memo(Product);