<template>
  <div  className='flex justify-between bg-[#F5FAFF]'>
    <LeftSideBarComponent/>
    <slot />
    <RightSideBarComponent/>
  </div>
</template>

<script>
import LeftSideBarComponent from '@/components/LeftSideBarComponent.vue'
import RightSideBarComponent from '@/components/RightSideBarComponent.vue'

export default {
  name: "AppLayoutHome",
  components: {
    LeftSideBarComponent,
    RightSideBarComponent,
  }
}
</script>