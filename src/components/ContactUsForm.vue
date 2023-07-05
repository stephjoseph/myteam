<script setup>
import BgPatternContact2 from './icons/BgPatternContact2.vue';
</script>

<template>
  <section
    class="flex w-full flex-col items-center overflow-hidden pb-[5.5rem] md:pb-[7rem] xl:w-[48.64%] xl:pb-0"
  >
    <div
      class="pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 md:translate-y-0"
    >
      <BgPatternContact2 />
    </div>

    <div class="z-10 flex w-[87.2%] flex-col items-center md:w-[70.57%] xl:w-full">
      <form class="flex w-full flex-col items-start gap-6" ref="contactForm">
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
          <p
            class="help absolute hidden pl-[0.875rem] pt-2 font-['Livvic'] text-[0.625rem] font-bold italic leading-[0.813rem] text-light-coral"
          >
            Please enter a valid name.
          </p>
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
          <p
            class="help absolute hidden pl-[0.875rem] pt-2 font-['Livvic'] text-[0.625rem] font-bold italic leading-[0.813rem] text-light-coral"
          >
            Please enter a valid email address.
          </p>
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
          <p
            class="help absolute hidden pl-[0.875rem] pt-2 font-['Livvic'] text-[0.625rem] font-bold italic leading-[0.813rem] text-light-coral"
          >
            Please enter a valid company name.
          </p>
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
          <p
            class="help absolute hidden pl-[0.875rem] pt-2 font-['Livvic'] text-[0.625rem] font-bold italic leading-[0.813rem] text-light-coral"
          >
            Please enter a valid message.
          </p>
        </div>
        <button class="btn-secondary-light mt-2" type="submit">submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    initForm() {
      const form = this.$refs.contactForm;
      form.noValidate = true;

      form.addEventListener('submit', this.validateForm);
    },
    validateForm(e) {
      const form = e.target;
      const inputs = Array.from(form.elements);

      inputs.forEach((input) => {
        if (input.checkValidity()) {
          // field is valid - remove class
          console.log('valid', input.id);
          input.parentElement.classList.remove('invalid');
          input.parentElement.classList.add('valid');
        } else {
          // field is invalid - add class
          console.log('invalid', input.id);
          input.parentElement.classList.remove('valid');
          input.parentElement.classList.add('invalid');
          if (input.validity.valueMissing && input.nextElementSibling) {
            input.nextElementSibling.innerText = 'This field is required';
          } else if (input.nextElementSibling) {
            input.nextElementSibling.innerText = `Please enter valid ${input.name.replace(
              /-/g,
              ' '
            )}`;
          }
        }
      });

      if (!form.checkValidity()) {
        // form is invalid - cancel submit
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
  },
  mounted() {
    this.initForm();
  }
};
</script>

<style lang="scss" scoped>
form {
  .invalid {
    .help {
      @apply block;
    }

    input,
    textarea,
    .help {
      @apply border-light-coral placeholder:text-light-coral/60;
    }
  }

  .valid {
    input,
    textarea {
      @apply border-rapture-blue;
    }
  }
}
</style>
