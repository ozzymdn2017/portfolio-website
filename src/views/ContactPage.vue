<template>
  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <main class="p-8 min-h-screen bg-gray-700 bg-opacity-50 space-y-10">
        <h1 class="font-extrabold text-6xl text-green-700" id="name">Contact Me</h1>
      </main>
    </transition>
</template>

<script>
import { DeviceMobileIcon, AtSymbolIcon } from '@heroicons/vue/outline'
import gsap from 'gsap'

export default {
  components: {
    DeviceMobileIcon,
    AtSymbolIcon
  },
  setup() {
    

    
  }
}
</script>