<template>
  <main class="p-8 min-h-screen bg-gray-200 shadow-lg">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div>
        <!--Page Heading-->
        <h1>
          <span class="bg-clip-text text-6xl leading-none tracking-tight text-transparent font-extrabold bg-gradient-to-tr from-green-600 to-blue-800">
            Projects
          </span>
        </h1>
        <!--Card-->
        <ul>
          <li v-for="project in projects" :key="project.name" class="mt-4">
          <article class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8" id="projects">
        
            <div class="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4">
              <img :src="project.img" class="object-cover shadow-lg rounded-lg" :alt="project.alt">
            </div>
            <div class="sm:col-span-2">
              <div class="space-y-2">
                <!--Project Name & Tools Used(Eventually should be badges)-->
                <div>
                  <h3 class="text-lg font-bold">{{ project.name }}</h3>
                  <p class="text-blue-700  text-sm">Stack: {{ project.tools }}</p>
                </div>
                <!--Project Description-->
                <div class="text-base">
                  <p class="text-gray-900">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </li>
        </ul>
        
        
      </div>

    </transition>
  </main>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'

export default {
  
  setup() {
    const projects = [
      {
        name: 'EyeLash Extension Website',
        tools: 'Vue 3, Tailwind, Vite, GSAP, AWS Amplify',
        description: 'Eyelash extension SPA application for the purpose of displaying client work and ultimately leading to a client booking and payment on the app itself.',
        img: '@src/assets/gold-cube.jpg',
        alt: 'Gold Cubes'
      },
      {
        name: 'Photography Website',
        tools: 'Vue 3, Tailwind, Vite, GSAP, AWS Amplify',
        description: 'Photography website SPA application for the purpose of displaying client work and ultimately leading to a client booking and payment on the app itself.',
        img: 'src/assets/metal-spike.jpg',
        alt: 'Metal Spikes'
      },
      {
        name: 'BBQ E-Commerce Website',
        tools: 'Vue 3, Tailwind, Vite, GSAP, Stripe, AWS Amplify',
        description: 'Barbecue e-commerce website application for the purpose of displaying client BBQ seasoning and spices.',
        img: '@/assets/triangle-path.jpg',
        alt: 'Triangle Path'
      },
    ]
    const isShowing = ref(true)
    const beforeEnter = (el) => {
          console.log('before enter - set initial state')
          el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 5,
        opacity: 1,
        ease: 'power4.out',
        onComplete: done
      })
    }

    const afterEnter = (el) => {
      console.log('after enter')
    }
    return { isShowing, projects, beforeEnter, enter, afterEnter }
  },
}
</script>

<style>

</style>