<template>
  <div class="">
    <div class="my-4">
      <ProfileCard :user="user" :key="user.name" />
    </div>
    <div class="flex justify-between px-15">
      <v-btn icon="mdi-close" @click="methodCancel()" color="#CDCDD7"></v-btn>
      <v-btn
        icon="mdi-heart"
        @click="methodLove()"
        color="#EF5DA8"
        class="text-white"
      ></v-btn>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/Profile/ProfileCard.vue";
export default {
  components: {
    ProfileCard,
  },
  data: () => ({
    index: 0,
    listUser: [
      {
        name: "Thida Mok",
        bio: "I feel Okay with other situtaion",
        profile: "b.jpg",
      },
      {
        name: "Chhatra Lady kaka",
        bio: "I feel I cute more than other girl",
        profile: "c.jpg",
      },
      {
        name: "Sochata",
        bio: "I shy to have boy friend",
        profile: "d.jpg",
      },
      {
        name: "David",
        bio: "Im single, I want a girl friend",
        profile: "e.jpg",
      },
    ],
    user:{
      name: "A",
        bio: "ddd",
        profile: "b.jpg",
    },
  }),
  methods: {
    methodCancel() {
      this.index += 1
      this.user = this.listUser[this.index]
    },
    methodLove() {
      this.index += 1
      this.user = this.listUser[this.index]
    },
  },
  mounted(){
    this.index = 0
    this.user = this.listUser[this.index]
  }
};
</script>

<style>
</style>