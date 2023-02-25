<script setup>
import Header from './components/AppHeader.vue';
import HomeHero from './components/HomeHero.vue';
import HomeBuildAndManage from './components/HomeBuildAndManage.vue';
import HomeTestimonials from './components/HomeTestimonials.vue';
import CallToAction from './components/CallToAction.vue';
</script>

<template>
  <Header />
  <main class="flex w-full flex-col items-center">
    <HomeHero />
    <HomeBuildAndManage />
    <HomeTestimonials />
  </main>
  <CallToAction />
</template>

<script>
console.log('Hello World');
</script>

<style>
html,
body {
  @apply bg-midnight-green font-['Livvic'] text-white;
}

#app {
  @apply mx-auto grid w-full max-w-[1920px] place-items-center;
}
</style>
