// import { createStore } from 'redux';
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';


// redux provider acts as globalized state, exposing important user data across the entire application

// STORE => ACTION => REDUCER

// ACTION = (Usually) simple operation that returns an object
   //  const action = () => { return { ...state, newState}   }
// 

// REDUCER = Pure functions, often based on a switch, that return a new object combining the previous state with the updated state.
// REDUCER = accepts the current state and an action. It returns a new state based on that action.


// const reduxStore = createStore(useProductReducer)
// const { Provider } = reduxStore

const StoreContext = createContext();
const { Provider } = StoreContext;
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
   return useContext(StoreContext);
 };
 
 export { StoreProvider, useStoreContext };
