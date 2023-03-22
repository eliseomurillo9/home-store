import { action } from "nanostores";
import { product } from "./index";
import { getProduct } from '../services/productsService';

const getProducts = action(product, 'getProduct', (store, id) => {
    store.set( getProduct(id));
    return store.get();
})

export default getProducts;