<template>
  <div class="">
    <div>
      <ProfileCard />
    </div>
    <div class="flex justify-between px-15">
      <v-btn icon="mdi-close" color="#CDCDD7"></v-btn>
      <v-btn icon="mdi-heart" color="#EF5DA8" class="text-white"></v-btn>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/Profile/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
};
</script>

<style>
</style>