<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="my-20">
    <Container class="flex justify-between items-center flex-col md:flex-row gap-3 lg:gap-0">
      <figure class="img-container md:w-[45%]">
        <picture>
          <source
            media="(max-width:678px)"
            srcset="/src/assets/images/product-zx9-speaker/mobile/image-product.jpg"
          />
          <img
            src="/src/assets/images/product-zx9-speaker/desktop/image-product.jpg"
            class="h-[500px] object-contain"
            fetchpriority="high"
                     
            alt="ZX9 Wireless Speaker in Black"  
          />
        </picture>
      </figure>
      <article class="text-container sm:w-[500px] md:w-1/2 flex flex-col gap-10 items-center md:items-start text-center md:text-left">
        <header class="flex flex-col gap-2">
          <span
            class="text-[var(--design-orange)] tracking-[0.5rem] lg:tracking-[1.2rem] lg:text-[1rem] uppercase"
          >
            {{ $t("headphonesProduct1.newProduct") }}
          </span>
          <h1 class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]">
            ZX9 Speaker
          </h1>
        </header>
        <p class="text-left">
          {{ $t("speakersProduct1.description") }}
        </p>
        <router-link
          :to="{ name: 'productPage', params: { slug: 'zx9-speaker' } }"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
          aria-label="View details about ZX9 Speaker"
        >
          {{ $t("heroSection.button") }}
        </router-link>
      </article>
    </Container>
  </section>
</template>
