import { ModeComment } from "@material-ui/icons";
import React from "react";
import moment from "moment";
import "./Order.css";
import { getBasketTotal } from "../redux/reducer";
import CheckoutProduct from "../checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.order.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.order.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        value={order.order.amount / 100}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <h3 className="order__total">OrderTotal: {value}</h3>
        )}
      />
    </div>
  );
};

export default Order;
