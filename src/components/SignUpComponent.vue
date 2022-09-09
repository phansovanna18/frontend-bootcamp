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
            class="bg-transparent outline-none"
            placeholder="Username"
          />
        </div>

        <div
          class="flex items-center h-[46px] justify-between bg-white my-2 px-4 py-2 rounded-xl shadow-lg shadow-[#EF5DA8]/20"
        >
          <input
            class=" bg-transparent outline-none"
            placeholder="Password"
          />
          <img src="@/assets/icons/ico_blind.png" class="w-[16px] h-[16px]" alt="" />
        </div>

        <div
          class="flex items-center my-2 px-4 py-2 rounded-xl h-[46px] shadow-lg bg-white shadow-[#EF5DA8]/20"
        >
          <input
            class=" bg-transparent outline-none"
            placeholder="Date of Birth"
          />
        </div>

        <div
          class="flex items-center my-2 px-4 py-2 rounded-xl h-[46px] shadow-lg bg-white shadow-[#EF5DA8]/20"
        >
          <input
            class=" bg-transparent outline-none"
            placeholder="Location"
          />
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <button class="bg-[#EF5DA8] rounded-3xl px-16 py-2 text-white">
          Sign Up
        </button>
        <div class="flex items-center space-x-2 justify-center mt-6">
          <p>Have an account?</p>
          <span>
            <a href="/signin" class="border-b-[1px] border-black"
              >Log In</a
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
export default {};
</script>

<style>
</style>