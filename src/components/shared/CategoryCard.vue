<template>
  <div class="relative h-full max-h-52 w-full max-w-176 shadow-2xl hover:shadow-xl">
    <div class="w-full h-full flex justify-center items-center absolute hover:bg-black/60 transition ease-in-out cursor-pointer rounded-md first:opacity-0 hover:first:opacity-100">
        <h2 class="text-white">Hogar</h2>
    </div>
    <img class="h-full w-full rounded object-cover" :src="img" alt="ksd" />
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
