import React, { useState, useEffect } from "react";
import "./Orders.css";
import { useStateValue } from "../redux/StateProvider";
import { db } from "../firebase/Firebase";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user?.uid) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                order: doc.data(),
              };
            })
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log("orders", orders);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
