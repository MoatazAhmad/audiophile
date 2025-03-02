<script setup>
import { defineAsyncComponent } from "vue";
import ProductsCat from "@/components/ProductsCat.vue";
import EarphonesPageProduct from "@/components/earphonesPageComponents/earphonesPageProduct.vue";
import AboutUs from "@/components/AboutUs.vue";
</script>

<template>
  <main class="mb-8" role="main">
    <h1
      class="bg-[#1a1a1a] text-white py-12 px-4 sm:py-16 sm:px-8 text-center text-3xl sm:text-4xl font-bold uppercase"
    >
      {{ $t("earphones") }}
    </h1>
    <EarphonesPageProduct />
    <ProductsCat />
    <AboutUs />
  </main>
</template>
