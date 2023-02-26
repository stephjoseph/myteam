<script setup>
import { uuid } from 'vue-uuid';
import IconQuotes from './icons/IconQuotes.vue';
import BgPatternHome4About3 from './icons/BgPatternHome4About3.vue';
import BgPatternHome5 from './icons/BgPatternHome5.vue';
import AvatarKady from '../assets/images/avatar-kady.jpg';
import AvatarAiysha from '../assets/images/avatar-aiysha.jpg';
import AvatarArthur from '../assets/images/avatar-arthur.jpg';
</script>

<template>
  <section
    class="relative flex w-full flex-col items-center bg-deep-jungle-green pt-[8.75rem] pb-[10.25rem]"
  >
    <div class="pointer-events-none absolute top-0 left-0">
      <BgPatternHome4About3 />
    </div>
    <div class="pointer-events-none absolute bottom-0 right-0">
      <BgPatternHome5 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center gap-[5.25rem]">
      <h2 class="text-center text-[2rem] font-bold leading-8 tracking-normal">
        Delivering real results for top companies. Some of our
        <span class="text-rapture-blue">success stories.</span>
      </h2>
      <div class="flex w-full flex-col items-center gap-[5.25rem]">
        <div
          class="relative flex flex-col items-center gap-4 text-center"
          v-for="testimonial in testimonials"
          :key="testimonial.id"
        >
          <div class="pointer-events-none absolute -top-9">
            <IconQuotes />
          </div>
          <p class="font-body-2 z-10 text-white">{{ testimonial.testimonial }}</p>
          <div class="z-10 flex flex-col items-center gap-4 text-center">
            <div class="flex flex-col items-center gap-[0.125rem]">
              <h3 class="font-h3 text-rapture-blue">{{ testimonial.name }}</h3>
              <div class="font-body-3">{{ testimonial.jobTitle }}</div>
            </div>
            <div class="h-[3.875rem] w-[3.875rem] rounded-full border-2 border-[#C4FFFE]">
              <img
                class="h-full w-full rounded-full"
                :src="testimonial.img"
                :alt="testimonial.name"
              />
            </div>
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
      testimonials: [
        {
          name: 'Kady Baker',
          jobTitle: 'Product Manager at Bookmark',
          testimonial:
            '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
          img: AvatarKady,
          id: uuid.v4()
        },
        {
          name: 'Aiysha Reese',
          jobTitle: 'Founder of Manage',
          testimonial:
            '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
          img: AvatarAiysha,
          id: uuid.v4()
        },
        {
          name: 'Arthur Clarke',
          jobTitle: 'Co-founder of MyPhysio',
          testimonial:
            '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
          img: AvatarArthur,
          id: uuid.v4()
        }
      ]
    };
  }
};
</script>
