<template>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <div class="w-full bg-[#CDCDD7] rounded-lg m-4">
      <div class="grid grid-cols-3 m-2 justify-items-center">
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
      <div class="flex justify-center">
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              class="rounded-full text-white m-2"
              elevation="0"
              color="#EF5DA8"
              >Add Photo</v-btn
            >
          </template>

          <v-card width="400px">
            <v-card-title class="text-[#EF5DA8]">Upload Photo</v-card-title>
            <v-card-text>
              <v-file-input accept="image/*" label="Add Photo" ></v-file-input>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialog=false" elevation="0" class="rounded-full w-full m-2" color="#EF5DA8">Close</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="m-2">
        <span class="text-lg font-medium uppercase">Edit Bio</span>
        <v-textarea v-model="inputBio" class="mt-4"></v-textarea>
      </div>
      <div class="m-2">
        <span class="text-lg font-medium uppercase">City</span>
        <v-select :items="items" class="mt-4" label="Standard variant"></v-select>
      </div>
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
  data: () => ({
    dialog: false,
    inputBio: 'Do you want to get notified when a new component is added to Flowbite?'
  })
};
</script>

<style>
</style>
