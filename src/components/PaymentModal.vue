<template>
  <div
    class="top-0 left-0 w-full h-full bg-black/25 z-25 m-auto fixed flex justify-center items-center"
  >
    <div class="bg-white-dark p-28 rounded-md drop-shadow-xl">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-6 text-blue-dark stroke-current"
        >
          <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <rect width="18" height="13" x="3" y="6" rx="2" />
            <path d="M3 10h17.5M7 15h2" />
          </g>
        </svg>
        <h2 class="text-blue-dark text-xl md:text-3xl font-bold">Pago</h2>
      </div>
      <div class="h-px bg-gray-light mt-1"></div>   
      <div class="m-auto">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-gray bg-[#FFFFF] hover:bg-white  font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center border border-gray/25"
          type="button"
        >
          El Salvador
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-6">
          <label
            for="Name-in-cart"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nombre en la tarjeta</label
          >
          <input
            type="text"
            id="name-in-cart"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="card-number"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Numero de tarjeta</label
          >
          <input
            type="text"
            id="card-number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div class="flex gap-4 justify-center mb-6">
          <div>
            <label
              for="expiratio-date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Fecha de expiracion</label
            >
            <input
              type="text"
              id="expiratio-date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
          <div>
            <label
              for="cvv"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >CVV</label
            >
            <input
              type="cvv"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
            />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PaymentModal",
};
</script>
