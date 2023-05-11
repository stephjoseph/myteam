<script setup>
import { uuid } from 'vue-uuid';
import IconPerson from '../assets/images/icon-person.svg';
import IconCog from '../assets/images/icon-cog.svg';
import IconChart from '../assets/images/icon-chart.svg';
import BgPatternHome3 from './icons/BgPatternHome3.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-x-hidden bg-sacramento-state-green py-16 md:py-[6.25rem] xl:py-[7.813rem]"
  >
    <div
      class="pointer-events-none absolute top-0 right-0 translate-x-1/2 xl:top-full xl:-translate-y-full"
    >
      <BgPatternHome3 />
    </div>
    <div
      class="z-10 flex w-[87.2%] flex-col items-center gap-14 md:w-[74.60%] md:gap-16 xl:w-[77.08%] xl:flex-row xl:items-start"
    >
      <div class="flex w-full flex-col gap-8 xl:w-[40.09%] xl:gap-14">
        <div class="h-1 w-[3.125rem] bg-light-coral"></div>
        <h2
          class="w-[73.39%] text-[2rem] font-bold leading-8 tracking-normal md:w-[77.66%] xl:w-full xl:text-[3rem] xl:leading-[3rem]"
        >
          Build & manage distributed teams like no one else.
        </h2>
      </div>
      <div class="flex w-full flex-col items-center gap-12 md:gap-8 xl:mt-[3.625rem] xl:w-[48.64%]">
        <div
          class="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6"
          v-for="feature in features"
          :key="feature.id"
        >
          <div class="flex h-[4.5rem] w-[4.5rem] justify-end">
            <img :src="feature.img" :alt="feature.alt" />
          </div>
          <div
            class="flex flex-col items-center gap-2 text-center md:w-[83.42%] md:items-start md:gap-4 md:text-left"
          >
            <h3 class="font-h3 text-light-coral">
              {{ feature.title }}
            </h3>
            <p class="font-body-2 text-white/80">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Experienced Individuals',
          text: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
          img: IconPerson,
          alt: 'Person icon',
          id: uuid.v4()
        },
        {
          title: 'Easy to Implement',
          text: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
          img: IconCog,
          alt: 'Cog icon',
          id: uuid.v4()
        },
        {
          title: 'Enhanced Productivity',
          text: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
          img: IconChart,
          alt: 'Chart icon',
          id: uuid.v4()
        }
      ]
    };
  }
};
</script>
