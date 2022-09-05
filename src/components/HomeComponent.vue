<template>
  <div class="">
    <div>
      <ProfileComponent />
    </div>
    <div class="flex justify-between">
      <button @click="alert('hello')">a</button>
      <div>a</div>
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