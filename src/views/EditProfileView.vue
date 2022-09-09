<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <div class="w-full bg-[#CDCDD7] rounded-lg m-2 justify-bet">
      <div class="grid grid-cols-4 gap-4 m-2">
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
        <img
          class="w-[112px]"
          :src="require('@/assets/images/profile1.png')"
          alt=""
        />
      </div>
      <v-btn
        to="/profile/edit"
        class="rounded-full text-white m-2"
        elevation="0"
        color="#EF5DA8"
        >Add Photo</v-btn
      >
    </div>
    <v-btn
      to="/profile/edit"
      class="rounded-full text-white w-full m-2"
      elevation="0"
      color="#EF5DA8"
      >Save Info</v-btn
    >
  </div>
</template>

<script>
// import ProfileComponent from "@/components/ProfileComponent.vue";
export default {
  components: {
    // ProfileComponent,
  },
};
</script>

<style>
</style>
