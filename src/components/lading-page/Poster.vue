<template>
  <div class="relative">
    <slot></slot>
      <img class="h-full w-full rounded object-cover" :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  name: "Poster",
  props: {
    imgSrc:{
      Type: String,
      required: true,
    },
    imgAlt:{
      type: String,
      required: true
    }
}
};
</script>
