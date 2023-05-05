<template>
  <div v-if="isLink" class="cursor-pointer">
    <a
      :href="href"
      class="text-blue-dark hover:text-white border border-blue-dark hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 text-center"
      >{{ message }}
      </a>
  </div>
  <div class="cursor-pointer" v-else>
    <button
      @click="event"
      type="button"
      class="text-blue-dark hover:text-white border border-blue-dark hover:bg-blue-dark font-medium rounded-lg text-sm px-5 py-2 text-center"
    >
      {{ message }}
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: "SolidButton",
  props: {
    isLink: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    event: {
      type: Function,
      required: false,
    },
  },
};
</script>
