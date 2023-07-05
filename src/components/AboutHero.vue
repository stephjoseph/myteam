<script setup>
import BgPatternAbout1MobileNav1 from './icons/BgPatternAbout1MobileNav1.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-hidden pb-[6.75rem] md:pb-[7rem] xl:pb-[7.5rem]"
  >
    <div
      class="pointer-events-none absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 md:translate-y-0"
    >
      <BgPatternAbout1MobileNav1 />
    </div>
    <div
      class="z-10 flex w-[87.2%] flex-col items-center gap-4 md:w-[88.93%] md:gap-6 xl:w-[77.08%] xl:flex-row xl:items-start xl:gap-[1.875rem]"
    >
      <h1
        class="md:leading-[3.5rem text-center text-[2.5rem] font-bold leading-[2.5rem] tracking-normal text-white md:text-[4rem] xl:w-[31.53%] xl:text-left xl:leading-[6.25rem]"
      >
        About
      </h1>
      <div class="flex flex-col gap-10 md:w-[66.91%] xl:w-[65.76%]">
        <div class="hidden h-1 w-[3.125rem] bg-light-coral xl:block"></div>
        <p
          class="text-center font-['Livvic'] text-[0.938rem] font-semibold leading-[1.563rem] tracking-normal text-white xl:text-left xl:text-[1.125rem] xl:leading-[1.75rem]"
        >
          We help companies build dynamic teams made up of top global talent. Using our network of
          passionate professionals we drive innovation and deliver incredible outcomes. Talented,
          diverse teams shape the best products and experiences. We’ll bring those teams to you.
        </p>
      </div>
    </div>
  </section>
</template>
