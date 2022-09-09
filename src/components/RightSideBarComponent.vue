<template>
  <div class="flex flex-col items-center w-[80px] h-screen bg-[#CDCDD7]">
    <a href="/profile" class="flex items-center my-4">
      <img class="w-[60px] h-[60px] object-cover rounded-full" :src="require('@/assets/images/profile1.png')" alt="" />
    </a>
    <a href="/setting" class="flex flex-col items-center mb-2 mt-8">
      <!-- <img width="40px" height="40px" src="@/assets/icons/ico_heart.png" alt="" /> -->
      <div class="pb-4 text-[#8A86C3]">
        <i class="fa-solid fa-gear fa-2xl"></i>
      </div>
      <span>Setting</span>
    </a>
    <a href="#" class="flex flex-col items-center my-2">
      <!-- <img width="40px" height="40px" src="@/assets/icons/ico_heart.png" alt="" /> -->
      <div class="pb-4 text-[#8A86C3]">
        <i class="fa-solid fa-share fa-2xl"></i>
      </div>
      <span>Share</span>
    </a>
    <!-- <div class="flex flex-col items-center my-2">
      <img width="40px" height="40px" src="@/assets/icons/ico_heart.png" alt="" />
      <span>Like</span>
    </div>
    <div class="w-[41px] h-[1px] bg-black my-4"></div>
    <div>
      <div class="my-2">
        <img width="40px" height="40px" src="@/assets/icons/ico_heart.png" alt="" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>