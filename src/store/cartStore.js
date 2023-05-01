import { map } from "nanostores";
import _ from 'lodash'


export const getCart = () => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    console.log('RUUUUN');
    const item = JSON.parse(localStorage.getItem('key'));
    item?.forEach(product => {
      console.log(product.id, product);
      cartItems.setKey(product.id, product);
    });
  }
};

export const cartItems = map({});

export async function addCartItem(product) {
  const existingEntry = cartItems.get()[product.id];
  const existinCartInStorage = await  JSON.parse(localStorage.getItem('cart'));
  const findItemStorage = _.findIndex(existinCartInStorage, (item) => item.id === product.id);
console.log('IM CREATED', !existinCartInStorage, !existingEntry, !findItemStorage.toString());
  if (existinCartInStorage && existingEntry && findItemStorage.toString()) {
    console.log('RUUUN');
    const updateProduct = {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
      isAddedToCart: true,
    }
    cartItems.setKey(product.id, updateProduct);

    existinCartInStorage.splice(findItemStorage, 1, updateProduct);

    localStorage.setItem('cart', JSON.stringify(existinCartInStorage))
  } else {
    console.log('RUUUN 2');
    const cartCreation = [];

    const addProduct = { ...product, quantity: 1 };

    cartCreation.push(addProduct);

    cartItems.setKey(product.id, addProduct);

    if (!existinCartInStorage) {
      localStorage.setItem('cart', JSON.stringify(cartCreation));
    } else{
      existinCartInStorage.push(addProduct)
      localStorage.setItem('cart', JSON.stringify(existinCartInStorage));
    }
  }
}

