<template>
  <div class="h-[100%] bg-background mx-auto max-w-screen-xl pt-16">
    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-2 justify-center">
        <img class="w-[60px] h-[60px]" src="@/assets/images/logo.png" alt="" />
        <h3>Matchaa!</h3>
      </div>
      <div>
        <a
          href="/signin"
          class="border-2 rounded-3xl px-4 py-2 text-[#6663B5] border-[#6663B5]"
          >Log In</a
        >
      </div>
    </div>

    <div class="flex justify-evenly pt-10">
      <div
        class="max-w-xs flex flex-col justify-between align-item-center pt-10"
      >
        <div class="flex flex-col">
          <span class="text-3xl">Find you love</span>
          <span class="text-6xl font-semibold text-[#6663B5]"
            >By being<br />Yourself</span
          >
        </div>

        <div class="flex flex-col">
          <span class="pb-4 tracking-wide">
            Sign up with Matchaa! now for wonderful online dating experience!
          </span>
          <a
            href="/signup"
            class="border-2 rounded-3xl text-center py-2 max-w-[300px] text-white bg-[#EF5DA8]"
            >Register</a
          >
        </div>
      </div>

      <div class="max-w-xl">
        <img src="@/assets/images/landing_page.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>