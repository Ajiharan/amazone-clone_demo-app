import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../redux/StateProvider";
import { Link, useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { getBasketTotal } from "../redux/reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase/Firebase";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutProduct from "../checkout/CheckoutProduct";
const Payment = () => {
  //   console.log("useStateValue", useStateValue()[1]);
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSuceeded] = useState(false);
  const [processing, setProecssing] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("clientSecret", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProecssing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("paymentIntent", paymentIntent);
        setSuceeded(true);
        setError(null);
        setProecssing(false);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          })
          .then((res) => {
            dispatch({
              type: "EMPTY_BASKET",
            });
          })
          .catch((err) => {
            dispatch({
              type: "EMPTY_BASKET",
            });
            console.log("err", err);
          });
        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    console.log(e);
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          CheckOut(<Link to="/checkout">{basket?.length} Items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>No 554 Jaffna </p>
            <p>Srilanka ,China</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
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
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  renderText={(value) => (
                    <React.Fragment>
                      <h3>
                        Order Total :<strong>{value}</strong>
                      </h3>
                    </React.Fragment>
                  )}
                />
              </div>
              <button
                className="payment__submitButton"
                type="submit"
                disabled={disable || processing || succeeded}
              >
                <p>
                  {processing ? <span>Processing</span> : <span>Buy Now</span>}
                </p>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
