<template>
  <div class="bg-blue-main flex h-6">
    <span class="text-white m-auto text-sm"> {{ headerMessage }}</span>
  </div>
  <div class="bg-white">
    <div class="px-6 py-2 flex justify-between items-center">
      <img
        :src="logoImg"
        alt="logo en forma de casa con el nombre home store"
        class="object-scale-down h-11"
      />
      <div class="flex gap-7 items-center">
        <div class="w-72 h-full">
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
                class="block w-full p-2 text-sm text-gray-900 border-none drop-shadow-md rounded-lg bg-gray-50"
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
        <div
          class="flex flex-col justify-center items-center text-gray text-sm"
        >
          <span class="font-semibold">Contactanos</span>
          <a :href="`tel: ${phoneNumber}`"> {{ phoneNumber }}</a>
        </div>
        <div class="flex">
          <a
            v-for="(social, index) of socialInformation"
            :key="index"
            :href="social.href"
            ><img :src="social.img" :alt="social.alt" class="h-6" />
          </a>
        </div>
      </div>
    </div>
    <div class="h-px bg-gray-light"></div>
    <div class="flex justify-between py-1.5 px-6">
      <div class="flex gap-6">
        <a
          v-for="(category, index) of categories"
          href=""
          class="font-semibold text-gray hover:text-blue-main transition ease-in-out text-sm"
        >
          {{ category.name }}</a
        >
      </div>
      <div class="flex gap-4 justify-center items-center">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 text-gray hover:text-blue-500 fill-current transition ease-in-out text-sm"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.563 18H3.438c-.706 0-1.228-.697-.961-1.338C3.713 13.698 6.617 12 10 12c3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338M5.917 6c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4S12.252 10 10 10c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028C7.023-.381 3.875 2.449 3.875 6c0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963C-.226 18.857.779 20 2.054 20h15.892c1.276 0 2.28-1.143 2.01-2.364"
            />
          </svg>
        </a>
        <a href="/carrito">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 text-gray hover:text-blue-500 fill-current transition ease-in-out text-sm"
          >
            <path
              d="M2 2a1 1 0 0 0 0 2h.472a1 1 0 0 1 .965.737l.416 1.526L6 14.133V16c0 .694.235 1.332.63 1.84A2.5 2.5 0 1 0 10.95 19h3.1a2.5 2.5 0 1 0 4.771-.43A1 1 0 0 0 18 17H9.001a1 1 0 0 1-1-1v-1h10.236a2 2 0 0 0 1.93-1.474l1.635-6A2 2 0 0 0 19.87 5H5.582l-.215-.79A3 3 0 0 0 2.472 2H2Zm14.5 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.736-6H7.764L6.127 7h13.744l-1.635 6ZM8.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
              clip-rule="evenodd"
              fill-rule=”evenodd”
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import logo from "../assets/home-store-black-200.png";
import socialNetworks from "../store/social";
import { useStore } from "@nanostores/vue";
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
    phoneNumber: {
      type: String,
      default: "",
    },
    categories: {
      type: Array,
      default: [],
    },
  },
  computed: {
    socialInformation() {
      return useStore(socialNetworks).value;
    },
  },
};
</script>
