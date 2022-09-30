<template>
  <div class="max-w-sm">
    <ProfileCard :me="true"/>
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