<script setup>
  import Container from "../Container.vue";
</script>

<template>
  <section class="mt-20 mb-20" aria-labelledby="product-heading">
    <Container class="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-0">
      <figure class="md:w-[45%]">
        <picture>
          <source
            media="(max-width: 678px)"
            srcset="/src/assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg"
          />
          <!-- src="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg" -->
          <img
            src="/src/assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg"
            alt="XX99 Mark II Headphones"
            class="h-[500px] object-contain"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <figcaption class="sr-only">XX99 Mark II Headphones</figcaption>
      </figure>
      <article class="sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left">
        <header class="flex flex-col gap-2">
          <p class="text-[var(--design-orange)] tracking-[0.5rem] lg:tracking-[1.2rem] lg:text-[1rem] uppercase">
            {{ $t("headphonesProduct1.newProduct") }}
          </p>
          <h1 id="product-heading" class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl text-[#212529]">
            XX99 Mark II <br class="hidden lg:block" />
            Headphones
          </h1>
        </header>
        <p class="lg:max-w-auto text-left">
          {{ $t("headphonesProduct1.description") }}
        </p>
        <router-link
          :to="{ name: 'productPage', params: { slug: 'xx99-mark-two-headphones' } }"
          class="uppercase py-5 w-40 text-center rounded-lg bg-[var(--design-orange)] text-white hover:bg-[#f1ab83] transition duration-500"
          aria-label="View product details for XX99 Mark II Headphones"
        >
          {{ $t("heroSection.button") }}
        </router-link>
      </article>
    </Container>
  </section>
</template>
