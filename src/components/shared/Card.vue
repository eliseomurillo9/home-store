<template>
  <div class="w-56 max-w-sm bg-white rounded drop-shadow-xl">
    <a :href="product.href">
      <figure class="rounded-2xl">
        <img
          class="p-3 m-auto"
          :src="product.img"
          :alt="product.alt"
        />
      </figure>
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          class="text-base font-semibold tracking-tight text-gray"
        >
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
        <span class="text-xl font-bold text-blue-main dark:text-white mt-3"
          >$599</span
        >
    </div>
  </div>
</template>
<script>
import OutlineButton from "../buttons/OutlineButton.vue";
export default {
  name: "Card",
  components: { OutlineButton },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
