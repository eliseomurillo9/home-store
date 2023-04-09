import productService from '../services/productsService.js';
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname('');

const getProducts = async (req, res) => {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts) // en controllers
};

const getProduct = async (req, res) => {
  const product = await productService.getProduct(req.params.id);
  return res.status(200).json(product);
};

const postProduct = async (req, res, next) => {
  try {
    const productData = {
      ...req.body,
      img:`http://localhost:5000/uploads/${req.file.filename}`,
    }
      const productCreation= await productService.postProduct(productData);
      return res.status(200).json(productCreation);
  } catch (error) {
    return res.send('Images es requerida para la creacion de producto')
  }
};

export default { getProducts, getProduct, postProduct};