<script setup>
import LogoIconMobile from './icons/LogoIconMobile.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconPinterest from './icons/IconPinterest.vue';
</script>

<template>
  <footer class="flex w-full flex-col items-center bg-dark-green py-16">
    <div class="mb-6 flex w-[87.2%] flex-col items-center">
      <div class="flex w-full flex-col items-center gap-6">
        <a href="/">
          <LogoIconMobile />
        </a>
        <nav class="flex w-full flex-col items-center">
          <ul class="flex items-center gap-6">
            <li>
              <a class="font-body-2 text-white" href="/">home</a>
            </li>
            <li>
              <a class="font-body-2 text-white" href="/">about</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="font-body-2 mb-10 text-center text-white/60">
      987 Hillcrest Lane<br />
      Irvine, CA<br />
      California 92714<br />
      Call Us : 949-833-7432
    </div>
    <div class="flex flex-col items-center gap-4">
      <ul class="flex items-center gap-4">
        <li>
          <a href="/">
            <IconFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <IconPinterest />
          </a>
        </li>
        <li>
          <a href="/">
            <IconTwitter />
          </a>
        </li>
      </ul>
      <div class="font-body-2 text-white/60">Copyright 2023. All Rights Reserved</div>
    </div>
  </footer>
</template>
