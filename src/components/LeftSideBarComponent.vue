<template>
  <div class="flex flex-col items-center w-[80px] h-[100vh] bg-[#CDCDD7]">
    <a href="/home" class="flex items-center my-4">
      <img class="w-[60px] h-[60px]" :src="require('@/assets/images/logo.png')" alt="" />
    </a>
    <div class="w-[41px] h-[1px] bg-black mb-4"></div>
    <a href="/match" class="flex flex-col items-center my-2">
      <!-- <img width="40px" height="40px" src="@/assets/images/match.png" alt="" /> -->
      <div class="pb-4 text-[#EF5DA8]">
        <i class="fa-solid fa-heart fa-2xl"></i>
      </div>
      <span>Match</span>
    </a>
    <a href="/like" class="flex flex-col items-center my-2">
      <!-- <img width="40px" height="40px" src="@/assets/images/like.png" alt="" /> -->
      <div class="pb-4 text-[#EF5DA8]">
        <i class="fa-solid fa-thumbs-up fa-2xl"></i>
      </div>
      <span>Like</span>
    </a>
    <!-- <div class="w-[41px] h-[1px] bg-black my-4"></div> -->
    <!-- <a href="/message" class="flex flex-col items-center my-2">
      <div class="pb-4 text-[#EF5DA8]">
        <i class="fa-solid fa-comments fa-2xl"></i>
      </div>
      <span>Message</span>
    </a> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>