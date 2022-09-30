<template>
  <div class="w-[730px] h-[537px]">
    <div
      class="bg-[#FFE2E2]/40 w-[100%] py-8 rounded-xl shadow-lg shadow-[#FFE2E2]/40"
    >
      <div class="flex items-center space-x-2 justify-center">
        <img class="w-[60px] h-[60px]" :src="require('@/assets/images/logo.png')" alt="" />
        <h3>Matchaa!</h3>
      </div>
      <div class="flex flex-col px-32 my-6">
        <div
          class="flex items-center my-2 px-4 py-2 rounded-xl h-[46px] shadow-lg bg-white shadow-[#EF5DA8]/20"
        >
          <input
            v-model="username"
            class="bg-transparent outline-none"
            placeholder="Username"
          />
        </div>

        <div
          class="flex items-center h-[46px] justify-between bg-white my-2 px-4 py-2 rounded-xl shadow-lg shadow-[#EF5DA8]/20"
        >
          <input
            v-model="password"
            class=" bg-transparent outline-none"
            placeholder="Password"
            type="password"
          />
          <img src="{icoBlind}" class="w-[16px] h-[16px]" alt="" />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <v-btn @click="methodSignIn()" class="bg-[#EF5DA8] rounded-3xl px-16 py-2 text-white">
          Log In
        </v-btn>
        <div class="flex items-center space-x-2 justify-center mt-6">
          <p>Don't have account?</p>
          <span>
            <a href="/signup" class="border-b-[1px] border-black"
              >Sign Up</a
            >
          </span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center my-16">
      <a
        href="/"
        class="border-2 rounded-3xl px-16 py-2 text-red-500 border-red-500"
        >Cancel</a
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods:{
    methodSignIn(){
      axios
        .post(
          `${process.env.VUE_APP_API_URL}/sessions`,
          {
            username: this.username,
            password: this.password,
          },
          {}
        )
        .then((result) => {
          localStorage.setItem('token', result.data.accessToken)
          this.$router.push('/home')
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
  }
};
</script>

<style>
</style>