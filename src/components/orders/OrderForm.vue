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
    <span class="text-red font-bold">{{ errorMessage }}</span>
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
        <GenericField
          :isRequired="true"
          fieldId="email"
          fieldLabel="e-mail"
          fieldType="email"
          placeholder="john.doe@email.com"
          @field-value="(value) => this.customerInfo.email = value"
        />
        <div class="flex gap-4 justify-center">
          <GenericField
            fieldId="first_name"
            fieldLabel="Nombres"
            :isRequired="true"
            placeholder="Miguel"
            @field-value="(value) => this.customerInfo.firstName = value"
          />
          <GenericField
            fieldId="last_name"
            fieldLabel="Apellidos"
            :isRequired="true"
            placeholder="Delgado"
            @field-value="(value) => this.customerInfo.lastName = value"
          />
        </div>
        <GenericField
          fieldId="phone"
          fieldLabel="Numero de telefono"
          fieldType="number"
          placeholder="2519-3570"
          @field-value="(value) => this.customerInfo.mobilePhone = value"
        />
        <GenericField
          fieldId="addressLine1"
          fieldLabel="Direccion"
          fieldType="text"
          placeholder="Direccion de domicilio"
          :isRequired="true"
          @field-value="(value) => this.customerInfo.addressLine1 = value"
        />
        <div class="flex gap-4 justify-center">
          <GenericField
            fieldId="state"
            fieldLabel="Departamento"
            fieldType="text"
            placeholder="Estado"
            :isRequired="true"
            @field-value="(value) => this.customerInfo.state = value"
          />
          <GenericField
            fieldId="city"
            fieldLabel="Municipio"
            fieldType="text"
            placeholder="Ciudad"
            :isRequired="true"
            @field-value="(value) => this.customerInfo.city = value"
          />
        </div>
        <GenericField
          fieldId="addressLine2"
          fieldLabel="Colonia"
          fieldType="text"
          placeholder="Colonia"
          :isRequired="true"
          @field-value="(value) => this.customerInfo.addressLine2 = value"
        />
        <SolidButton
          message="Validar mi pedido"
          class="mx-auto"
          :event="validateCart"
        />
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
          <SolidButton
            message="Validar mi pedido"
            class="mx-auto pt-3 flex justify-center"
            :event="validateCart"
          />
        </div>
        <ListElement :articles="cartProducts" class="p-0" />
      </aside>
    </div>
  </div>
</template>

<script>
import ListElement from "../cart/ListElement.vue";
import SolidButton from "../buttons/SolidButton.vue";
import { useStore } from "@nanostores/vue";
import { cartItems, cartInvoiceTotal } from "../../store/cartStore";
import { createOrder, getOrder } from "../../services/orderService.js";
import GenericField from "../shared/formsFields/GenericField.vue";
export default {
  name: "OrderForm",
  components: {
    ListElement,
    SolidButton,
    GenericField,
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
        mobilePhone: "",
        addressLine1: "",
        state: "",
        city: "",
        addressLine2: "",
        zipCode: "00000",
      },
      errorMessage: "",
    };
  },
  computed: {
    cartProducts() {
      return Object.values(this.getCartItems);
    },
    cartInvoice() {
      return cartInvoiceTotal(this.cartProducts);
    },
    orderIdFromUrl() {
      return new URL(document.location).searchParams.get("orderId");
    },
  },
  mounted() {
    this.getOrderInfoforEdition();
  },
  methods: {
    async validateCart() {
      try {
        const orderCreator = await createOrder({
          address: this.customerInfo,
          email: this.customerInfo.email,
          cartProducts: this.cartProducts,
        });
        this.errorMessage = "";
        const existingOrders = JSON.parse(localStorage.getItem("order"));
        if (!existingOrders) {
          await localStorage.setItem("order", JSON.stringify(orderCreator._id));
        }

        return window.location.assign("/validacion-pago");
      } catch (error) {
        this.errorMessage =
          "Lo sentimos, no hemos podido validar tu cumpra, intentalo de nuevo.";
      }
    },
    async getOrderInfoforEdition() {
      if (this.orderIdFromUrl) {
        const getCustomerInfo = await getOrder({
          orderId: this.orderIdFromUrl,
        });
        this.customerInfo = {
          ...getCustomerInfo.mailing_address,
          email: getCustomerInfo.user_email,
        };
      }
    },
  },
};
</script>
