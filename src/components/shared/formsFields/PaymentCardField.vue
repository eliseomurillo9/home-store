<template>
  <div class="mb-6">
    <label
      for="card-number"
      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >Numero de tarjeta</label
    >
    <div class="relative">
      <input
        id="card-number"
        type="tel"
        inputmode="numeric"
        autocomplete="cc-number"
        maxlength="19"
        pattern="[0-9\s]{13,15}"
        placeholder="xxxx xxxx xxxx xxxx"
        class="bg-white pl-9 border border-gray-light/10 drop-shadow text-gray text-sm rounded-lg focus:ring-blue-main/80 focus:border-blue-main/80 block w-full p-1.5"
        :class="{
          'border-red': isFieldEmpty,
        }"
        required
        @input="eventsHandle()"
        v-model="fieldValue"
        />
        <CardsBrandsIcon :cardBrand="cardBrand" />
    </div>
    <span
    class="text-red text-xs transition duration-700 ease-in-out opacity-100"
    v-if="isFieldEmpty"
    >Este campo es obligatorio</span
    >
  </div>
</template>
<script>
import CardsBrandsIcon from './CardsBrandsIcon.vue';
export default {
  name: 'PaymentCardField',
  components: {CardsBrandsIcon},
  data() {
    return {
      fieldValue: '',
      isFieldEmpty: false,
      cardBrand: '',
      cardsBrands: [
        {
            regex: new RegExp(/^3\d{12,15}$/),
            name: 'american express'
        },
        {
            regex: new RegExp(/^4\d{12,15}$/),
            name: 'visa'
        },
        {
            regex: new RegExp(/^5\d{12,15}$/),
            name: 'mastercard'
        },
        {
            regex: new RegExp(/^6\d{12,15}$/),
            name: 'discover'
        },
        {
            regex: new RegExp(/\d{12,15}$/),
            name: 'other'
        },
      ]
    };
  },
  methods: {
    eventsHandle() {
      this.isFieldEmpty = false;
      if (this.isRequired && this.fieldValue === "") {
        this.isFieldEmpty = true;
      }
      
      this.cardBrand = this.cardsBrands.find(brand => brand.regex.test(this.fieldValue))?.name || 'other';
      console.log(this.cardBrand);
      this.$emit('field-value', this.fieldValue);
    },
  },
};
</script>
