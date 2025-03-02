<script setup>
import Container from "./Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="mt-40 mb-30" aria-label="Product Categories">
    <Container
      class="flex items-center justify-center gap-48 md:gap-4 flex-col md:flex-row"
    >
      <RouterLink
        to="/headphones"
        class="w-full md:w-1/3 flex flex-col items-center h-[200px] justify-end relative group"
        :aria-label="$t('categorySection.cat1.name') + ' category'"
      >
        <img
          src="../assets/images/image-category-thumbnail-headphones.png"
          class="w-60 h-60 object-contain absolute top-[-120px]"
          alt="Black headphones with a golden ring around the earpiece"
          loading="lazy"
          
        />
        <div
          class="bg-[var(--light-gray)] w-full flex flex-col items-center gap-2 p-2 pt-[100px] pb-[40px]"
        >
          <h2
            class="uppercase tracking-widest text-2xl z-10 group-hover:text-[var(--design-orange)] duration-500"
          >
            {{ $t("categorySection.cat1.name") }}
          </h2>
          <span
            class="text-[var(--medium-gray)] uppercase flex items-center gap-3 group-hover:text-[var(--design-orange)] duration-500"
          >
            {{ $t("categorySection.cat1.button") }}
            <img
              src="../assets/images/icon-arrow-right.svg"
              alt="Arrow pointing right"
              loading="lazy"
            />
          </span>
        </div>
      </RouterLink>
      <RouterLink
        to="/speakers"
        class="w-full md:w-1/3 flex flex-col items-center h-[200px] justify-end relative group"
        :aria-label="$t('categorySection.cat2.name') + ' category'"
      >
        <img
          src="../assets/images/image-category-thumbnail-speakers.png"
          class="w-60 h-60 object-contain absolute top-[-120px]"
          alt="Black speakers showing contrast with a white speaker"
          loading="lazy"
          
        />
        <div
          class="bg-[var(--light-gray)] w-full flex flex-col items-center gap-2 p-2 pt-[100px] pb-[40px]"
        >
          <h2
            class="uppercase tracking-widest text-2xl z-10 group-hover:text-[var(--design-orange)] duration-500"
          >
            {{ $t("categorySection.cat2.name") }}
          </h2>
          <span
            class="text-[var(--medium-gray)] uppercase flex items-center gap-3 group-hover:text-[var(--design-orange)] duration-500 cursor-pointer"
          >
            {{ $t("categorySection.cat2.button") }}
            <img
              src="../assets/images/icon-arrow-right.svg"
              alt="Arrow pointing right"
              loading="lazy"
            />
          </span>
        </div>
      </RouterLink>
      <RouterLink
        to="/earphones"
        class="w-full md:w-1/3 flex flex-col items-center h-[200px] justify-end relative group"
        :aria-label="$t('categorySection.cat3.name') + ' category'"
      >
        <img
          src="../assets/images/image-category-thumbnail-earphones.png"
          class="w-60 h-60 object-contain absolute top-[-120px]"
          alt="Black earphones in a black case"
          loading="lazy"
        />
        <div
          class="bg-[var(--light-gray)] w-full flex flex-col items-center gap-2 p-2 pt-[100px] pb-[40px]"
        >
          <h2
            class="uppercase tracking-widest text-2xl z-10 group-hover:text-[var(--design-orange)] duration-500"
          >
            {{ $t("categorySection.cat3.name") }}
          </h2>
          <span
            class="text-[var(--medium-gray)] uppercase flex items-center gap-3 group-hover:text-[var(--design-orange)] duration-500 cursor-pointer"
          >
            {{ $t("categorySection.cat3.button") }}
            <img
              src="../assets/images/icon-arrow-right.svg"
              alt="Arrow pointing right"
              loading="lazy"
            />
          </span>
        </div>
      </RouterLink>
    </Container>
  </section>
</template>
