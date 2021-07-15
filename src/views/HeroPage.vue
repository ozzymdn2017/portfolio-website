<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center px-16">
    <div class="relative w-full max-w-lg">
      <!--Hero Section-->
      <TransitionRoot
        as="section"
        appear
        :show="isShowing"
      >
        <!--Circles Animation-->
        <TransitionChild
          appear
          class="z-0"
          enter="transition-opacity ease-in duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-out duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
            
        >
          <!--Purple Circle-->
          <div class="absolute top-0 -left-4 w-48 h-48 bg-purple-300 rounded-full md:w-72 md:h-72  mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
          <!--Yellow Circle-->
          <div class="absolute top-0 -right-4 w-48 h-48 bg-yellow-300 rounded-full md:w-72 md:h-72 mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-3000"></div>
          <!--Pink Circle-->
          <div class="absolute -bottom-8 left-20 w-48 h-48 bg-pink-300 rounded-full md:w-72 md:h-72 mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-5000"></div>
        </TransitionChild>

          <TransitionChild
          as="h1"
          class="text-6xl"
          enter="transition-opacity ease-in duration-700 delay-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-out duration-150"
          leave-from="opacity-100"
          leave-to="opacity-0"
          >
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-800 font-extrabold">Oswaldo Medina</span>
          </TransitionChild>
          <TransitionChild
            as="p"
            class="text-5xl"
            enter="transition-opacity ease-in duration-500 delay-700"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >  
            Front End Developer
          </TransitionChild>
          <!--Button-->
          <TransitionChild
            as="a"
            href="/projects"
            class="bg-green-600 inline-flex rounded-2xl text-md font-lg text-white p-3 mt-4 shadow-md hover:bg-gray-200 hover:text-green-600 z-10"
            enter="transition-opacity ease-in duration-500 delay-1000"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            Projects
          </TransitionChild>          
      </TransitionRoot>
        
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TransitionRoot, TransitionChild } from '@headlessui/vue'


export default {
  components: {
    TransitionRoot,
    TransitionChild
  },
  setup() {
    const isShowing = ref(true)

   
    return {
      isShowing,
  }
}
}  
</script>
