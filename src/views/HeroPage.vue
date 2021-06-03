<template>
  <div>
    <h1 class="text-center">{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: String
})

</script>

