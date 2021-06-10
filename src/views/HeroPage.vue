<template>
  <TransitionRoot
    appear
    class="mx-auto space-y-6"
    :show="isShowing"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <!--Large Heading-->
    <TransitionChild
      enter="transition-opacity ease-linear duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <h1 class="font-extrabold text-6xl">Oswaldo Medina</h1>
    </TransitionChild>
    <!--Paragraph-->
    <TransitionChild
      enter="transition ease-in-out duration-300 transform"
      enter-from="-translate-x-full"
      enter-to="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leave-from="translate-x-0"
      leave-to="-translate-x-full"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum repellat, quibusdam possimus fuga aliquam eum quod vero quisquam culpa.</p>
    </TransitionChild>
  </TransitionRoot>
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
