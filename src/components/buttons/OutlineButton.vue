<template>
  <div v-if="isLink" class="cursor-pointer">
    <a
      :href="href"
      class="text-blue-dark hover:text-white border border-blue-dark hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
      >{{ message }}
      </a>
  </div>
  <div class="cursor-pointer" v-else>
    <button
      @click="event"
      type="button"
      class="text-blue-dark hover:text-white border border-blue-dark hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-1 text-center"
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
