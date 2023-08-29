<template>
  <Card
    v-for="item in productList"
    :key="item.id"
    :product="item"
    :isAddedToCart="
      Object.values(getCartProducts).find((product) => product._id === item._id)
    "
  />
</template>

<script>
import Card from "./Card.vue";
import { useStore } from "@nanostores/vue";
import { cartItems } from "../../store/cartStore";

export default {
  name: "CardsContainer",
  props: {
    productList: {
      type: Array,
      default: [],
    },
  },
  components: { Card },
  setup() {
    const getCartProducts = useStore(cartItems);
    return {
      getCartProducts,
    };
  },
};
</script>
