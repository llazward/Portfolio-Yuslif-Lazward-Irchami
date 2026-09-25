<template>
  <div id="portfolio-app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
#portfolio-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
