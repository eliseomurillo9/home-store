import Carrousel from "../models/CarrousselModel.js";

const getCarrousel = async () => {
  const images = await Carrousel.find(); // esta en service
  return images;
};

const postImage = async (productInfo) => {
  const createImage = new Carrousel(productInfo);
  await createImage.save();

  return createImage;
};

export default { getCarrousel, postImage };
