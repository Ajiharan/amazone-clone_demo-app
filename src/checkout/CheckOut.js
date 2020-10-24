import React, { useEffect } from "react";
import "./CheckOut.css";
import { useStateValue } from "../redux/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
const CheckOut = () => {
  const [{ basket }] = useStateValue();

  useEffect(() => {
    console.log("basket", basket);
    return () => {
      console.log("componnet did unmount");
    };
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/corporate/AmazonCash/2020/Promo/20_5/GC_Landing_Page_US_EN_1024x180_20200228._CB420751660_.jpg"
          alt="banner"
          className="checkout__add"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty..</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              books, CDs, DVDs, toys, electronics, and more.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            <FlipMove
              staggerDurationBy="28"
              duration={400}
              enterAnimation="accordionVertical"
              leaveAnimation="accordionVertical"
            >
              {basket.map((item, i) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default CheckOut;
