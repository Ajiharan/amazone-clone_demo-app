import Cookie from "js-cookie";

const basketItems = Cookie.getJSON("CartItems") || [];
export const initialState = {
  basket: basketItems,
  user: {},
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((acc, i) => acc + i.price, 0);
};

export const reducer = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      const product = state.basket.find((e) => e.id === action.item.id);

      if (product) {
        return {
          ...state,
          basket: [
            ...state.basket.map((e) => (e.id === product.id ? action.item : e)),
          ],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }

    case "REMOVE_FROM_BASKET":
      let currentState = state.basket.filter((e) => e.id !== action.id);
      Cookie.set("CartItems", JSON.stringify(currentState));
      return { ...state, basket: [...currentState] };

    default:
      return state;
  }
};
