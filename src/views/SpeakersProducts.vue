<script setup>
import { defineAsyncComponent } from 'vue';

import ProductsCat from "@/components/ProductsCat.vue";
import SpeakersProduct1 from "@/components/speakersPageComponents/speakersProduct1.vue";
import SpeakersProduct2 from "@/components/speakersPageComponents/speakersProduct2.vue";

const AboutUs = defineAsyncComponent(() => import("@/components/AboutUs.vue"));
</script>

<template>
  <main class="mb-30" role="main">
    <h1 class="bg-[#1a1a1a] text-white p-[50px] text-center text-[40px] font-bold uppercase">
      {{ $t("speakers") }}
    </h1>
    <SpeakersProduct1 />
    <SpeakersProduct2 />
    <ProductsCat />
    <AboutUs />
  </main>
</template>