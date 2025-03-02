<script setup>
import { defineAsyncComponent } from "vue";
import HeroSection from "@/components/homePageSections/HeroSection.vue";
import ProductsCat from "@/components/ProductsCat.vue";

// Lazy-load non-critical or heavy components to improve initial load performance.
// Using PascalCase for consistency and clarity as per Vue style guidelines.
const SpeakerProduct1 = defineAsyncComponent(() =>
  import("@/components/homePageSections/SpeakerProduct1.vue")
);
const SpeakerProduct2 = defineAsyncComponent(() =>
  import("@/components/homePageSections/SpeakerProduct2.vue")
);
const EarphonesPage = defineAsyncComponent(() =>
  import("@/components/homePageSections/EarphonesProduct.vue")
);
const AboutUs = defineAsyncComponent(() => import("@/components/AboutUs.vue"));
</script>

<template>
  <main aria-label="Main content">
    <HeroSection />
    <ProductsCat />
    <SpeakerProduct1 />
    <SpeakerProduct2 />
    <EarphonesPage />
    <AboutUs />
  </main>
</template>
