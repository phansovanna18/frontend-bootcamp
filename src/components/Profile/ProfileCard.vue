<template>
  <div class="relative max-w-sm rounded-2xl">
    <img class="rounded-2xl" :src="getImage(`${imageUser}`)" alt="" />
    <div class="absolute bottom-14 px-10 text-lg text-black w-full">
      <div class="bg-white p-4 rounded-2xl">
        <div class="text-center">
          <h3 class="font-semibold">{{ name }}</h3>
        </div>
        <div class="my-5">
          {{ bio }}
        </div>
        <!-- <div class="text-[#686868]">
          <i class="text-[#EF5DA8] fa-solid fa-location-dot"></i>
          {{ location }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    me: Boolean,
    user: Object,
  },
  data: () => ({
    name: '',
    username: '',
    bio: '',
    imageUser: 'a.jpg',
    location: ''
  }),
  computed:{
    
  },
  methods: {
    getImage(pic){
      return require(`../../assets/images/`+pic)
    },
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
          this.name = data.name
          this.username = data.username
          this.bio = 'I am handsome and pretty'
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    if(this.me){
      this.getOwnProfile();
    }else{
      this.name = this.user.name
      this.username = this.user.username
      this.bio = this.user.bio
      this.imageUser = this.user.profile
    }
    
  },
};
</script>

<style>
</style>