<script setup>
import Logo from './icons/LogoIcon.vue';
import MobileLogo from './icons/LogoIconMobile.vue';
import Hamburger from './icons/IconHamburger.vue';
import Close from './icons/IconClose.vue';
import BgPatternAbout1MobileNav1 from './icons/BgPatternAbout1MobileNav1.vue';
</script>

<template>
  <header class="mb-20 flex w-full flex-col items-center overflow-x-hidden">
    <nav class="mt-12 flex w-[87.2%] items-center justify-between">
      <router-link class="hidden xl:block" to="/">
        <Logo />
      </router-link>
      <router-link class="xl:hidden" to="/">
        <MobileLogo />
      </router-link>
      <button type="button" @click="toggleModal">
        <Hamburger />
      </button>
      <aside
        class="absolute top-0 right-0 z-30 h-screen w-[68%] bg-police-blue pt-14 pl-12 pr-[1.563rem] transition-all duration-300 ease-in"
        :class="[isNavOpen ? 'opacity-1 translate-x-0' : 'translate-x-full opacity-0']"
      >
        <div class="pointer-events-none absolute bottom-0 right-0 translate-x-1/2">
          <BgPatternAbout1MobileNav1 />
        </div>
        <nav class="z-10 flex w-full flex-col items-start">
          <div class="mb-10 flex w-full items-center justify-end">
            <button type="button" @click="toggleModal">
              <Close />
            </button>
          </div>
          <ul class="mb-9 flex w-full flex-col items-start gap-6">
            <li>
              <router-link @click="toggleModal" class="font-body-1 text-white" to="/"
                >home</router-link
              >
            </li>
            <li>
              <router-link @click="toggleModal" class="font-body-1 text-white" to="/about"
                >about</router-link
              >
            </li>
          </ul>
          <router-link @click="toggleModal" class="btn-primary-light" to="/contact-us"
            >contact-us</router-link
          >
        </nav>
      </aside>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['isNavOpen'],
  methods: {
    toggleModal() {
      this.$emit('toggle');
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  a:hover,
  a:active {
    @apply text-light-coral;
  }
}
</style>
