<template>
  <div class="flex justify-center items-center gap-3">
    <figure>
      <img :src="imgSrc" alt="imagen de exito" class="w-2/4" />
    </figure>
    <div class="flex flex-col justify-center items-center gap-5">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          class="h-9 text-green fill-current"
        >
          <path
            fill-rule="evenodd"
            d="M3 10a7 7 0 0 1 9.307-6.611 1 1 0 0 0 .658-1.889 9 9 0 1 0 5.98 7.501 1 1 0 0 0-1.988.22A7 7 0 1 1 3 10zm14.75-5.338a1 1 0 0 0-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 0 0-1.264 1.55l3.929 3.2a1 1 0 0 0 1.38-.113l7.072-8z"
          />
        </svg>
        <h2 class="font-bold text-blue-dark text-4xl">Gracias por tu compra</h2>
      </div>
      <h3 class="font-semibold text-gray text-xl">tu numero de orden es:</h3>
      <span class="text-gray text-xl">FRZDFSDF</span>
      <div class="flex justify-center items-center gap-3">
        <OutlineButton message="Ver tu orden" />
        <SolidButton message="Continuar comprando" />
      </div>
    </div>
  </div>
</template>
<script>
import successImg from "../../assets/order-succes.webp";
import OutlineButton from "../buttons/OutlineButton.vue";
import SolidButton from "../buttons/SolidButton.vue";
export default {
  name: "OrderConfirmation",
  components: {
    OutlineButton,
    SolidButton,
  },
  data() {
    return {
      imgSrc: successImg,
    };
  },
};
</script>
