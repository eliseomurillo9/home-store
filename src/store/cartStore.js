import { map, atom } from "nanostores";
import _ from "lodash";

export const cartItems = map({});
export const cartTotalInvoice = atom();

export const getCart = () => {
  if (typeof window !== "undefined") {
    const item = JSON.parse(localStorage.getItem("cart"));
    item?.forEach((product) => {
      cartItems.setKey(product._id, product);
    });
  }
};

export const cartInvoiceTotal = (_cartItems) => {
 return  _.sum(_cartItems.map(product => product.price * product.quantity)).toFixed(2);
}

export function addCartItem(product) {
  const existingEntry = cartItems.get()[product._id];
  const existinCartInStorage = JSON.parse(localStorage.getItem("cart"));
  const findItemStorage = _.findIndex(
    existinCartInStorage,
    (item) => item._id === product._id
  );
  if (existinCartInStorage && existingEntry && findItemStorage.toString()) {
    const updateProduct = {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    };
    cartItems.setKey(product._id, updateProduct);
    existinCartInStorage.splice(findItemStorage, 1, updateProduct);

    localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
  } else {
    const cartCreation = [];

    const addProduct = { ...product, quantity: 1};

    cartCreation.push(addProduct);

    cartItems.setKey(product._id, addProduct);

    if (!existinCartInStorage) {
      localStorage.setItem("cart", JSON.stringify(cartCreation));
    } else { 
      existinCartInStorage.push(addProduct);
      localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
    }
  };
}

export async function removeCartItem(id) {
  const product = await cartItems.get()[id];
  const existinCartInStorage = await JSON.parse(localStorage.getItem("cart"));
  const findItemStorage = _.findIndex(
    existinCartInStorage,
    (item) => item._id === id
  );
  if (product.quantity > 1) {
    const updateProduct = {
      ...product,
      quantity: product.quantity - 1,
    };
    cartItems.setKey(id, updateProduct);

    existinCartInStorage.splice(findItemStorage, 1, updateProduct);

    localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
  } else {
    cartItems.setKey(id, undefined);

    existinCartInStorage.splice(findItemStorage, 1);

    localStorage.setItem("cart", JSON.stringify(existinCartInStorage));
  }
}
