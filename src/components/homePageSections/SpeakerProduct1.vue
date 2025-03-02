<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section aria-label="Featured Product">
    <Container>
      <article
        class="flex flex-col lg:flex-row justify-center items-center bg-[var(--design-orange)] rounded-md py-12 mt-20 mb-10 overflow-hidden gap-20"
        role="region"
        aria-labelledby="featured-product-title"
      >
        <figure class="img-container mb-[-60px]">
          <picture>
            <source
              media="(max-width:678px)"
              srcset="/src/assets/images/home-page-product-images/mobile/image-speaker-zx9.png"
            />
            <source
              media="(min-width:679px) and (max-width:1024px)"
              srcset="/src/assets/images/home-page-product-images/tablet/image-speaker-zx9.png"
            />
            <img
              src="/src/assets/images/home-page-product-images/desktop/image-speaker-zx9.png"
              class="max-w-[150px] md:max-w-[400px]"
              loading="lazy"
              alt="ZX9 Speaker"
            
              sizes="(max-width: 678px) 150px, (max-width: 1024px) 400px, 400px"
            />
          </picture>
        </figure>
        <div
          class="text-container text-white max-w-[400px] flex flex-col gap-10 items-center text-center lg:items-start lg:text-left"
        >
          <h2 id="featured-product-title" class="text-5xl font-black uppercase">
            ZX9 <br class="hidden lg:block" />
            Speaker
          </h2>
          <p>
            {{ $t("product1Section.description") }}
          </p>
          <RouterLink
            :to="{ name: 'productPage', params: { slug: 'zx9-speaker' } }"
            class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-black)] text-white hover:bg-[#383838] duration-500"
          >
            {{ $t("heroSection.button") }}
          </RouterLink>
        </div>
      </article>
    </Container>
  </section>
</template>
