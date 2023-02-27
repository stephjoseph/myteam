<script setup>
import BgPatternAbout1MobileNav1 from './icons/BgPatternAbout1MobileNav1.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-hidden pb-[6.75rem] md:pb-[7rem]"
  >
    <div
      class="pointer-events-none absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 md:translate-y-0"
    >
      <BgPatternAbout1MobileNav1 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center gap-4 md:w-[88.93%] md:gap-6">
      <h1
        class="text-center text-[2.5rem] font-bold leading-[2.5rem] tracking-normal text-white md:text-[4rem] md:leading-[3.5rem]"
      >
        About
      </h1>
      <p class="font-body-2 text-center text-white md:w-[66.91%]">
        We help companies build dynamic teams made up of top global talent. Using our network of
        passionate professionals we drive innovation and deliver incredible outcomes. Talented,
        diverse teams shape the best products and experiences. We’ll bring those teams to you.
      </p>
    </div>
  </section>
</template>
