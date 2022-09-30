<template>
  <div class="container my-16">
    <div class="text-2xl font-semibold">People who liked you!</div>
    <div class="grid grid-cols-6 gap-4 pt-6">
      <MiniProfileCard v-for="x in [1, 2, 3]" :key="x" />
    </div>
  </div>
</template>

<script>
import MiniProfileCard from "@/components/Profile/MiniProfileCard.vue";
import axios from 'axios'
export default {
  components: {
    MiniProfileCard,
  },
  data: () => ({
    users: []
  }),
  methods: {
    getProfiles(){
      const token = localStorage.getItem('token')
      axios
        .get(`${process.env.VUE_APP_API_URL}/like`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          const data = result.data
          console.log(data)
          this.users = data
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  mounted(){
    this.getProfiles()
  }
};
</script>

<style>
</style>