<script setup>
import BgPatternContact2 from './icons/BgPatternContact2.vue';
</script>

<template>
  <section class="relative flex w-full flex-col items-center overflow-hidden pb-[5.5rem]">
    <div class="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
      <BgPatternContact2 />
    </div>
    <div class="z-10 flex w-[87.2%] flex-col items-center">
      <form class="flex w-full flex-col items-start gap-6">
        <div class="relative w-full">
          <label class="pointer-events-none invisible absolute" for="name">Name</label>
          <input
            class="font-body-2 w-full border-b border-solid border-white bg-transparent pb-4 pl-[0.875rem] tracking-[-0.2px] text-white placeholder:text-white/60 focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="relative w-full">
          <label class="pointer-events-none invisible absolute" for="email">Email</label>
          <input
            class="font-body-2 w-full border-b border-solid border-white bg-transparent pb-4 pl-[0.875rem] tracking-[-0.2px] text-white placeholder:text-white/60 focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div class="relative w-full">
          <label class="pointer-events-none invisible absolute" for="company-name"
            >Company Name</label
          >
          <input
            class="font-body-2 w-full border-b border-solid border-white bg-transparent pb-4 pl-[0.875rem] tracking-[-0.2px] text-white placeholder:text-white/60 focus:outline-none"
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Company Name"
            required
          />
        </div>
        <div class="relative w-full">
          <label class="pointer-events-none invisible absolute" for="title">Title</label>
          <input
            class="font-body-2 w-full border-b border-solid border-white bg-transparent pb-4 pl-[0.875rem] tracking-[-0.2px] text-white placeholder:text-white/60 focus:outline-none"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            required
          />
        </div>
        <div class="relative w-full">
          <label class="pointer-events-none invisible absolute" for="message">Message</label>
          <textarea
            class="font-body-2 flex w-full items-start border-b border-solid border-white bg-transparent pb-4 pl-[0.875rem] tracking-[-0.2px] text-white placeholder:text-white/60 focus:outline-none"
            type="textarea"
            name="message"
            id="message"
            placeholder="Message"
            required
            rows="3"
          />
        </div>
        <button class="btn-secondary-light" type="submit">submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>
