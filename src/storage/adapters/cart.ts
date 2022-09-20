import { getProductById } from '../../api/products';
import { storageWrapper } from '../storage';

interface CartItem {
	id: number;
	count: number;
}

const STORAGE_ITEMS_KEY = 'cart_items';

const set = (newValue: CartItem[]) => {
	storageWrapper.set(STORAGE_ITEMS_KEY, newValue);
};

const get = () => {
	return storageWrapper.get<CartItem[]>(STORAGE_ITEMS_KEY);
};

export const getCartItems = () => {
	const cartItemIds = get();
	const cartProducts = [];

	if (!cartItemIds) return null;

	for (const { id, count } of cartItemIds) {
		const candidate = getProductById(id);

		if (candidate) cartProducts.push({ ...candidate, count });
	}

	return cartProducts;
};

export const addCartItem = (productId: number) => {
	const cartItems = get();
	const newItem = { id: productId, count: 0 };

	if (!Array.isArray(cartItems)) return set([newItem]);

	const itemIndex = cartItems.findIndex(({ id }) => id === productId);

	if (itemIndex === -1) return set([...cartItems, newItem]);

	const { id, count } = cartItems[itemIndex];
	cartItems[itemIndex] = { id, count: count + 1 };

	set(cartItems);
};
