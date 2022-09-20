import { products } from '../data/products';

export const getAllProducts = () => {
	return products;
};

export const getProductById = (id: number) => {
	return products.find((product) => product.id === id);
};
