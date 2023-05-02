import { map } from "nanostores";
import _ from "lodash";

export const getCart = () => {
  if (typeof window !== "undefined") {
    const item = JSON.parse(localStorage.getItem("cart"));
    item?.forEach((product) => {
      cartItems.setKey(product.id, product);
    });
  }
};

export const cartItems = map({});

export async function addCartItem(product) {
  const existingEntry = cartItems.get()[product.id];
  const existinCartInStorage = await JSON.parse(localStorage.getItem("cart"));
  const findItemStorage = _.findIndex(
    existinCartInStorage,
    (item) => item.id === product.id
  );
  if (existinCartInStorage && existingEntry && findItemStorage.toString()) {
    const updateProduct = {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
      isAddedToCart: true,
    };
    cartItems.setKey(product.id, updateProduct);

    existinCartInStorage.splice(findItemStorage, 1, updateProduct);

    localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
  } else {
    const cartCreation = [];

    const addProduct = { ...product, quantity: 1, isAddedToCart: true };

    cartCreation.push(addProduct);

    cartItems.setKey(product.id, addProduct);

    if (!existinCartInStorage) {
      localStorage.setItem("cart", JSON.stringify(cartCreation));
    } else {
      existinCartInStorage.push(addProduct);
      localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
    }
  }
}
