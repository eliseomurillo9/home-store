<template>
  <div v-if="href" class="cursor-pointer">
    <a
      :href="href"
      class="text-white bg-blue-dark hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >{{message}}</a
    >
  </div>
  <div class="cursor-pointer" v-else>
    <span
      @click="event"
      class="text-white bg-blue-dark hover:bg-blue-600 border-blue-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >{{ message }}</span
    >
  </div>
</template>

<script>
export default {
  name: "SolidButton",
  props: {
    href: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: 'text'
    },
    event: {
        type: Function,
        required: false
    }
  }
};
</script>
