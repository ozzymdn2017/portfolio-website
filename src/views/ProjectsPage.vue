<template>
  <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <main class="p-8 min-h-screen bg-gray-200 space-y-10">
        <div class="text-5xl font-extrabold leading-none tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-tr from-green-600 to-blue-800">
            Projects
          </span>
        </div>
        <ContactCard />
      </main>
    </transition>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'

import ContactCard from '../components/ContactCard.vue'



export default {
  components: {
    ContactCard
  },

  setup() {
    const isShowing = ref(true)
    const beforeEnter = (el) => {
          console.log('before enter - set initial state')
          el.style.transform = 'translateY(-60px)'
          el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }

    const afterEnter = (el) => {
      console.log('after enter')
    }
    return { isShowing, beforeEnter, enter, afterEnter }
  },
}
</script>

<style>

</style>