<template>
  <div class="bg-blue-main flex h-9">
    <span class="text-white m-auto"> {{ headerMessage }}</span>
  </div>
  <div class="bg-white px-6 py-3">
    <img
      :src="logoImg"
      alt="logo en forma de casa con el nombre home store"
      class="object-scale-down h-12"
    />
    <div>
      <form class="w-96 h-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-2 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-light dark:text-white dark:focus:ring-blue-main dark:focus:border-blue-main"
            placeholder="Search Mockups, Logos..."
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
  </div>
</template>
<script>
import logo from "../assets/home-store-black-200.png";
export default {
  name: "TheFieldsGenerator",
  props: {
    headerMessage: {
      type: String,
      default: "Change me",
    },
    logoImg: {
      type: String,
      default: logo,
    },
  },
};
</script>
