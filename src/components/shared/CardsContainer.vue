<template>
  <div v-for="item in productsList" :key="item.id">
    <Card
      :product="item"
      :isAddedToCart="
        Object.values(getCartProducts).find((product) => product.id === item.id)
      "
    />
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
      getCartProducts,
    };
  },
  data() {
    return {
      productsList: [
        {
          _id: "64562988c187554151f6bef8",
          id: 1,
          name: "Set de cubiertos",
          brand: "Home Store",
          price: 0.1,
          category: "64327cf05dc54bb75a225959",
          img: "http://localhost:5000/uploads/image-1683368205431.jpg",
          __v: 0,
        },
        {
          _id: "645629dec187554151f6befa",
          id: 2,
          name: "Toalla",
          brand: "Home Store",
          price: 0.1,
          category: "64327cf05dc54bb75a225959",
          img: "http://localhost:5000/uploads/image-1683368394405.jpg",
          __v: 0,
        },
        {
          _id: "64562a0fc187554151f6befc",
          id: 3,
          name: "Filltro para lavabo",
          brand: "Home Store",
          price: 0.1,
          category: "64327cf05dc54bb75a225959",
          img: "http://localhost:5000/uploads/image-1683368434481.jpg",
          __v: 0,
        },
        {
          _id: "64562a43c187554151f6befe",
          id: 4,
          name: "Cortina",
          brand: "Home Store",
          price: 0.1,
          category: "64327cf05dc54bb75a225959",
          img: "http://localhost:5000/uploads/image-1683368494588.jpg",
          __v: 0,
        },
      ],
    };
  },
};
</script>
