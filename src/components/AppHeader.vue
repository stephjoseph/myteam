<script setup>
import Logo from './icons/LogoIcon.vue';
import MobileLogo from './icons/LogoIconMobile.vue';
import Hamburger from './icons/IconHamburger.vue';
</script>

<template>
  <header class="mb-20 flex w-full flex-col items-center">
    <nav class="mt-12 flex w-[87.2%] items-center justify-between">
      <a class="hidden xl:block" href="/">
        <Logo />
      </a>
      <a class="xl:hidden" href="">
        <MobileLogo />
      </a>
      <button type="button">
        <Hamburger />
      </button>
    </nav>
  </header>
</template>
