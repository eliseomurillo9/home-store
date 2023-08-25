<template>
  <div
    class="top-0 left-0 w-full h-full bg-black/25 z-50 m-auto fixed flex justify-center items-center p-3 drop-shadow-sm"
  >
    <div
      class="bg-[#FBFBFB] p-14 rounded-md drop-shadow-xl m-auto max-w-full max-h-full overflow-x-auto relative"
    >
      <button
        class="absolute right-10 top-7"
        @click="$emit('toggle-payment-modal', false)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#3D4849"
          class="h-7"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
          />
        </svg>
      </button>
      <Loader v-if="isLoading" />
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
        <GenericField
          :isRequired="true"
          fieldId="addressLine1"
          fieldLabel="Direccion"
          fieldType="text"
          placeholder="Calle Loma linda, pol-4"
          @field-value="(value) => (this.billingInfo.addressLine1 = value)"
        />
        <div class="flex justify-center gap-3 w-full">
          <GenericField
            :isRequired="true"
            fieldId="city"
            fieldLabel="Ciudad"
            fieldType="city"
            placeholder="San Salvador"
            @field-value="(value) => (this.billingInfo.city = value)"
            class="w-3/4"
          />
          <GenericField
            :isRequired="true"
            fieldId="zip-code"
            fieldLabel="Codigo postal"
            fieldType="number"
            placeholder="59170"
            @field-value="(value) => (this.billingInfo.zipCode = value)"
            class="w-1/4"
          />
        </div>
        <div class="flex gap-4 justify-center">
          <DropdownField
            :isRequired="true"
            fieldId="country"
            fieldLabel="Pais"
            fieldType="text"
            placeholder="Selecciona el pais"
            class="w-2/4"
            :fieldOption="regionFieldValues"
            @field-value="(value) => (this.billingInfo.country = value)"
          />
          <!-- <div class="flex flex-col mb-6 w-full">
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
          </div> -->
        </div>
      </div>
      <div class="flex justify-center gap-3 w-full">
        <GenericField
          :isRequired="true"
          fieldId="name"
          fieldLabel="Nombres"
          fieldType="text"
          placeholder="Miguel"
          @field-value="(value) => (this.billingInfo.firstName = value)"
          class="w-2/4"
        />
        <GenericField
          :isRequired="true"
          fieldId="lastName"
          fieldLabel="Apellido"
          fieldType="text"
          placeholder="Rogriguez"
          @field-value="(value) => (this.billingInfo.lastName = value)"
          class="w-2/4"
        />
      </div>
      <div class="mb-6">
        <GenericField
          :isRequired="true"
          fieldId="phone-number"
          fieldLabel="Numero de telefono"
          fieldType="tel"
          placeholder="2519-3570"
          @field-value="(value) => (this.billingInfo.mobilePhone = value)"
          class="w-2/4 mx-auto"
        />
      </div>
      <PaymentCardField />
      <div class="flex gap-4 justify-center mb-6">
        <GenericField
          :isRequired="true"
          fieldId="month-expiration-date"
          fieldType="number"
          regexValidator="[0-9]*"
          placeholder="MM"
          @field-value="
            (value) => (this.billingInfo.expiratioDate.month = value)
          "
          class="w-11"
        />
        <GenericField
          :isRequired="true"
          fieldId="year-expiration-date"
          fieldType="number"
          regexValidator="[0-9]*"
          placeholder="AA"
          @field-value="
            (value) => (this.billingInfo.expiratioDate.year = value)
          "
          class="w-11"
        />
        <GenericField
          :isRequired="true"
          fieldId="credit-card-cvv"
          fieldType="credit-card-cvv"
          fieldLabel="CVV"
          placeholder="CVV"
          @field-value="(value) => (this.billingInfo.expiratioDate.cvv = value)"
          class="w-14"
        />
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
import SolidButton from "../buttons/SolidButton.vue";
import CloseButton from "../buttons/CloseButton.vue";
import PaymentCardField from "../shared/formsFields/PaymentCardField.vue";
import GenericField from "../shared/formsFields/GenericField.vue";
import DropdownField from "../shared/formsFields/DropdownField.vue";
import { createPayment } from "../../services/paymentService.js";
import Loader from "../shared/Loader.vue";

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
    orderId: {
      type: String,
      required: true,
    },
  },
  components: {
    SolidButton,
    Loader,
    PaymentCardField,
    GenericField,
    DropdownField,
  },
  data() {
    return {
      billingInfo: {
        country: "",
        firstName: "",
        lastName: "",
        mobilePhone: "",
        addressLine1: "",
        state: "",
        city: "",
        addressLine2: "",
        zipCode: "",
        email: this.shippingInfotmation.user_email,
        cardNumber: "",
        expirationDate: {
          month: "",
          year: "",
        },
        charge: Number(this.totalToPay),
        cvv: "",
      },

      useShippingAddress: false,
      isLoading: false,
    };
  },
  methods: {
    async sendOrderPayment() {
      this.isLoading = true;
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
        const payment = await createPayment(paymentAddress, this.orderId);
        if (payment.urlCompletarPago3Ds) {
          window.location.href = payment.urlCompletarPago3Ds;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
