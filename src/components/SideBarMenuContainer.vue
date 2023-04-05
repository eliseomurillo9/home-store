<template>
  <Transition name="slide-fade">
  <div class="bg-white right-0 left-0 top-0 bottom-0 fixed z-10">
    <div class="flex flex-col justify-center items-center p-6 gap-11">
      <div class="ml-auto">
        <CloseButton @click="$emit('toggle-menu', false)" />
      </div>
      <div class="w-full">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 text-sm text-gray-900 border-none drop-shadow-md rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-light dark:text-white dark:focus:ring-blue-main dark:focus:border-blue-main"
              placeholder="Buscar"
              required
            />
            <button
              type="submit"
              class="text-gray absolute right-2.5 bottom-2.5 focus:ring-4 font-medium rounded-lg text-sm"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="flex flex-col gap-6 w-full">
        <a
          v-for="(category, index) of categories"
          href=""
          class="font-semibold text-gray hover:text-blue-main transition ease-in-out"
        >
          {{ category.name }}</a
        >
      </div>
      <div class="h-px bg-gray-light"></div>
      <div
        class="flex flex-col justify-center items-center text-gray mt-auto absolute bottom-0 pb-6"
      >
        <span class="font-semibold">Contactanos</span>
        <a :href="`tel: ${phoneNumber}`"> {{ phoneNumber }}</a>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
import CloseButton from "./buttons/CloseButton.vue";
export default {
  name: "SideBarMenuContainer",
  components: {
    CloseButton,
  },
  props: {
    categories: {
      type: Array,
      default: [],
    },
    phoneNumber: {
      type: String,
      default: "0000000",
    },
  },
  methods: {
  },
};
</script>
