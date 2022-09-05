<template>
  <div class="container my-16">
    <div class="text-2xl font-semibold">People who liked you!</div>
    <div class="grid grid-cols-6 gap-4 pt-6">
      <MiniProfileCard v-for="x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :key="x" />
    </div>
  </div>
</template>

<script>
import MiniProfileCard from "@/components/Profile/MiniProfileCard.vue";
export default {
  components: {
    MiniProfileCard,
  },
};
</script>

<style>
</style>