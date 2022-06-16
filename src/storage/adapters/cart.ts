import { getProductById } from '../../api/products';
import type { Product } from '../../mockData/products.d';
import { storageWrapper } from '../storage';

const CART_ITEMS_KEY = 'cart_items';

export const getCartItems = (): Product[] | null => {
	const cartItems: number[] | undefined = storageWrapper.get(CART_ITEMS_KEY);
	if (!cartItems) return null;
	const cartProducts: Product[] = [];
	for (const item of cartItems) {
		const candidate = getProductById(item);
		if (candidate) cartProducts.push(candidate);
	}
	return cartProducts;
};

export const addCartItem = (productId: number) => {
	const existingIds = storageWrapper.get(CART_ITEMS_KEY);
	if (Array.isArray(existingIds)) {
		storageWrapper.set(CART_ITEMS_KEY, [...existingIds, productId]);
		return;
	}
	storageWrapper.set(CART_ITEMS_KEY, [productId]);
};
