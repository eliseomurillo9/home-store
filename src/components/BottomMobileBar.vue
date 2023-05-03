<template>
  <nav class="bg-white flex justify-between p-3 px-11 fixed bottom-0 w-full">
    <a :href="routes.home.path">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        :class="[
          actualPath === routes.home.path ? 'h-6 transition ease-in-out text-blue-600 fill-current border-t2 border-blue-600' : 'h-6 text-gray transition duration-700 ease-in-out fill-current',
        ]"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12.28 3.716a1 1 0 0 0-.56 0c-.052.015-.145.053-.341.202-.207.157-.46.38-.854.731l-5.24 4.657c-.642.571-.824.744-.95.934a2 2 0 0 0-.27.598c-.057.221-.065.472-.065 1.331v5.001c0 .871 0 1.463.039 1.92.037.446.104.673.186.832a2 2 0 0 0 .853.853c.159.082.386.15.831.186C6.367 21 6.96 21 7.83 21H8v-3a4 4 0 0 1 8 0v3h.17c.871 0 1.463 0 1.92-.039.446-.037.673-.104.832-.186a2 2 0 0 0 .853-.853c.082-.159.15-.386.186-.832.038-.457.039-1.049.039-1.92v-5.001c0-.86-.008-1.11-.066-1.331a2 2 0 0 0-.268-.598c-.127-.19-.31-.363-.951-.934l-5.24-4.657c-.394-.35-.647-.574-.854-.73-.197-.15-.289-.188-.341-.203Zm-1.119-1.92a3 3 0 0 1 1.678 0c.38.11.695.305.99.528.276.21.588.487.947.806l5.267 4.682.084.074c.522.463.916.813 1.204 1.247a4 4 0 0 1 .537 1.196c.133.503.132 1.03.132 1.728v5.155c0 .819 0 1.494-.046 2.044-.047.571-.149 1.096-.404 1.588a4 4 0 0 1-1.706 1.706c-.492.255-1.017.357-1.588.404-.55.046-1.226.046-2.044.046h-.431c-.12 0-.265 0-.393-.01a1.505 1.505 0 0 1-.58-.159 1.5 1.5 0 0 1-.64-.64 1.51 1.51 0 0 1-.158-.58c-.01-.127-.01-.271-.01-.393V18a2 2 0 0 0-4 0v3.218c0 .122 0 .266-.01.394-.013.147-.044.359-.159.58a1.5 1.5 0 0 1-.64.64c-.22.114-.432.145-.58.157C8.485 23 8.34 23 8.219 23h-.43c-.819 0-1.494 0-2.044-.046-.571-.047-1.096-.149-1.588-.404a4 4 0 0 1-1.706-1.706c-.255-.492-.357-1.017-.404-1.588C2 18.706 2 18.03 2 17.212v-5.155c0-.698 0-1.225.132-1.728a4 4 0 0 1 .537-1.196c.288-.434.682-.784 1.204-1.247.027-.024.055-.05.084-.074L9.224 3.13c.359-.32.67-.597.948-.806.294-.223.609-.418.99-.528Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
    <a href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        :class="[
          actualPath === routes.contacto.path ? 'h-6 transition duration-700 ease-in-out text-blue-500 stroke-current' : 'h-6 text-gray transition duration-700 ease-in-out stroke-current',
        ]"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m5.6 19.92 1.524-1.219.01-.008c.318-.255.479-.383.658-.474.16-.082.331-.142.508-.178.199-.041.406-.041.822-.041h8.681c1.118 0 1.678 0 2.105-.218a2 2 0 0 0 .874-.874C21 16.48 21 15.92 21 14.804V7.197c0-1.118 0-1.678-.218-2.105a2.001 2.001 0 0 0-.875-.874C19.48 4 18.92 4 17.8 4H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 5.52 3 6.08 3 7.2v11.471c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.377c.35 0 .766-.334 1.599-1Z"
        />
      </svg>
    </a>
    <a :href="routes.carrito.path">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        :class="[
          actualPath === routes.carrito.path ? 'h-6 transition duration-700 ease-in-out text-blue-500 fill-current' : 'h-6 text-gray transition duration-700 ease-in-out fill-current',
        ]"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M2 2a1 1 0 0 0 0 2h.472a1 1 0 0 1 .965.737l.416 1.526L6 14.133V16c0 .694.235 1.332.63 1.84A2.5 2.5 0 1 0 10.95 19h3.1a2.5 2.5 0 1 0 4.771-.43A1 1 0 0 0 18 17H9.001a1 1 0 0 1-1-1v-1h10.236a2 2 0 0 0 1.93-1.474l1.635-6A2 2 0 0 0 19.87 5H5.582l-.215-.79A3 3 0 0 0 2.472 2H2Zm14.5 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm1.736-6H7.764L6.127 7h13.744l-1.635 6ZM8.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" :class="[
          actualPath === routes.home.path ? 'h-5 transition duration-700 ease-in-out text-blue-500 fill-current' : 'h-5 text-gray transition duration-700 ease-in-out fill-current',
        ]" viewBox="0 0 20 20">
        <path
          fill="#3D4849"
          fill-rule="evenodd"
          d="M16.563 18H3.438c-.706 0-1.228-.697-.961-1.338C3.713 13.698 6.617 12 10 12c3.384 0 6.288 1.698 7.524 4.662.267.641-.255 1.338-.961 1.338M5.917 6c0-2.206 1.832-4 4.083-4 2.252 0 4.083 1.794 4.083 4S12.252 10 10 10c-2.251 0-4.083-1.794-4.083-4m14.039 11.636c-.742-3.359-3.064-5.838-6.119-6.963 1.619-1.277 2.563-3.342 2.216-5.603-.402-2.623-2.63-4.722-5.318-5.028C7.023-.381 3.875 2.449 3.875 6c0 1.89.894 3.574 2.289 4.673-3.057 1.125-5.377 3.604-6.12 6.963C-.226 18.857.779 20 2.054 20h15.892c1.276 0 2.28-1.143 2.01-2.364"
        />
      </svg>
    </a>
  </nav>
</template>

<script>
export default {
  name: "BottomMobileBar",
  data() {
    return {
      actualPath: "",
      routes: {
        home: {
          path: "/",
        },
        contacto: {
          path: "/contactanos",
        },
        carrito: {
          path: "/carrito",
        },
        perfil: {
          path: "/perfil",
        },
      },
    };
  },
  mounted() {
    this.actualPath = window.location.pathname;
  },
};
</script>
