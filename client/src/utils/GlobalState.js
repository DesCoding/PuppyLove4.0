import React, { createContext, useReducer, useContext } from "react";
import { SET_USERNAME, IS_LOGGED_IN, INCREMENT } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case IS_LOGGED_IN:
      return { ...state, isLoggedin: action.payload };
    case INCREMENT:
      return { ...state, getMatchCount: state.getMatchCount + 1 };
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    isLoggedin: false,
    getMatchCount: 0,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
