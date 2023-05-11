<script setup>
import BgPatternHome6About5 from './icons/BgPatternHome6About5.vue';
</script>

<template>
  <section
    class="xl:py-[4.875re ] relative flex w-full flex-col items-center overflow-y-hidden bg-light-coral py-[5.188rem] md:py-[4.75rem]"
  >
    <div
      class="pointer-events-none absolute bottom-0 left-0 translate-y-[22px] xl:translate-y-[0px]"
    >
      <BgPatternHome6About5 />
    </div>
    <div
      class="z-10 flex w-[87.2%] flex-col items-center gap-6 md:w-[74.60%] md:flex-row md:justify-between xl:w-[63.68%]"
    >
      <h2
        class="text-center text-[2rem] font-bold leading-8 tracking-normal text-sacramento-state-green xl:text-[3rem] xl:leading-[3rem]"
      >
        Ready to get started?
      </h2>
      <router-link class="btn-primary-dark" to="/contact-us">contact us</router-link>
    </div>
  </section>
</template>
