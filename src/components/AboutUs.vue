<script setup>
import Container from "./Container.vue";
</script>

<template>
  <section aria-labelledby="about-us-heading">
    <Container>
      <div
        class="flex flex-col-reverse lg:flex-row justify-between items-center mt-20 mb-10 gap-4 sm:gap-10"
      >
        <div
          class="text-container text-black w-full md:w-[70%] lg:w-1/2 h-full flex flex-col gap-5 lg:gap-10 items-start sm:items-center justify-center text-center lg:items-start lg:text-left rounded-md"
        >
          <header>
            <h1
              id="about-us-heading"
              class="text-3xl lg:text-5xl tracking-wider uppercase"
            >
              {{ $t("aboutUsSection.title1") }}
              <span class="text-[var(--design-orange)]">
                {{ $t("aboutUsSection.titleColoredWord") }}
              </span>
              {{ $t("aboutUsSection.title2") }}
            </h1>
          </header>
          <p class="text-[var(--medium-gray)] rtl:text-right">
            {{ $t("aboutUsSection.description") }}
          </p>
        </div>
        <figure class="img-container overflow-hidden rounded-md">
          <picture class="flex justify-center">
            <source
              media="(max-width:678px)"
              srcset="
                ../assets/images/home-page-product-images/mobile/image-best-gear.jpg
              "
              sizes="(max-width: 678px) 100vw, 678px"
            />
            <source
              media="(min-width: 679px) and (max-width: 1024px)"
              srcset="
                ../assets/images/home-page-product-images/tablet/image-best-gear.jpg
              "
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <img
              src="../assets/images/home-page-product-images/desktop/image-best-gear.jpg"
              class="w-full sm:w-auto"
              loading="lazy"
              alt="A man using headphones"
            />
          </picture>
        </figure>
      </div>
    </Container>
  </section>
</template>
