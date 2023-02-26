<script setup>
import BgPatternHome6About5 from './icons/BgPatternHome6About5.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-y-hidden bg-light-coral py-[5.188rem]"
  >
    <div class="pointer-events-none absolute bottom-0 left-0 translate-y-[22px]">
      <BgPatternHome6About5 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center gap-6">
      <h2
        class="text-center text-[2rem] font-bold leading-8 tracking-normal text-sacramento-state-green"
      >
        Ready to get started?
      </h2>
      <a class="btn-primary-dark" href="/contact-us"> contact us </a>
    </div>
  </section>
</template>
