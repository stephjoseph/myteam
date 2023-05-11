<script setup>
import BgPatternHome1 from './icons/BgPatternHome1.vue';
import BgPatternHome2 from './icons/BgPatternHome2.vue';
</script>

<template>
  <section
    class="relative flex w-[87.2%] flex-col items-center gap-[1.125rem] pb-[12.313rem] text-center md:w-[88.93%] md:gap-6 md:pb-64 xl:w-[77.08%] xl:flex-row xl:items-start xl:gap-[1.875rem] xl:pb-[15.625rem] xl:text-left"
  >
    <div class="pointer-events-none absolute -left-[16.563rem] z-0 hidden xl:block">
      <BgPatternHome1 />
    </div>
    <div class="pointer-events-none absolute bottom-0 z-0 xl:right-0">
      <BgPatternHome2 />
    </div>
    <h1
      class="z-10 w-full text-[2.5rem] font-bold leading-[2.5rem] tracking-normal md:text-[4rem] md:leading-[3.5rem] xl:w-[57.21%] xl:text-[6.25rem] xl:leading-[6.25rem]"
    >
      Find the<br />
      best <span class="text-light-coral">talent</span>
    </h1>

    <div class="flex flex-col gap-20 xl:w-[40.09%]">
      <div class="hidden h-1 w-[3.125rem] bg-rapture-blue xl:block"></div>
      <p class="font-body-2 z-10 xl:text-lg">
        Finding the right people and building high performing teams can be hard. Most companies
        aren’t tapping into the abundance of global talent. We’re about to change that.
      </p>
    </div>
  </section>
</template>
