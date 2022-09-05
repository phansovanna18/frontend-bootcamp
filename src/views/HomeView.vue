<template>
  <div class="flex justify-center items-center h-[100vh]">
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>
