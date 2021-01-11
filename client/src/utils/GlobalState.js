// createContext will be used to instantiate a new Context object.
// we are creating a container to hold our global state data and functionality
// useContext is another React Hook that will allow us to use ethe state created from the createContext function
import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

// with this function StoreProvider, we instantiate our initial global state with the useProductReducer()
const StoreProvider = ({ value = [], ...props }) => {
  // because that wraps it around the useReducer() Hook from react
  // everytime we runs this useProductReducer() function, we receive the following two items in return: state and dispatch
  // state - is the most up-to-date version of our global state object.
  // dispatch - is the method we execute to update our state. It is specifically going to look for an action object passed in as its argument
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  // use this confirm it works
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

// create the coustom function using the useContext() Hook to be used by the components that actually need the data our <StoreProvider>
const useStoreContext = () => {
  return useContext(StoreContext);
};

/**
 * Now we can use our useStoreContext() function
 * to grab the state from <StoreProvider> component and use returning dispatch method to update it
 */

export { StoreProvider, useStoreContext };
