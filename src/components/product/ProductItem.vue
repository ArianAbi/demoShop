<script setup lang="ts">
import { ref } from "vue";

const quantity = ref(0);

function AddToCart() {
  quantity.value += 1;
}

function RemoveFromCart() {
  if (quantity.value > 0) {
    quantity.value -= 1;
  }
}
</script>

<template>
  <div class="border-2 rounded-xl pb-5 overflow-hidden">
    <img src="/placeholder.webp" alt="placeholder" />
    <div class="w-full px-3">
      <h3 class="w-full text-center mt-3 mb-5">The Title of Product</h3>

      <span
        class="w-full block pb-3 text-right text-lg font-semibold text-emerald-400"
        >2.99$</span
      >
    </div>

    <div class="flex items-center justify-between gap-2 h-11 px-3">
      <!-- decrememt -->
      <button
        class="dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:active:bg-emerald-800 transition-colors duration-150 text-base font-semibold h-full aspect-square rounded-lg flex items-center justify-center"
        @click="RemoveFromCart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="size-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>
      </button>

      <!-- add to cart -->
      <button
        @click="
          () => {
            if (quantity === 0) quantity++;
          }
        "
        class="dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:active:bg-emerald-800 transition-colors duration-150 h-full w-full text-base font-semibold rounded-lg"
      >
        {{ quantity > 0 ? "Added" : "Add To Cart" }}
        {{ quantity > 0 ? quantity : "" }}
      </button>

      <!-- increment -->
      <button
        class="dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:active:bg-emerald-800 transition-colors duration-150 text-base font-semibold h-full aspect-square rounded-lg flex items-center justify-center"
        @click="AddToCart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
