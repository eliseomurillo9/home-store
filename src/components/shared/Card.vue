<template>
  <div class="bg-white shadow-xl rounded-xl w-full max-w-176">
    <figure>
      <img
        :src="product.img"
        alt=""
        class="object-contain h-full max-h-44 rounded"
      />
    </figure>
    <div class="p-4">
      <h2 class="text-xs md:text-base font-semibold text-start text-gray">
        {{ product.title }}
      </h2>
      <div class="flex justify-between mt-5">
        <p class="text-xl font-bold text-blue-main">€{{ product.price }}</p>
        <button
          v-if="
            Object.values(cartProducts).find((item) => item.id === product.id)
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="h-6 w-fit text-green fill-current"
          >
            <path
              d="M-27 316.006c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM-13 316.006c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM-12 294.006c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4 0 2.22-1.779 4-4 4s-4-1.78-4-4c0-2.221 1.779-4 4-4z"
              style="
                color: #;
                fill: #;
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(36 -292)"
            />
            <path
              d="M-9.898 298.012a1 1 0 0 0-.735.218l-2.03 1.657-.655-.612a1 1 0 0 0-1.412.05 1 1 0 0 0 .048 1.411l1.293 1.21a1 1 0 0 0 1.313.042l2.709-2.207a1 1 0 0 0 .142-1.406 1 1 0 0 0-.673-.363z"
              style="
                color: #;
                fill: #;
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(36 -292)"
            />
            <path
              d="M-32.951 294a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.18l2.65 13.242a3.017 3.017 0 0 0-1.83 2.758c0 1.645 1.355 3 3 3h17a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-17c-.571 0-1-.429-1-1s.429-1 1-1h15a1 1 0 0 0 .03-.006h2.97a1 1 0 0 0 .988-.844l.94-5.968a1 1 0 0 0-.832-1.145 1 1 0 0 0-1.145.834l-.807 5.123H-27.13l-1.8-8.994h12.083a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-12.484l-.639-3.195a1 1 0 0 0-.98-.805Z"
              style="
                color: #;
                fill: #;
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(36 -292)"
            />
          </svg>
        </button>
        <button @click="addToCart(product)" v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
            class="h-6 w-fit text-blue-main hover:text-blue-600 fill-current transition ease-in-out text-sm cursor-pointer"
          >
            <path
              d="M261 268.006c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM275 268.006c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM255 246.006a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.18l2.65 13.242a3.017 3.017 0 0 0-1.83 2.758c0 1.645 1.355 3 3 3h17a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-17c-.571 0-1-.429-1-1s.429-1 1-1h15a1 1 0 0 0 .03-.006H278a1 1 0 0 0 .988-.844l.94-5.969a1 1 0 0 0-.832-1.144 1 1 0 0 0-1.145.834l-.806 5.123H260.82l-1.8-8.994h12.084a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-12.485l-.639-3.195a1 1 0 0 0-.98-.805Z"
              style="
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(-252 -244)"
            />
            <path
              d="M276 246.006c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4 0 2.22-1.779 4-4 4s-4-1.78-4-4c0-2.221 1.779-4 4-4z"
              style="
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(-252 -244)"
            />
            <path
              d="M276 249.006a1 1 0 0 0-1 1v1h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-1v-1a1 1 0 0 0-1-1z"
              style="
                fill-rule: evenodd;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 4.1;
                -inkscape-stroke: none;
              "
              transform="translate(-252 -244)"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import OutlineButton from "../buttons/OutlineButton.vue";
import { addCartItem } from "../../store/cartStore";
import { useStore } from "@nanostores/vue";
import { cartItems } from "../../store/cartStore";

export default {
  setup() {
    const cartProducts = useStore(cartItems);
    return {
      cartProducts
    };
  },
  name: "Card",
  components: { OutlineButton },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      addCartItem(this.product);
    },
  },
};
</script>
