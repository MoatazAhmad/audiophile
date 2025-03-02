<script setup>
/* Importing components with clear comments for maintainability */
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mt-20 mb-40" aria-label="Product Section: XX59 Headphones">
    <Container
      class="flex justify-between items-center flex-col md:flex-row gap-3 lg:gap-0"
    >
      <figure class="md:w-[45%]">
        <picture>
          <source
            media="(max-width: 678px)"
            srcset="
              /src/assets/images/product-xx59-headphones/mobile/image-product.jpg
            "
          />
          <img
            src="/src/assets/images/product-xx59-headphones/desktop/image-product.jpg"
            class="h-[500px] object-contain"
            loading="lazy"
            alt="XX59 Headphones"

            sizes="(max-width: 678px) 100vw, 50vw"
          />
        </picture>
      </figure>
      <article
        class="sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
      >
        <header class="flex flex-col gap-2">
          <h1
            class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]"
          >
            XX59 Headphones
          </h1>
        </header>
        <p class="text-left">
          {{ $t("headphonesProduct3.description") }}
        </p>
        <RouterLink
          :to="{ name: 'productPage', params: { slug: 'xx59-headphones' } }"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
          aria-label="View details for XX59 Headphones"
        >
          {{ $t("heroSection.button") }}
        </RouterLink>
      </article>
    </Container>
  </section>
</template>
