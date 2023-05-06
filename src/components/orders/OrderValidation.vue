<template>
  <div class="flex flex-col">
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
        Validacion de compra
      </h2>
    </div>
    <div class="text-white-dark"></div>
    <div
      class="flex gap-10 justify-center bg-white-dark rounded drop-shadow p-5 m-auto"
    >
      <dl class="w-full max-w-xl text-gray divide-y divide-gray-light">
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray md:text-lg">Nombre</dt>
          <dd class="text-lg font-semibold">Eliseo Murillo</dd>
        </div>
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray md:text-lg">Email</dt>
          <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
        </div>
        <div class="flex flex-col py-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Direccion de envio
          </dt>
          <dd class="text-lg font-semibold">
            92 Miles Drive, Newark, NJ 07103, California, USA
          </dd>
        </div>
        <div class="flex flex-col pt-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Numero de telefono
          </dt>
          <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
        </div>
      </dl>

      <ul class="divide-y divide-gray-200 dark:divide-gray-700 w-full max-w-xl">
        <li
          class="py-3 sm:pb-4"
          v-for="product in productsList"
          :key="product.id"
        >
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-28 h-28 rounded"
                :src="product.img"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {{ product.name }}
              </p>
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                4
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              ${{ product.price.toFixed(2) }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-center pt-4 flex justify-center items-center gap-6">
      <SolidButton message="Proceder al pago" :event="goToPayment" />
      <OutlineButton message="Editar orden" href="/informacion-pago" />
    </div>
    <PaymentModal
      v-if="togglePaymentModal"
      class="m-auto"
      :region-field-values="regionValues"
    />
  </div>
</template>
<script>
import ListElement from "../cart/ListElement.vue";
import OutlineButton from "../buttons/OutlineButton.vue";
import PaymentModal from "../PaymentModal.vue";
import SolidButton from "../buttons/SolidButton.vue";
import product1 from "../../assets/db36afb84a15c111f66d1083522fbe39042389ff.png";
import product2 from "../../assets/71-v6h8hwzL._AC_SX425_.jpg";
import product3 from "../../assets/61DNezja+cL._AC_SX425_.jpg";
export default {
  name: "OrderValidation",
  components: { ListElement, SolidButton, OutlineButton, PaymentModal },
  props: {
    regionValues: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      productsList: [
        {
          id: 2,
          img: product1,
          alt: "Perro y gato sentados",
          title: "Toalla",
          price: 0.1,
          href: "/id",
        },
        {
          id: 3,
          img: product2,
          alt: "producto 2",
          title: "Nose",
          price: 8,
          href: "/id",
        },
        {
          id: 4,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: 0.1,
          href: "/id",
        },
        {
          id: 5,
          img: product3,
          alt: "Producto 3",
          title: "Toalla",
          price: 0.1,
          href: "/id",
        },
      ],
      togglePaymentModal: false,
    };
  },
  methods: {
    goToPayment() {
      this.togglePaymentModal = !this.togglePaymentModal;
    },
  },
};
</script>
