<template>
  <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <!--Purple Circle-->
        <div class="absolute top-0 -left-4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
        <!--Yellow Circle-->
        <div class="absolute top-0 -right-4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000"></div>
        <!--Pink Circle-->
        <div class="absolute -bottom-8 left-20 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div>
        <!--Hero Section-->
        <section>
          <h1 class="text-6xl"><span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-800 font-extrabold">Ozzy Medina</span>
          </h1>
          <p class="text-5xl">Front End Developer</p>
        </section>

      <!--Skeleton-->
      <!-- <div class="m-8 relative space-y-4">
        <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
          <div class="flex-1">
            <div class="h-4 w-48 bg-gray-300 rounded"></div>
          </div>
          <div>
            <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </transition>
</template>

<script>

import gsap from 'gsap'
import { ref } from 'vue'


export default {
  
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

    return {
      isShowing,
      beforeEnter,
      enter,
      afterEnter
  }
}
}  
</script>
