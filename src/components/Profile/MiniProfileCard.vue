<template>
  <a href="#" class="relative max-w-sm rounded-2xl w-[240px] h-[360px]">
    <img :src="getImage(user.profile)" alt="" />
    <div class="absolute bottom-6 px-6 py-2 text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black rounded-lg">
      <div class="text-white">
        <h3 class="font-light">{{ user.name }}, {{user.age}}</h3>
      </div>
      <!-- <div class="text-white text-sm">
        <i class="text-[#EF5DA8] fa-solid fa-location-dot"></i>
        Phnom Penh
      </div> -->
    </div>
  </a>
</template>

<script>
export default {
  props: {
    user: Object
  },
  methods: {
    getImage(pic){
      return require(`../../assets/images/`+pic)
    },
  }
};
</script>

<style>
</style>