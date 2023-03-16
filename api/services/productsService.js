import Product from "../models/ProductModel.js";

const getProducts = async () => {
  const allProducts = await Product.find(); // esta en service
  return allProducts;
};

const getProduct = async (productId) => {
  const product = await findById(productId);
  console.log(product);
  return product;
};

const postProduct = async (productInfo) => {
  const product = new Product(productInfo);
  await product.save();

  return productInfo;
};

export default { getProducts, getProduct, postProduct };
