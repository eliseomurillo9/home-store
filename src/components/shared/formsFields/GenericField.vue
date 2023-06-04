<template>
  <div class="mb-6">
    <label
      v-if="isRequired"
      :for="fieldId"
      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >{{ fieldLabel }}*</label
    >
    <label
    v-else
      :for="fieldId"
      class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >{{ fieldLabel }}</label
    >
    <input
      :type="fieldType"
      :id="fieldId"
      class="bg-white border border-gray-light/10 drop-shadow text-gray text-sm rounded-lg focus:ring-blue-main/80 focus:border-blue-main/80 block w-full p-1.5"
      :placeholder="placeholder"
      :class="{
        'border-red': isFieldEmpty
      }"
      required
      @focusout="requiredError()"
      @input="$emit('field-value', fieldValue)"
      v-model="fieldValue"
    />
    <span class="text-red text-xs transition duration-700 ease-in-out opacity-100" v-if="isFieldEmpty">Este campo es obligatorio</span>
  </div>
</template>
<script>
export default {
  name: 'GenericField',
  props: {
    fieldType: {
      type: String,
      default: 'text',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    disableField: {
      type: Boolean,
      default: false,
    },
    fieldId: {
      type: String,
      required: true,
    },
    fieldLabel: {
      type: String,
    },
    placeholder: {
      type: String,
      default: ''
    },
    regexValidator:  {
      type: String,
    }
  },
  data() {
    return {
      fieldValue: '',
      isFieldEmpty: false
    }
  },
  methods: {
    requiredError() {
      this.isFieldEmpty = false;
      if (this.isRequired && this.fieldValue === '') {
        this.isFieldEmpty = true;
      }
    }
  },
};
</script>
