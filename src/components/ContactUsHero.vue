<script setup>
import { uuid } from 'vue-uuid';
import IconPerson from '../assets/images/icon-person.svg';
import IconCog from '../assets/images/icon-cog.svg';
import IconChart from '../assets/images/icon-chart.svg';
</script>

<template>
  <section class="flex w-full flex-col items-center overflow-hidden pb-14">
    <div class="flex w-[87.2%] flex-col items-center gap-4">
      <h1 class="text-center text-[2.5rem] font-bold leading-[2.5rem] tracking-normal">Contact</h1>
      <div class="flex w-full flex-col items-center gap-10">
        <h2 class="text-center text-[2rem] font-bold leading-[2rem] text-light-coral">
          Ask us about
        </h2>
        <div class="flex w-full flex-col items-center gap-6">
          <div
            class="flex w-full items-center justify-center gap-[1.438rem]"
            v-for="question in questions"
            :key="question.id"
          >
            <div>
              <img :src="question.img" :alt="question.alt" />
            </div>
            <h3 class="font-h3 w-[14.5rem]">{{ question.text }}</h3>
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
