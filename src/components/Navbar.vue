<template>
  <nav class="flex sticky top-0 p-3 z-10 border-b-2 bg-gradient-to-r from-purple-300 to-blue-300 border-blue-700">
    <!--Menu Icon-->
    <button type="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </button>
    
    <!--Conditional Medium Screens and larger-->
    <!-- <ul class="flex">
      <li class="mr-6">
        <router-link class="text-blue-500 hover-text-blue-800" href="#">Projects</router-link>
      </li>
      <li class="mr-6">
        <router-link class="text-blue-500 hover-text-blue-800" href="#">About</router-link>
      </li>
      <li class="mr-6">
        <router-link class="text-blue-500 hover-text-blue-800" href="#">Contact</router-link>
      </li>
      <li class="mr-6">
        <router-link class="text-blue-500 hover-text-blue-800" href="#">Resume</router-link>
      </li>
    </ul> -->
  </nav>
</template>

<script>
import { Popover, PopoverButton } from '@headlessui/vue'

export default {
  components: {
    Popover,
    PopoverButton
  },

  setup() {

  }
}
</script>
