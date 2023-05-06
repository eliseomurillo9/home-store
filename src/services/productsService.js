import getData from './apiService';

const getProducts = async () => {
   const data = await getData('/api/products');
   const response = await data.json();

   return response
}

const getProduct = async (id) => {
   const data = await getData(`/api/product/${id}`);
   const response = await data.json();

   return response
}

export { getProducts, getProduct };