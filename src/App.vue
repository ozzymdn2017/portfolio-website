<template>
  <div class="bg-hero-pattern">
    <Navbar />
    <main class="min-h-screen p-8">
      <router-view></router-view>
    </main>
    
    <Footer />
  </div>
  
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

