// A reducer is a function that updates state by returning a new state object and never alters the original state object.
import { reducer } from '../utils/reducers';

// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
};

// with this test, we look to create a new state object to hold all of our state, so we can compare the original to the updated state objects.
test('UPDATE_PRODUCTS', () => {
  // reducer accepting two following two parts as an object:
  // type: This is the type of action we're performing, and should be one of the predefined actions we created earlier
  // value: This is won't always have the name value, but it is a name representative of the new data we want to use with the action
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

/**
 * Category Tests and Reducers
 */

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

/**
 * Update current category Test and Reducers
 */

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2',
  });

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});

// original state
const state = {
  name: 'Lernantino',
  email: 'lernantino@gmail.com',
};

// update (or mutate) state directly
// state.email = 'lernantino99@gmail.com';

// create a new version of state by making a copy of the original state's data and updating only the part that has changed
const updateState = { ...state, email: 'lernantino99@gmail.com' };
