import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./home/Home";
import CheckOut from "./checkout/CheckOut";
import Login from "./user/Login";
import { useStateValue } from "./redux/StateProvider";
import { auth } from "./firebase/Firebase";
import PageNotFound from "./pageNotFound/PageNotFound";
import Payment from "./payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./orders/Orders";
function App() {
  const [{ user }, dispatch] = useStateValue();
  const stripePromise = loadStripe(
    "pk_test_51HfqyyJ0jZ1ztGKc11B76bCMUdcaK690bAzPOLL0Qgt4UQ0hPoGJtxKYCQ72uwMQoD26c9slzDTmBISm9iezBf7J000sjAbuju"
  );
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("AuthUser", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log("User is", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route exat>
            <Header />
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
