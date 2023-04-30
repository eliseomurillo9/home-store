<template>
  <div class="pt-2">
    <div class="flex gap-3 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-8 text-blue-dark fill-current"
      >
        <path
          d="M2 2a1 1 0 0 0 0 2h.472a1 1 0 0 1 .965.737l.416 1.526L6 14.133V16c0 .694.235 1.332.63 1.84A2.5 2.5 0 1 0 10.95 19h3.1a2.5 2.5 0 1 0 4.771-.43A1 1 0 0 0 18 17H9.001a1 1 0 0 1-1-1v-1h10.236a2 2 0 0 0 1.93-1.474l1.635-6A2 2 0 0 0 19.87 5H5.582l-.215-.79A3 3 0 0 0 2.472 2H2Zm14.5 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.736-6H7.764L6.127 7h13.744l-1.635 6ZM8.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
          clip-rule="evenodd"
          fill-rule="”evenodd”"
        />
      </svg>
      <h2 class="text-blue-dark text-3xl font-bold">Carrito</h2>
    </div>
    <div class="h-px bg-gray-light mt-1"></div>

      <ListElement :articles="productsList" class="pt-10"/>

  </div>
</template>

<script>
import product1 from "../../assets/db36afb84a15c111f66d1083522fbe39042389ff.png";
import product2 from "../../assets/71-v6h8hwzL._AC_SX425_.jpg";
import product3 from "../../assets/61DNezja+cL._AC_SX425_.jpg";
import { useStore } from '@nanostores/vue'
import { cartItems } from '../../store/cartStore'
import ListElement from "./ListElement.vue";
export default {
  name: "cartView",
  components: {
    ListElement,
  },
  data() {
    return {
      productsList: [
        {
          id: 2,
          img: product1,
          alt: "Perro y gato sentados",
          title: "Toalla",
          price: "13",
          href: "/id",
        },
        {
          id: 3,
          img: product2,
          alt: "producto 2",
          title: "Nose",
          price: "8",
          href: "/id",
        },
        {
          id: 4,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: "10",
          href: "/id",
        },
        {
          id: 5,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: "10",
          href: "/id",
        },
      ],
    };
  },
 mounted() {
  console.log('CART STATE', Object.values(useStore(cartItems)));
 },
};
</script>
