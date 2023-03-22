import { atom } from "nanostores";
import { getProducts } from '../services/productsService'
import { getCategories, getSubCategories } from "../services/categoriesService";

const products = atom(getProducts() || '');
const product = atom('');
const categories = atom(getCategories() || '');
const subCategories = atom(getSubCategories() || '');

export { products, product, categories, subCategories };
