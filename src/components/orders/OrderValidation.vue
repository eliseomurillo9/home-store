<template>
  <div class="flex flex-col px-6">
    <div class="flex gap-3 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 1024 1024"
        class="icon h-8 text-blue-dark fill-current"
      >
        <g>
          <path
            d="M959.018 208.158c.23-2.721.34-5.45.34-8.172 0-74.93-60.96-135.89-135.89-135.89-1.54 0-3.036.06-6.522.213l-611.757-.043c-1.768-.085-3.563-.17-5.424-.17-74.812 0-135.67 60.84-135.67 135.712l.188 10.952h-.306l.391 594.972-.162 20.382c0 74.03 60.22 134.25 134.24 134.25 1.668 0 7.007-.239 7.1-.239l608.934.085c2.985.357 6.216.468 9.55.468 35.815 0 69.514-13.954 94.879-39.302 25.373-25.34 39.344-58.987 39.344-94.794l-.145-12.015h.918l-.008-606.41zm-757.655 693.82-2.585-.203c-42.524 0-76.146-34.863-76.537-79.309V332.671H900.79l.46 485.186-.885 2.865c-.535 1.837-.8 3.58-.8 5.17 0 40.382-31.555 73.766-71.852 76.002l-10.816.621v-.527l-615.533-.01zM900.78 274.424H122.3l-.375-65.934.85-2.924c.52-1.82.782-3.63.782-5.247 0-42.236 34.727-76.665 78.179-76.809l.45-.068 618.177.018 2.662.203c42.329 0 76.767 34.439 76.767 76.768 0 1.326.196 2.687.655 4.532l.332.884v68.577z"
          />
          <path
            d="M697.67 471.435c-7.882 0-15.314 3.078-20.918 8.682l-223.43 223.439L346.599 596.84c-5.544-5.603-12.95-8.69-20.842-8.69s-15.323 3.078-20.918 8.665c-5.578 5.518-8.674 12.9-8.7 20.79-.017 7.908 3.07 15.357 8.69 20.994l127.55 127.558c5.57 5.56 13.01 8.622 20.943 8.622 7.925 0 15.364-3.06 20.934-8.63l244.247-244.247c5.578-5.511 8.674-12.883 8.7-20.783.017-7.942-3.079-15.408-8.682-20.986-5.552-5.612-12.958-8.698-20.85-8.698z"
          />
        </g>
      </svg>
      <h2 class="text-blue-dark text-xl md:text-3xl font-bold">
        Validacion de compra
      </h2>
    </div>
    <div class="h-px bg-gray-light mt-1"></div>
    <div
      class="flex gap-10 justify-center bg-white-dark rounded drop-shadow px-5 py-10 m-auto mt-10"
      v-if="orderData"
    >
      <dl class="w-full max-w-xl text-gray divide-y divide-gray-light">
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray md:text-lg">Nombre</dt>
          <dd class="text-lg font-semibold">
            {{
              `${orderData?.mailing_address?.firstName} ${orderData?.mailing_address?.firstName}`
            }}
          </dd>
        </div>
        <div class="flex flex-col pb-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
          <dd class="text-lg font-semibold">{{ orderData?.user_email }}</dd>
        </div>
        <div class="flex flex-col py-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Direccion de envio
          </dt>
          <dd class="text-lg font-semibold">
            {{
              `${orderData?.mailing_address?.addressLine1} ${orderData?.mailing_address?.addressLine2}, ${orderData?.mailing_address?.city} ${orderData?.mailing_address?.zipCode} ${orderData?.mailing_address?.country}`
            }}
          </dd>
        </div>
        <div class="flex flex-col pt-3">
          <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Numero de telefono
          </dt>
          <dd class="text-lg font-semibold">
            {{ orderData?.mailing_address?.mobilePhone }}
          </dd>
        </div>
      </dl>

      <ul class="divide-y divide-gray-200 dark:divide-gray-700 w-full max-w-xl">
        <li
          class="py-3 sm:pb-4"
          v-for="product in orderData?.cart?.products"
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
                {{ product?.name }}
              </p>
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {{ product?.quantity }}
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              ${{ product?.price.toFixed(2) }}
            </div>
          </div>
        </li>
        <div class="flex justify-center gap-2">
          <span class="font-bold text-blue-dark">Total a pagar:</span>
          <span class="font-bold text-gray"
            >${{ orderData.cart.totalPrice.toFixed(2) }}</span
          >
        </div>
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
      :shippingInfotmation="orderData"
      :totalToPay="orderData.cart.totalPrice"
      :orderId="orderId"
      @toggle-payment-modal="(value) => (togglePaymentModal = value)"
    />
  </div>
</template>
<script>
import ListElement from "../cart/ListElement.vue";
import OutlineButton from "../buttons/OutlineButton.vue";
import PaymentModal from "./PaymentModal.vue";
import SolidButton from "../buttons/SolidButton.vue";
import { getOrder } from "../../services/orderService.js";
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
    orderConfirtmation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      togglePaymentModal: false,
      orderId: JSON.parse(localStorage.getItem("order")),
      orderData: undefined,
    };
  },
  async mounted() {
    this.orderData = await getOrder({ orderId: this.orderId });
    if (this.orderConfirtmation) {
      localStorage.removeItem("cart");
      localStorage.removeItem("order");
    }
  },
  methods: {
    goToPayment() {
      this.togglePaymentModal = !this.togglePaymentModal;
    },
  },
};
</script>
