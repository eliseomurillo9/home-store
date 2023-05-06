<template>
  <div class="px-4">
    <div class="flex gap-3 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="h-8 text-blue-dark fill-current"
      >
        <path
          fill="#0F1729"
          fill-rule="evenodd"
          d="M6.788 3c-.819 0-1.494 0-2.044.046-.571.047-1.096.149-1.588.404A4 4 0 0 0 1.45 5.156c-.255.492-.357 1.017-.404 1.588C1 7.294 1 7.969 1 8.788V15a4.001 4.001 0 0 0 3.14 3.907A3.001 3.001 0 0 0 9.83 19h5.34a3.001 3.001 0 0 0 5.74-.265 3.002 3.002 0 0 0 1.73-3.184l-.14-.922a16 16 0 0 0-2.6-6.616l-.18-.266A4 4 0 0 0 16.414 6H15c-.05 0-.1.002-.15.006a3.379 3.379 0 0 0-.3-.85 4 4 0 0 0-1.706-1.706c-.492-.255-1.017-.357-1.588-.404C10.706 3 10.03 3 9.212 3H6.788ZM15 8.716V17h.17a3.001 3.001 0 0 1 5.398-.552.994.994 0 0 0 .095-.598l-.14-.921a14 14 0 0 0-2.275-5.79l-.181-.266A2 2 0 0 0 16.415 8H15v.716Zm-2 .114c0-.871 0-1.463-.039-1.92-.037-.446-.104-.673-.186-.832a2 2 0 0 0-.853-.853c-.159-.082-.386-.15-.832-.186C10.633 5 10.042 5 9.17 5H6.83c-.871 0-1.463 0-1.92.039-.446.037-.673.104-.832.186a2 2 0 0 0-.853.853c-.082.159-.15.386-.186.831C3 7.367 3 7.96 3 8.83V15a2 2 0 0 0 1.23 1.846 3 3 0 0 1 5.6.154H13V8.83ZM8 18a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm9 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <h2 class="text-blue-dark text-xl md:text-3xl font-bold">
        Informaci&oacute;n de envio
      </h2>
    </div>
    <div class="h-px bg-gray-light mt-1"></div>
    <div class="flex flex-col md:flex-row justify-center gap-10 pt-8">
      <div class="flex flex-col justify-center">
        <label
          for="country"
          class="block mb-! text-sm font-medium text-gray-900 dark:text-white"
          >Pais</label
        >
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          class="mb-3 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-main focus:border-blue-main block w-full p-1.5 cursor-not-allowed"
          value="El Salvador"
          disabled
        />
        <div
          class="flex p-2 text-sm text-gray border border-gray/10 rounded-lg bg-white-dark justify-start items-center mb-6"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-4 h-4 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="text-xs"
              >Actualmente realizamos envios unicamente a El Salvador</span
            >
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-1 text-sm font-medium text-gray-900"
            >Email address</label
          >
          <input
            type="email"
            id="email"
            class="bg-white border border-gray-light/10 drop-shadow text-gray text-sm rounded-lg focus:ring-blue-main/80 focus:border-blue-main/80 block w-full p-1.5"
            placeholder="john.doe@company.com"
            required
            v-model="customerInfo.email"
          />
        </div>
        <div class="flex gap-4 justify-center">
          <div class="mb-6">
            <label
              for="first_name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Nombres</label
            >
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              v-model="customerInfo.firstName"
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-1 text-sm font-medium text-gray dark:text-white"
              >Apellidos</label
            >
            <input
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
              v-model="customerInfo.lastName"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="phone"
            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >Numero de telefono</label
          >
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
            v-model="customerInfo.phoneNumber"
          />
        </div>
        <div class="mb-6">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Direccion</label
          >
          <input
            type="text"
            id="address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
            v-model="customerInfo.address"
          />
        </div>
        <div class="flex gap-4 justify-center mb-6">
          <div>
            <label
              for="state"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Departamento</label
            >
            <input
              type="state"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
              v-model="customerInfo.state"
            />
          </div>
          <div>
            <label
              for="city"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Municipio</label
            >
            <input
              type="city"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              required
              v-model="customerInfo.city"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="neighborhood"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Colonia</label
          >
          <input
            type="text"
            id="neighborhood"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            required
            v-model="customerInfo.neighborhood"
          />
        </div>
        <SolidButton message="Validar mi pedido" class="mx-auto" />
      </div>
      <aside
        class="bg-inherit md:bg-white-dark overscroll-x-none overflow-y-auto md:h-128 rounded-lg flex flex-col items-center gap-4 drop-shadow-xl max-w-full overflow-x-hidden p-4"
      >
        <div class="w-full">
          <h2 class="font-semibold text-lg text-gray">Tu pedido</h2>
          <div class="h-px bg-gray-light mt-1"></div>

          <p class="text-xl pt-1 mt-2">
            Subtotal: <span class="font-bold">${{ cartInvoice }}</span>
          </p>
        </div>
        <ListElement :articles="cartProducts" class="p-0" />
        <SolidButton
          message="Validar mi pedido"
          class="mx-auto pt-3"
          href="/validacion-pago"
        />
      </aside>
    </div>
  </div>
</template>

<script>
import ListElement from "../cart/ListElement.vue";
import SolidButton from "../buttons/SolidButton.vue";
import { useStore } from "@nanostores/vue";
import { cartItems, cartInvoiceTotal } from "../../store/cartStore";
// import { getCardRegions } from '../../api/services/paymentService'
export default {
  name: "OrderForm",
  components: {
    ListElement,
    SolidButton,
  },
  setup() {
    const getCartItems = useStore(cartItems);
    return {
      getCartItems,
    };
  },
  data() {
    return {
      customerInfo: {
        country: "El Salvador",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        state: "",
        city: "",
        neighborhood: "",
      },
    };
  },
  computed: {
    cartProducts() {
      return Object.values(this.getCartItems);
    },
    cartInvoice() {
      return cartInvoiceTotal(this.cartProducts);
    },
  },
};
</script>
