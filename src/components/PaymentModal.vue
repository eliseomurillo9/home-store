<template>
  <div
    class="top-0 left-0 w-full h-full bg-black/50 z-50 m-auto fixed flex justify-center items-center p-3"
  >
    <div
      class="bg-white-dark p-14 rounded-md drop-shadow-xl m-auto max-w-full max-h-full overflow-x-auto"
    >
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
      <div class="flex items-center pl-4">
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-dark bg-gray-100 border-gray-500 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          v-model="useShippingAddress"
        />
        <label
          for="bordered-checkbox-1"
          class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Usar la direccion de envio</label
        >
      </div>
      <div v-if="!useShippingAddress">
        <div class="mb-6">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Direccion</label
          >
          <input
            type="text"
            id="address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
            placeholder="Flowbite"
            v-model="billingInfo.address"
            required
          />
        </div>
        <div class="flex justify-center gap-3">
          <div class="mb-6">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Ciudad</label
            >
            <input
              type="text"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-xs p-1.5"
              placeholder="Flowbite"
              v-model="billingInfo.city"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="address"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Codigo postal</label
            >
            <input
              type="number"
              id="address"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-xs p-1.5"
              placeholder="Flowbite"
              v-model="billingInfo.zipcode"
              required
            />
          </div>
        </div>
        <div class="flex gap-4 justify-center">
          <div class="flex flex-col mb-6 w-2/4">
            <label for="country-select">Pais</label>
            <select
              name="country"
              id="country-select"
              v-model="billingInfo.country"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
            >
              <option value="">Selecciona el pais</option>
              <option
                v-for="(country, i) in regionFieldValues"
                :key="country.id"
                :value="country.id"
              >
                {{ country.nombre }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-6 w-2/4">
            <label for="state-select">Departamento</label>
            <select
              name="state"
              id="state-select"
              v-model="billingInfo.state"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
            >
              <option value="">Selecciona el Departamento</option>
              <option
                v-for="(state, i) in regionFieldValues.find(
                  (country) => billingInfo?.country === country.id
                )?.territorios"
                :key="state?.id"
                :value="state?.id"
              >
                {{ state?.nombre }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="mb-6">
          <label
            for="Name-in-cart"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nombre</label
          >
          <input
            type="text"
            id="name-in-cart"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Flowbite"
            v-model="billingInfo.fullName.firstName"
            required
          />
        </div>
        <div class="mb-6">
        <label
          for="Name-in-cart"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          
          >Apellido</label
        >
        <input
          type="text"
          id="name-in-cart"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Flowbite"
          v-model="billingInfo.fullName.lastName"
          required
        />
      </div>
      </div>
      <div class="mb-6">
        <label
          for="phone-number"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Numero de telefono</label
        >
        <input
         type="tel"
          id="phone-number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Flowbite"
          v-model="billingInfo.phoneNumber"
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
          v-model="billingInfo.cardNumber"
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
          <div class="flex gap-3">
            <input
              type="text"
              id="month-date"
              class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              v-model="billingInfo.expirationDate.month"
              required
            />
            <input
              type="text"
              id="year-date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="billingInfo.expirationDate.year"
              placeholder="Flowbite"
              required
            />
          </div>
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
            v-model="billingInfo.cvv"
            placeholder="Flowbite"
            required
          />
        </div>
      </div>
      <SolidButton
        :message="`Pagar ($${totalToPay})`"
        :event="sendOrderPayment"
        class="text-center"
      />
    </div>
  </div>
</template>
<script>
import SolidButton from "./buttons/SolidButton.vue";
import { createPayment } from '../services/paymentService.js';

export default {
  name: "PaymentModal",
  props: {
    regionFieldValues: {
      type: Array,
      default: [],
    },
    totalToPay: {
      type: Number,
      required: true,
    },
    shippingInfotmation: {
      type: Object,
      default: {},
    },
  },
  components: {
    SolidButton,
  },
  data() {
    return {
      billingInfo: {
        address: '',
        country: '',
        state: '',
        city: '',
        zipcode: '',
        phoneNumber: '',
        cardNumber: '',
        fullName: {
          firstName: '',
          lastName: '',
        },
        email: this.shippingInfotmation.email,
        expirationDate: {
          month: '',
          year: '',
        },
        charge: Number(this.totalToPay),
        cvv: '',
      },
      
      useShippingAddress: false,
    };
  },
  methods: {
    async sendOrderPayment() {
      console.log('BILLING', this.totalToPay, typeof this.totalToPay);
      const paymentAddress = this.useShippingAddress
        ? {
            ...this.shippingInfotmation,
            cardNumber: this.billingInfo.cardNumber,
            nameInCard: this.billingInfo.nameInCard,
            expiratioDate: this.billingInfo.expirationDate,
            cvv: this.billingInfo.cvv,
          }
        : this.billingInfo;
      try {
        const payment = await createPayment(JSON.stringify(paymentAddress));
        if (payment.urlCompletarPago3Ds) {
          window.location.href = payment.urlCompletarPago3Ds
        }
      } catch (error) {
        console.log(error);
        
      }
    },
  },
};
</script>
