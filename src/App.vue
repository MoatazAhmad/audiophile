<script setup>
import headerComponent from "@/components/header.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { watch, reactive } from "vue";

const route = useRoute();

const head = reactive({
  // title:
  //   "Audiophile - High-Quality Headphones, Speakers, and Audio Accessories",
  // meta: [
  //   {
  //     name: "description",
  //     content:
  //       "Discover the best audio products at Audiophile. Shop high-quality headphones, speakers, and audio accessories for an unparalleled listening experience.",
  //   },
  //   {
  //     property: "og:title",
  //     content:
  //       "ogtitlefromapp.vue",
  //   },
  // ],
});

useHead(head);

// Watch the route meta for changes and update the head accordingly
watch(
  () => route.meta,
  (meta) => {
    head.title = meta.title || "Audiophile - Home";
    head.meta = meta.metaTags || [
      {
        name: "description",
        content:
          "Discover the best audio products at Audiophile. Shop high-quality headphones, speakers, and audio accessories for an unparalleled listening experience.",
      },
    ];
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <headerComponent></headerComponent>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
