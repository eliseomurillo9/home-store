<template>
  <div class="mb-6">
    <div class="flex flex-col mb-6">
      <label :for="fieldId">{{ fieldLabel }}</label>
      <select
        name="country"
        :id="fieldId"
        @input="$emit('field-value', fieldValue)"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
      >
        <option value=""> {{ placeholder }}</option>
        <option v-for="(field, i) in fieldOption" :key="i" value="" class="roundedd"> {{ field.nombre }}</option>
        
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "DropfownField",
  props: {
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
      default: "",
    },
    fieldOption: {
      type: [],
    },
  },
  data() {
    return {
      fieldValue: "",
      isFieldEmpty: false,
    };
  },
  methods: {
    requiredError() {
      this.isFieldEmpty = false;
      if (this.isRequired && this.fieldValue === "") {
        this.isFieldEmpty = true;
      }
    },
  },
};
</script>
