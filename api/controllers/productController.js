import productService from '../services/productsService.js';

const getProducts = async (req, res) => {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts);
};

const getProduct = async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  return res.status(200).json(product);
};

const postProduct = async (req, res, next) => {
  try {
    const productData = {
      ...req.body
    }
      const productCreation= await productService.postProduct(productData);
      return res.status(200).json(productCreation);
  } catch (error) {
    return res.send('Images es requerida para la creacion de producto');
  }
};

export default { getProducts, getProduct, postProduct};