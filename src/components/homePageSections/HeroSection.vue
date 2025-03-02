<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section aria-label="Hero Section" role="region">
    <div
      class="bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-center bg-no-repeat text-white"
    >
      <Container
        class="flex flex-col justify-center text-center py-20 lg:py-40 gap-9 items-center lg:items-start"
      >
        <p class="text-[#ffffff42] tracking-[0.5rem] lg:tracking-[1.2rem] lg:text-[1.2rem] uppercase">
          {{ $t("heroSection.title") }}
        </p>
        <h1 class="text-3xl tracking-[0.25rem] font-bold lg:text-6xl lg:max-w-[500px] lg:text-left">
          XX99 Mark II Headphones
        </h1>
        <p class="text-[#bbb3b3] max-w-[300px] lg:max-w-auto text-left rtl:text-right">
          {{ $t("heroSection.description") }}
        </p>
        <RouterLink
          :to="{ name: 'productPage', params: { slug: 'xx99-mark-two-headphones' } }"
          class="ppercase py-5 w-40 rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
          aria-label="{{ $t('heroSection.button') }}"
        >
          {{ $t("heroSection.button") }}
        </RouterLink>
      </Container>
    </div>
  </section>
</template>
