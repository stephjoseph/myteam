<script setup>
import { uuid } from 'vue-uuid';
import TheVerge from '../assets/images/logo-the-verge.png';
import TheJakartaPost from '../assets/images/logo-jakarta-post.png';
import TheGuardian from '../assets/images/logo-the-guardian.png';
import TechRadar from '../assets/images/logo-tech-radar.png';
import GadgetsNow from '../assets/images/logo-gadgets-now.png';
import BgPatternAbout4 from './icons/BgPatternAbout4.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-hidden bg-sacramento-state-green py-[5.5rem] md:py-[6.25rem] xl:py-[8.75rem]"
  >
    <div
      class="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 xl:-translate-y-0"
    >
      <BgPatternAbout4 />
    </div>
    <div
      class="z-10 flex w-[87.2%] flex-col items-center gap-16 md:w-[89.71%] md:gap-12 xl:w-[77.08%]"
    >
      <h2
        class="text-[2rem] font-bold leading-[2rem] tracking-normal text-white xl:text-[3rem] xl:leading-[3rem]"
      >
        Some of our clients
      </h2>
      <div
        class="flex w-[49.54%] flex-col items-center gap-14 md:w-[43.063rem] md:flex-row md:justify-between md:gap-0 xl:w-full"
      >
        <div class="client" v-for="client in clients" :key="client.id">
          <img :src="client.img" :alt="client.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          name: 'The Verge',
          img: TheVerge,
          id: uuid.v4()
        },
        {
          name: 'The Jakarta Post',
          img: TheJakartaPost
        },
        {
          name: 'The Guardian',
          img: TheGuardian,
          id: uuid.v4()
        },
        {
          name: 'Tech Radar',
          img: TechRadar,
          id: uuid.v4()
        },
        {
          name: 'Gadgets Now',
          img: GadgetsNow,
          id: uuid.v4()
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.client {
  &:first-of-type {
    img {
      @apply w-[9.188rem] md:w-[6.438rem] xl:w-[10.313rem];
    }
  }

  &:nth-of-type(2) {
    img {
      @apply w-[10.125rem] md:w-[7.125rem] xl:w-[11.5rem];
    }
  }

  &:nth-of-type(3) {
    img {
      @apply w-[10rem] md:w-[7rem] xl:w-[11.25rem];
    }
  }

  &:nth-of-type(4) {
    img {
      @apply w-[9.188rem] md:w-[6.438rem] xl:w-[10.313rem];
    }
  }

  &:last-of-type {
    img {
      @apply w-[5.438rem] md:w-[3.813rem] xl:w-[6.125rem];
    }
  }
}
</style>
