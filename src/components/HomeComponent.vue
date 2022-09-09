<template>
  <div class="">
    <div>
      <ProfileComponent />
    </div>
    <div class="flex justify-between px-15">
      <v-btn icon="mdi-close" color="#CDCDD7"></v-btn>
      <v-btn icon="mdi-heart" color="#EF5DA8" class="text-white"></v-btn>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  components: {
    ProfileComponent,
  },
};
</script>

<style>
</style>