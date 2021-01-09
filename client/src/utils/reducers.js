import { useReducer } from 'react';

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of 'UPDATE_PRODUCTS', return a new state object with an updated products array
    case UPDATE_PRODUCTS:
      return {
        ...state,
        // if it's that action type, we return a new object with a copy of the state argument using the spread ... operator
        // and then set the products key to a value of a new array with the action.products value spread across it.
        products: [...action.products],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // if it's none of these actions, do not update state at all and keep things the same!
    default:
      return state;
  }
};

// This function will be used to help initialize our global state object
// and then provide us with the functionality for updating that state
// by automatically running it through our custom reducer() function.
export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}

// The useState() Hook is great for managing simpler amounts of state, like form field values and the status of a button being clicked.
// The useReducer() Hook is meant specifically for managing a greater level of state, like we using it right now.
