<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const hideThreshold = 120;

let prevScroll = 0;
let currentScroll = 0;

const isHidden = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  currentScroll = window.scrollY;

  if (currentScroll > hideThreshold) {
    isHidden.value = true;
  }

  if (window.scrollY < hideThreshold || currentScroll < prevScroll) {
    isHidden.value = false;
  }

  prevScroll = window.scrollY;
}
</script>

<template>
  <div class="h-[60px]"></div>
  <header
    :class="[
      'h-[60px] w-full px-6  bg-dark bg-opacity-80 backdrop-blur-md border-b-[1px] border-gray-400 flex items-center justify-between fixed transition-[top] duration-200',
      isHidden ? '-top-[60px]' : 'top-0',
    ]"
  >
    <div class="flex gap-6 items-center justify-between">
      <div class="px-3 py-1 border-[1px] rounded-lg">Profile</div>

      <!-- cart svg -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.3"
        stroke="currentColor"
        class="size-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>

    <div>LOGO</div>
  </header>
</template>
