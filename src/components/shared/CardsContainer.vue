<template>
  <div v-for="item in productsList" :key="item.id">
    <Card :product="item" :isAddedToCart="Object.values(getCartProducts).find((product) => product.id === item.id)"/>
  </div>
</template>

<script>
import Card from "./Card.vue";
import product1 from "../../assets/db36afb84a15c111f66d1083522fbe39042389ff.png";
import product2 from "../../assets/71-v6h8hwzL._AC_SX425_.jpg";
import product3 from "../../assets/61DNezja+cL._AC_SX425_.jpg";
import { useStore } from "@nanostores/vue";
import { cartItems } from "../../store/cartStore";

export default {
  name: "CardsContainer",
  components: { Card },
  setup() {
    const getCartProducts = useStore(cartItems);
    return {
      getCartProducts
    };
  },
  data() {
    return {
      productsList: [
        {
          id: 2,
          img: product1,
          alt: "Perro y gato sentados",
          title: "Toalla",
          price: 0.10,
          href: "/id",
        },
        {
          id: 3,
          img: product2,
          alt: "producto 2",
          title: "Nose",
          price: 8,
          href: "/id",
        },
        {
          id: 4,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: 0.10,
          href: "/id",
        },
        {
          id: 5,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: 0.10,
          href: "/id",
        },
      ],
    };
  },
};
</script>
