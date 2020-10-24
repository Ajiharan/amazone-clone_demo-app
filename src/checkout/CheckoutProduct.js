import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../redux/StateProvider";
const CheckoutProduct = forwardRef(
  ({ id, title, price, image, rating }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = (id) => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id,
      });
    };
    return (
      <div className="checkoutProduct" ref={ref}>
        <img
          src={image}
          alt="checkout image"
          className="checkoutProduct_image"
        />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {[...Array(rating).keys()].map((e) => (
              <p key={e}>⭐️</p>
            ))}
          </div>
          <button onClick={() => removeFromBasket(id)}>
            Remove from basket
          </button>
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
