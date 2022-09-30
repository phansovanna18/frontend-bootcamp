<template>
  <div class="relative max-w-sm rounded-2xl">
    <img :src="require('@/assets/images/profile1.png')" alt="" />
    <div class="absolute bottom-14 px-10 text-lg text-black">
      <div class="bg-white p-4 rounded-2xl">
        <div class="text-center">
          <h3 class="font-semibold">{{ name }}</h3>
        </div>
        <div class="my-5">
          {{ bio }}
        </div>
        <div class="text-[#686868]">
          <i class="text-[#EF5DA8] fa-solid fa-location-dot"></i>
          {{ location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    me: Boolean,
  },
  data: () => ({
    name: '',
    username: '',
    bio: '',
    location: ''
  }),
  methods: {
    getOwnProfile() {
      const token = localStorage.getItem('token')
      axios
        .get(`${process.env.VUE_APP_API_URL}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          const data = result.data
          console.log(result);
          this.name = data.name
          this.username = data.username
          this.bio = data.bio || ''
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.me)
    if(this.me){
      this.getOwnProfile();
    }
    
  },
};
</script>

<style>
</style>