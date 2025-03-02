<script setup>
import Container from "../Container.vue";
</script>
<template>
  <section aria-label="ZX7 Speaker Feature">
    <Container>
      <article
        class="flex justify-start items-center bg-image-speaker-zx7-mobile md:bg-image-speaker-zx7-tablet lg:bg-image-speaker-zx7-desktop rounded-md py-20 mt-20 mb-10 overflow-hidden gap-20 pl-20 rtl:pl-0 rtl:pr-20 bg-no-repeat bg-center bg-cover"
      >
        <div
          class="text-container text-black max-w-[400px] flex flex-col gap-10"
        >
          <h1 class="text-4xl font-bold uppercase">ZX7 Speaker</h1>
          <router-link
            :to="{
              name: 'productPage',
              params: { slug: 'zx7-speaker' },
            }"
            aria-label="View ZX7 Speaker details"
            class="uppercase py-5 w-40 text-center rounded-lg bg-transparent border text-black rtl:text-white cursor-pointer hover:bg-black hover:text-white duration-500"
          >
            {{ $t("heroSection.button") }}
          </router-link>
        </div>
      </article>
    </Container>
  </section>
</template>