<script setup>
import TheVerge from '../assets/images/logo-the-verge.png';
import TheJakartaPost from '../assets/images/logo-jakarta-post.png';
import TheGuardian from '../assets/images/logo-the-guardian.png';
import TechRadar from '../assets/images/logo-tech-radar.png';
import GadgetsNow from '../assets/images/logo-gadgets-now.png';
import BgPatternAbout4 from './icons/BgPatternAbout4.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-hidden overflow-hidden bg-sacramento-state-green py-[5.5rem]"
  >
    <div class="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
      <BgPatternAbout4 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center gap-16">
      <h2 class="text-[2rem] font-bold leading-[2rem] tracking-normal text-white">
        Some of our clients
      </h2>
      <div class="flex w-[49.54%] flex-col items-center gap-14">
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
          img: TheVerge
        },
        {
          name: 'The Jakarta Post',
          img: TheJakartaPost
        },
        {
          name: 'The Guardian',
          img: TheGuardian
        },
        {
          name: 'Tech Radar',
          img: TechRadar
        },
        {
          name: 'Gadgets Now',
          img: GadgetsNow
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
      @apply w-[9.188rem];
    }
  }

  &:nth-of-type(2) {
    img {
      @apply w-[10.125rem];
    }
  }

  &:nth-of-type(3) {
    img {
      @apply w-[10rem];
    }
  }

  &:nth-of-type(4) {
    img {
      @apply w-[9.188rem];
    }
  }

  &:last-of-type {
    img {
      @apply w-[5.438rem];
    }
  }
}
</style>
