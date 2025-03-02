<script setup>
import { defineAsyncComponent } from "vue";

import ProductsCat from "@/components/ProductsCat.vue";
import HeadphonesProduct1 from "@/components/headphonesPageComponents/headphonesProduct1.vue";
import HeadphonesProduct2 from "@/components/headphonesPageComponents/headphonesProduct2.vue";
import HeadphonesProduct3 from "@/components/headphonesPageComponents/headphonesProduct3.vue";
import AboutUs from "@/components/AboutUs.vue";
</script>

<template>
  <!-- Added role="main" for improved accessibility -->
  <main class="mb-30" role="main">
    <h1
      class="bg-[#1a1a1a] text-white p-[50px] text-center text-[40px] font-bold uppercase"
    >
      {{ $t("headphones") }}
    </h1>
    <!-- Updated component tags to use PascalCase and self-closing tags for consistency and cleaner markup -->
    <HeadphonesProduct1 />
    <HeadphonesProduct2 />
    <HeadphonesProduct3 />
    <ProductsCat />
    <AboutUs />
  </main>
</template>
