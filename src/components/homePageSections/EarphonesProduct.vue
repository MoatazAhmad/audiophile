<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section aria-labelledby="yx1-earphones-heading">
    <Container>
      <article class="flex flex-col sm:flex-row justify-between items-center mt-20 mb-10 sm:h-[320px] gap-4 sm:gap-0">
        <figure class="w-full sm:w-1/2 lg:w-auto h-full overflow-hidden rounded-md">
          <picture>
            <source
              media="(max-width: 678px)"
              srcset="/src/assets/images/home-page-product-images/mobile/image-earphones-yx1.jpg"
              sizes="(max-width: 678px) 100vw, 50vw"
            />
            <source
              media="(min-width: 679px) and (max-width: 1024px)"
              srcset="/src/assets/images/home-page-product-images/tablet/image-earphones-yx1.jpg"
              sizes="(min-width: 679px) and (max-width: 1024px) 50vw, 33vw"
            />
            <img
              src="/src/assets/images/home-page-product-images/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones product image"
              class="w-full h-full object-cover"
              loading="lazy"
        
            />
          </picture>
        </figure>

        <div
          class="bg-[var(--light-gray)] w-full sm:w-1/2 h-full md:pl-12 rtl:md:pl-0 rtl:md:pr-12 flex flex-col gap-10 items-start py-10 px-5 md:p-0 sm:items-center justify-center text-center lg:items-start lg:text-left rounded-md"
        >
          <header>
            <h1 id="yx1-earphones-heading" class="text-4xl font-bold uppercase">
              YX1 Earphones
            </h1>
          </header>
          <RouterLink
            :to="{ name: 'productPage', params: { slug: 'yx1-earphones' } }"
            class="uppercase py-5 w-40 text-center rounded-lg bg-transparent border text-black cursor-pointer hover:bg-black hover:text-white duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            aria-label="View product details for YX1 Earphones"
          >
            {{ $t("heroSection.button") }}
          </RouterLink>
        </div>
      </article>
    </Container>
  </section>
</template>
