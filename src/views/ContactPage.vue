<template>
  <section class="flex flex-col place-content-center min-h-screen bg-gray-200 p-8">
    <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
    >
      <div class="space-y-12">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 font-extrabold text-5xl">Contact Me</span>
        <ul class="text-xl font-semibold space-y-8">
          <li class="rounded-lg p-4 shadow-md bg-gray-400">
            <fa icon="envelope" size="xl"/> : oamedina1994@gmail.com
          </li>
          <section class="flex space-x-4">
            <li>
              <a href="https://www.linkedin.com/in/oswaldo-medina-78208814a" class="shadow-xl">
                <fab :icon="['fab','linkedin']" size="3x" class="hover:transform hover:scale-75"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/ozzymdn2017" class="shadow-xl">
                <fab :icon="['fab', 'github-square']" size="3x" />
              </a>
            </li>
          </section>
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