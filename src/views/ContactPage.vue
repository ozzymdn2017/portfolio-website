<template>
  <section class="flex flex-col place-content-center justify-center min-h-screen bg-gray-400 p-8">
    <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
    >
      <div class="align-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 font-extrabold text-5xl">Contact Me</span>
        <ul class="text-2xl font-bold">
          <li>Email: oamedina1994@gmail.com</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>
      
    </transition>
  </section>
</template>

<script>

import gsap from 'gsap'

export default {
  setup() {
    const beforeEnter = (el) => {
      console.log('before enter - set initial state')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      console.log('starting to enter - make transition')
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }
    const afterEnter = (el) => {
      console.log('after enter')
    }
    
    return { beforeEnter, enter, afterEnter }
    
  }
}
</script>