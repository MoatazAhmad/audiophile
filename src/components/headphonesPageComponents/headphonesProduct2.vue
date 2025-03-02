<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mt-20 mb-20" aria-labelledby="product-heading">
    <Container class="flex flex-col-reverse md:flex-row justify-between items-center gap-3 lg:gap-0">
      <header
        id="product-heading"
        class="sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
      >
        <div class="flex flex-col gap-2 rtl:md:text-right">
          <h1 class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]">
            XX99 Mark I <br class="hidden lg:block" />
            Headphones
          </h1>
        </div>
        <p class="lg:max-w-auto text-left rtl:text-right">
          {{ $t("headphonesProduct2.description") }}
        </p>
        <RouterLink
          :to="{ name: 'productPage', params: { slug: 'xx99-mark-one-headphones' } }"
          aria-label="View details for XX99 Mark I Headphones"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
        >
          {{ $t("heroSection.button") }}
        </RouterLink>
      </header>

      <figure class="img-container md:w-[45%] m-0">
        <picture>
          <source
            media="(max-width:678px)"
            srcset="/src/assets/images/product-xx99-mark-one-headphones/mobile/image-product.jpg"
          />
          <img
            src="/src/assets/images/product-xx99-mark-one-headphones/desktop/image-product.jpg"
           
            class="h-[500px] object-contain"
            loading="lazy"
            alt="XX99 Mark I Headphones"
          />
        </picture>
      </figure>
    </Container>
  </section>
</template>
