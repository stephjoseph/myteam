<script setup>
import LogoIconMobile from './icons/LogoIconMobile.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconPinterest from './icons/IconPinterest.vue';
</script>

<template>
  <footer class="flex w-full flex-col items-center bg-dark-green py-16 md:py-14">
    <div class="flex w-[87.2%] flex-col items-center gap-10 md:w-[89.71%] md:gap-8">
      <div class="flex w-full flex-col items-center gap-6 md:flex-row md:justify-between">
        <div class="flex w-full flex-col items-center md:w-auto">
          <div class="flex w-full flex-col items-center gap-6 md:items-start md:gap-14">
            <a href="/">
              <LogoIconMobile />
            </a>
            <nav class="flex w-full flex-col items-center md:items-start">
              <ul class="flex items-center gap-6">
                <li>
                  <router-link class="font-body-2 text-white" to="/">home</router-link>
                </li>
                <li>
                  <router-link class="font-body-2 text-white" to="/about">about</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="font-body-2 w-full text-center text-white/60 md:w-auto md:text-right">
          987 Hillcrest Lane<br />
          Irvine, CA<br />
          California 92714<br />
          Call Us : 949-833-7432
        </div>
      </div>
      <div class="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
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
    </div>
  </footer>
</template>
