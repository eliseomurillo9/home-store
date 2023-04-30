import { map } from 'nanostores';

export const cartItems = map({});

export function addCartItem(product) {
  console.log('working');
    const existingEntry = cartItems.get()[product.id];
    console.log('cld', existingEntry);
    if (existingEntry) {
      cartItems.setKey(product.id, {
        ...existingEntry,
        quantity: existingEntry.quantity + 1,
        isAddedToCart: true
      })
    } else {
      cartItems.setKey(
        product.id,
        { ...product, quantity: 1 }
      );
    };
  };