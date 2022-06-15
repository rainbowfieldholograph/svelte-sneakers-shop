import { storageWrapper } from './storage';

export const getCartItems = () => {
  const cartItems = storageWrapper.get('cart_items');
  return cartItems;
};

export const addCartItem = (id: number) => {
  const item = id;
  const items = storageWrapper.get('cart_items');
  storageWrapper.set('cart_items', [12322, 123, 123123]);
};
