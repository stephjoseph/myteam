<script setup>
import { uuid } from 'vue-uuid';
import IconPerson from '../assets/images/icon-person.svg';
import IconCog from '../assets/images/icon-cog.svg';
import IconChart from '../assets/images/icon-chart.svg';
import BgPatternAbout2Contact1 from './icons/BgPatternAbout2Contact1.vue';
</script>

<template>
  <section
    class="flex w-full flex-col items-center overflow-hidden pb-14 md:pb-16 xl:w-[48.64%] xl:pb-0"
  >
    <div class="absolute top-0 left-0 hidden -translate-x-1/2 md:block">
      <BgPatternAbout2Contact1 />
    </div>
    <div
      class="z-10 flex w-[87.2%] flex-col items-center gap-4 md:w-[67.05%] md:gap-6 xl:w-full xl:items-start xl:gap-4"
    >
      <h1
        class="text-center text-[2.5rem] font-bold leading-[2.5rem] tracking-normal md:text-[4rem] md:leading-[3.5rem] xl:leading-[6.25rem]"
      >
        Contact
      </h1>
      <div class="flex w-full flex-col items-center gap-10 md:gap-6 xl:items-start xl:gap-8">
        <h2
          class="text-center text-[2rem] font-bold leading-[2rem] tracking-normal text-light-coral md:leading-[3rem]"
        >
          Ask us about
        </h2>
        <div class="flex w-full flex-col items-center gap-6 md:gap-2">
          <div
            class="flex w-full items-center justify-center gap-[1.438rem]"
            v-for="question in questions"
            :key="question.id"
          >
            <div class="flex h-[4.5rem] w-[4.5rem] justify-end">
              <img :src="question.img" :alt="question.alt" />
            </div>
            <h3 class="font-h3 w-[14.5rem] flex-grow md:w-auto">{{ question.text }}</h3>
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
      questions: [
        {
          text: 'The quality of our talent network',
          img: IconPerson,
          alt: 'Person icon',
          id: uuid.v4()
        },
        {
          text: 'Usage & implementation of our software',
          img: IconCog,
          alt: 'Cog icon',
          id: uuid.v4()
        },
        { text: 'How we help drive innovation', img: IconChart, alt: 'Chart icon', id: uuid.v4() }
      ]
    };
  }
};
</script>
