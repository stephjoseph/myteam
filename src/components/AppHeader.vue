<script setup>
import Logo from './icons/LogoIcon.vue';
import MobileLogo from './icons/LogoIconMobile.vue';
import Hamburger from './icons/IconHamburger.vue';
</script>

<template>
  <header class="mb-20 flex w-full flex-col items-center">
    <nav class="mt-12 flex w-[87.2%] items-center justify-between">
      <router-link class="hidden xl:block" to="/">
        <Logo />
      </router-link>
      <router-link class="xl:hidden" to="/">
        <MobileLogo />
      </router-link>
      <button type="button">
        <Hamburger />
      </button>
    </nav>
  </header>
</template>
