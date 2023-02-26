<script setup>
import Header from './components/AppHeader.vue';
import Footer from './components/AppFooter.vue';
</script>

<template>
  <div
    class="absolute z-20 h-full w-full bg-black/50 transition-opacity duration-300 ease-in"
    :class="[isNavOpen ? 'opacity-1 visible' : 'invisible opacity-0']"
    @click="toggleModal"
  ></div>
  <div :class="[isNavOpen ? 'h-screen overflow-hidden' : 'h-auto overflow-auto']">
    <Header :isNavOpen="isNavOpen" @toggle="toggleModal" />
    <main class="flex w-full flex-col items-center">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleModal() {
      this.isNavOpen = !this.isNavOpen;
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (this.isNavOpen && e.key === 'Escape') {
        this.toggleModal();
      }
    });
  },

  unmounted() {
    window.removeEventListener('keydown');
  }
};
</script>

<style>
html,
body {
  @apply bg-midnight-green font-['Livvic'] text-white;
}

#app {
  @apply relative mx-auto grid w-full max-w-[1920px] place-items-center overflow-x-hidden;
}
</style>
