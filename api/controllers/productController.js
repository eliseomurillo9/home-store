import productService from '../services/productsService.js';


const getProducts = async (req, res) => {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts) // en controllers
};

const getProduct = async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  return res.status(200).json(product);
};

const postProduct = async (req, res, err) => {
    const product= await productService.postProduct(req.body);
    return res.status(200).json(product);
};

export default { getProducts, getProduct, postProduct};