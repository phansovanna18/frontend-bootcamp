<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <ProfileComponent />
    <v-btn to="/profile/edit" class="rounded-full text-white" elevation="0" color="#EF5DA8">Edit Profile</v-btn>
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