<script setup>
import { uuid } from 'vue-uuid';
import AvatarNikita from '../assets/images/avatar-nikita.jpg';
import AvatarChristian from '../assets/images/avatar-christian.jpg';
import AvatarCruz from '../assets/images/avatar-cruz.jpg';
import AvatarDrake from '../assets/images/avatar-drake.jpg';
import AvatarGriffin from '../assets/images/avatar-griffin.jpg';
import AvatarAden from '../assets/images/avatar-aden.jpg';
import IconCross from './icons/IconCross.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import BgPatternAbout2Contact1 from './icons/BgPatternAbout2Contact1.vue';
import BgPatternHome4About3 from './icons/BgPatternHome4About3.vue';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center overflow-hidden bg-deep-jungle-green pt-[5.5rem] pb-[7.25rem] md:pt-[6.25rem] md:pb-32"
  >
    <div
      class="pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 md:translate-y-0"
    >
      <BgPatternAbout2Contact1 />
    </div>
    <div class="pointer-events-none absolute bottom-0 right-0">
      <BgPatternHome4About3 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center gap-12 md:w-[74.60%]">
      <h2 class="w-full text-center text-[2rem] font-bold leading-8 tracking-normal text-white">
        Meet the directors
      </h2>
      <div
        class="grid w-full grid-cols-1 justify-center gap-[3.25rem] md:grid-cols-2 md:gap-x-[0.688rem] md:gap-y-[4.75rem]"
      >
        <div
          class="relative w-full bg-sacramento-state-green px-6 pt-8 pb-14"
          v-for="director in directors"
          :key="director.id"
        >
          <div
            class="flex w-full flex-col items-center gap-4 transition-opacity"
            :class="{ 'opacity-0': director.isActive }"
          >
            <div class="h-24 w-24 rounded-full border-2 border-solid border-[#C4FFFE]">
              <img class="h-full w-full rounded-full" :src="director.img" :alt="director.name" />
            </div>
            <div class="flex flex-col items-center">
              <h3 class="font-h3 text-rapture-blue">{{ director.name }}</h3>
              <div class="font-body-3">{{ director.position }}</div>
            </div>
          </div>
          <!-- Inner Content -->
          <div
            class="absolute top-0 left-0 flex w-full flex-col items-center gap-6 px-6 pt-8 transition-opacity"
            :class="{ 'opacity-0': !director.isActive }"
          >
            <div class="flex flex-col items-center gap-2">
              <h3 class="font-h3 text-center text-rapture-blue">{{ director.name }}</h3>
              <p class="font-body-2 w-[83.87%] text-center text-white md:w-full">
                {{ director.message }}
              </p>
            </div>
            <ul class="flex items-center gap-4">
              <li v-if="director.twitter">
                <a :href="director.twitter"><IconTwitter /></a>
              </li>
              <li v-if="director.linkedIn">
                <a :href="director.linkedIn"><IconLinkedIn /></a>
              </li>
            </ul>
          </div>
          <button
            class="absolute flex h-14 w-14 items-center justify-center rounded-full bg-light-coral transition-transform"
            :class="[
              director.isActive ? 'rotate-45 hover:bg-light-coral' : 'hover:bg-rapture-blue'
            ]"
            type="button"
            @click="toggleActive(director)"
          >
            <IconCross />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      directors: [
        {
          name: 'Nikita Marks',
          position: 'Founder & CEO',
          message: '“It always amazes me how much talent there is in every corner of the globe.”',
          img: AvatarNikita,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        },
        {
          name: 'Christian Duncan',
          position: 'Co-founder & COO',
          message:
            '“Distributed teams required unique processes. You need to approach work in a new way.”',
          img: AvatarChristian,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        },
        {
          name: 'Cruz Hamer',
          position: 'Co-founder & CTO',
          message:
            "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
          img: AvatarCruz,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        },
        {
          name: 'Drake Heaton',
          position: 'Business Development Lead',
          message:
            '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
          img: AvatarDrake,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        },
        {
          name: 'Griffin Wise',
          position: 'Lead Marketing',
          message:
            '“Unique perspectives shape unique products, which is what you need to survive these days.”',
          img: AvatarGriffin,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        },
        {
          name: 'Aden Allan',
          position: 'Head of Talent',
          message:
            '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
          img: AvatarAden,
          id: uuid.v4(),
          isActive: false,
          twitter: '/',
          linkedIn: '/'
        }
      ]
    };
  },
  methods: {
    toggleActive(director) {
      director.isActive = !director.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  left: calc(50% - 28px);
  bottom: -28px;
}
</style>
