import React from 'react';
import { createContext, useReducer } from 'react';

const addItems = (cartItems: any) => {
  ActualStorage(cartItems);
  let itemCount = cartItems.reduce((total: any, product: { quantity: any }) => total + product.quantity, 0);
  let total = cartItems
    .reduce(
      (total: number, product: { price: number; quantity: number }) => total + product.price * product.quantity,
      0
    )
    .toFixed(2);
  return { itemCount, total };
};

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...addItems(storage), payment: false };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'add_item':
        if (!state.cartItems.find((item: { id: any }) => item.id === action.payload.id)) {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
        return {
          ...state,
          ...addItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
      case 'delete_item':
        return {
          ...state,
          ...addItems(state.cartItems.filter((item: { id: any }) => item.id !== action.payload.id)),
          cartItems: [...state.cartItems.filter((item: { id: any }) => item.id !== action.payload.id)],
        };
      case 'add_more_item':
        state.cartItems[state.cartItems.findIndex((item: { id: any }) => item.id === action.payload.id)].quantity++;
        return {
          ...state,
          ...addItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
      case 'substract_an_item':
        state.cartItems[state.cartItems.findIndex((item: { id: any }) => item.id === action.payload.id)].quantity--;
        return {
          ...state,
          ...addItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
      case 'payment':
        return {
          cartItems: [],
          checkout: true,
          ...addItems([]),
        };
      case 'erase_all_data':
        return {
          cartItems: [],
          ...addItems([]),
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

const ActualStorage = (cartItems: string | any[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
};

export { store, StateProvider };
