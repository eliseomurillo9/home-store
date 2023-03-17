import getData from './apiService';

const getProducts = async () => {
   const data = await getData('products');
   const response = await data.json();

   return response
}

export default getProducts;