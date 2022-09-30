<template>
  <div class="container my-16">
    <div class="text-2xl font-semibold">People who liked you!</div>
    <div class="grid grid-cols-6 gap-4 pt-6">
      <MiniProfileCard v-for="x in users" :user="x" :key="x.name" />
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
     users: [
      {
        name: "Thida Mok",
        bio: "I feel Okay with other situtaion",
        age: 24,
        profile: "f.jpg",
      },
      {
        name: "Chhatra Lady kaka",
        bio: "I feel I cute more than other girl",
        age: 24,
        profile: "c.jpg",
      },
      {
        name: "Sochata",
        bio: "I shy to have boy friend",
        age: 24,
        profile: "d.jpg",
      },
      {
        name: "David",
        bio: "Im single, I want a girl friend",
        age: 24,
        profile: "e.jpg",
      },
    ],
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
    // this.getProfiles()
  }
};
</script>

<style>
</style>