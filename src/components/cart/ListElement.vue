<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(article, i) in articles"
      :key="article.id"
      class="bg-white-dark flex gap-4 p-4 md:pr-14 rounded-xl"
    >
      <figure class="w-28 md:w-32">
        <img :src="article.img" alt="" class=" rounded" />
      </figure>
      <div class="flex flex-col text-lg">
        <h3>{{ article.title }}</h3>
        <span class="text-blue-dark text-lg font-semibold"
          >${{ article.price }}</span
        >
        <span class="text-xs text-green">En Stock</span>
        <div class="flex gap-7 items-center">
          <div class="custom-number-input w-20 md:w-32">
            <div
              class="flex flex-row justify-center item h-5 w-full rounded relative bg-transparent mt-1 border border-gray/10"
            >
              <button
                data-action="decrement"
                class="text-gray-600 bg-[#FBFBFB] hover:bg-gray-light h-full w-20 rounded-l cursor-pointer outline-none flex justify-center items-center"
                @click="deleteItem"
              >
                <span class="font-semibold text-blue-main leading-none">−</span>
              </button>
              <input
                type="number"
                class="outline-none focus:outline-none text-center w-full bg-[#fffff] font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 border-0"
                name="custom-input-number"
                :value="article.quantity"
              />
              <button
                data-action="increment"
                class="text-gray-600 bg-[#FBFBFB] hover:bg-gray-light h-full w-20 rounded-r cursor-pointer outline-none flex justify-center items-center"
                @click="counter++"
              >
                <span class="font-semibold text-blue-main">+</span>
              </button>
            </div>
          </div>
          <OutlineButton message="Eliminar" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>

<script>
import OutlineButton from "../buttons/OutlineButton.vue";

export default {
  name: "ListElement",
  props: {
    articles: {
      type: Object,
      required: true,
    },
  },
  components: {
    OutlineButton,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    deleteItem(i) {
      if (this.counter !== 0) this.counter--;
    },
  },
};
</script>
