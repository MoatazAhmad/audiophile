<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mt-20 mb-40" aria-labelledby="product-title">
    <Container class="flex justify-between items-center flex-col-reverse md:flex-row gap-3 lg:gap-0">
      <article class="text-container sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left">
        <header>
          <h1 id="product-title" class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]">
            ZX7 Speaker
          </h1>
        </header>
        <p class="lg:max-w-auto text-left rtl:text-right">
          {{ $t("speakersProduct2.description") }}
        </p>
        <RouterLink
          :to="{ name: 'productPage', params: { slug: 'zx7-speaker' } }"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
        >
          {{ $t("heroSection.button") }}
        </RouterLink>
      </article>
      <figure class="img-container md:w-[45%]">
        <picture>
          <source
            media="(max-width: 678px)"
            srcset="/src/assets/images/product-zx7-speaker/mobile/image-product.jpg"
          />
          <img
            src="/src/assets/images/product-zx7-speaker/desktop/image-product.jpg"
            loading="lazy"
            alt="ZX7 Speaker – premium audio product"
            class="h-[500px] object-contain"
            
            sizes="(max-width: 678px) 100vw, 45vw"
          />
        </picture>
      </figure>
    </Container>
  </section>
</template>
