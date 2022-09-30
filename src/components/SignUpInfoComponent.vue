<template>
  <v-card width="600px" color="#CDCDD7" elevation="0">
    <v-card-title class="text-center">One Last Step</v-card-title>
    <v-card-text>
      <h3 class="uppercase font-bold">About Me</h3>
      <v-textarea
        background-color="white"
        color="black"
        label="Label"
        v-model="bio"
      ></v-textarea>

      <h5 class="uppercase font-bold">I am</h5>
      <v-select
        v-model="sex"
        item-title="text"
        item-value="value"
        :items="[
          { text: 'Man', value: 'M' },
          { text: 'Woman', value: 'F' },
        ]"
      ></v-select>
      <h5 class="uppercase font-bold">My age</h5>
      <v-select v-model="age" :items="getAge"></v-select>
      <h5 class="uppercase font-bold">My Ideal Person</h5>
      <v-select
        v-model="find_sex"
        item-title="text"
        item-value="value"
        :items="[
          { text: 'Man', value: 'M' },
          { text: 'Woman', value: 'F' },
        ]"
      ></v-select>
      <h5 class="uppercase font-bold">Desired Ages Open to Date</h5>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-select v-model="find_age_min" :items="getAge"></v-select>
        </v-col>
        <v-col cols="6">
          <v-select v-model="find_age_max" :items="getAge"></v-select>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="methodSignUp()" depressed color="#EF5DA8">Save Info</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    bio: "",
    sex: { text: "Man", value: "M" },
    age: 16,
    find_age_min: 0,
    find_age_max: 0,
    find_sex: { text: "Man", value: "M" },
  }),
  computed: {
    getAge() {
      return Array.from({ length: 10 }, (_, i) => i + 16);
    },
  },
  methods: {
    methodSignUp() {
      const token = localStorage.getItem("token");
      axios
        .post(
          `${process.env.VUE_APP_API_URL}/settings`,
          {
            find_distance: 0,
            find_age_min: this.find_age_min,
            find_age_max: this.find_age_max,
            find_sex: this.find_sex,
            language: "",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          localStorage.setItem("token", result.data.accessToken);
          this.$router.push("/home");
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .patch(
          `${process.env.VUE_APP_API_URL}/users/me`,
          {
            bio: this.bio,
            sex: this.sex,
            age: this.age,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          localStorage.setItem("token", result.data.accessToken);
          this.$router.push("/home");
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>