<script setup>
import Container from "../Container.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

const fallbackImage = "/src/assets/images/placeholder.jpg";

function handleImageError(event) {
  event.target.src = fallbackImage;
}
</script>

<template>
  <section aria-labelledby="product-title" class="mt-20 mb-20">
    <Container
      class="flex justify-between items-center flex-col md:flex-row gap-3 lg:gap-0"
    >
      <figure class="md:w-[45%]">
        <picture>
          <source
            media="(max-width: 678px)"
            srcset="
              /src/assets/images/product-yx1-earphones/mobile/image-product.jpg
            "
          />

          <img
            src="/src/assets/images/product-yx1-earphones/desktop/image-product.jpg"
         
            class="object-contain"
            fetchpriority="high"
            alt="YX1 Wireless Earphones in their case"
            @error="handleImageError"
          />
        </picture>
      </figure>
      <article
        class="sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
      >
        <header class="flex flex-col gap-2">
          <span
            class="text-[var(--design-orange)] tracking-[0.5rem] lg:tracking-[1.2rem] lg:text-[1rem] uppercase"
          >
            {{ $t("headphonesProduct1.newProduct") }}
          </span>
          <h1
            id="product-title"
            class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]"
          >
            YX1 Wireless Earphones
          </h1>
        </header>
        <p class="text-left">
          {{ $t("earphonesPageProduct.description") }}
        </p>

        <RouterLink
          :to="{ name: 'productPage', params: { slug: 'yx1-earphones' } }"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
          role="button"
          :aria-label="$t('heroSection.button')"
        >
          {{ $t("heroSection.button") }}
        </RouterLink>
      </article>
    </Container>
  </section>
</template>
