<script setup>
import ProductsCat from "@/components/ProductsCat.vue";
import AboutUs from "@/components/AboutUs.vue";
import Container from "@/components/Container.vue";
import { useCartStore } from "@/stores/cartLogic";
import { useProduct } from "@/composables/useProduct";

const cartStore = useCartStore();

const {
  currentProduct,
  productImageDesktop,
  productImageMobile,
  productNew,
  productName,
  productDesc,
  productPrice,
  productFeatures,
  includedItems,
  galleryImages,
  otherProducts,
  count,
  increment,
  decrement,
} = useProduct();
function handleAddToCart() {
  try {
    if (currentProduct && currentProduct.id) {
      cartStore.addToCart({
        id: currentProduct.id,
        name: productName.value,
        image: productImageMobile.value,
        price: productPrice.value,
        quantity: count.value,
      });
      count.value = 1;
    } else {
      console.error("Product not found");
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}
</script>
<template>
  <main class="mb-48">
    <section class="product mt-20 mb-20" aria-labelledby="product-heading">
      <Container
        class="flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-0"
      >
        <figure class="img-container md:w-[45%]">
          <picture>
            <source media="(max-width:678px)" :srcset="productImageMobile" />
            <img
              :src="productImageDesktop"
              class="object-contain h-[500px]"
             
              fetchpriority="high"
              :alt="`Image of ${productName}`"
            />
          </picture>
        </figure>
        <div
          class="text-container sm:w-[500px] md:w-[45%] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
        >
          <header class="flex flex-col gap-2">
            <span
              v-if="productNew"
              class="text-[var(--design-orange)] tracking-[0.5rem] lg:tracking-[1.2rem] lg:text-[1rem] uppercase"
            >
              {{ $t("headphonesProduct1.newProduct") }}
            </span>
            <h1
              id="product-heading"
              class="text-3xl tracking-[0.25rem] font-medium lg:text-5xl lg:max-w-[500px] text-[#212529]"
            >
              {{ productName }}
            </h1>
          </header>
          <p class="lg:max-w-auto text-left">
            {{ $t(productDesc) }}
          </p>
          <p class="price">${{ productPrice }}</p>
          <div
            class="w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-10"
          >
            <div
              class="item-count bg-[var(--light-gray)] h-16 w-40 rounded-lg flex justify-between px-2 items-center gap-2.5 text-xl"
            >
              <button
                type="button"
                class="cursor-pointer w-10 h-10 bg-white flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--design-orange)]"
                @click="decrement"
                aria-label="Decrease quantity"
              >
                –
              </button>
              <span>{{ count }}</span>
              <button
                type="button"
                class="cursor-pointer w-10 h-10 bg-white flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--design-orange)]"
                @click="increment"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              type="button"
              @click="handleAddToCart"
              class=" cursor-pointer uppercase h-16 w-40 rounded-lg bg-[var(--design-orange)] text-white hover:bg-[#f1ab83] duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--design-orange)]"
            >
              {{ $t("add to cart") }}
            </button>
          </div>
        </div>
      </Container>
    </section>
    <section
      class="product-details mt-20 mb-20"
      aria-labelledby="details-heading"
    >
      <Container
        class="flex flex-col md:flex-row justify-between items-start lg:items-center gap-6 lg:h-[350px]"
      >
        <article class="product-features md:w-[calc(65%-24px)] h-full">
          <h2
            id="details-heading"
            class="font-bold text-2xl uppercase text-[#212529] mb-12"
          >
            {{ $t("features") }}
          </h2>
          <p>{{ $t(productFeatures) }}</p>
        </article>
        <aside class="in-box md:w-[calc(35%-24px)] h-full">
          <h2 class="font-bold text-2xl uppercase text-[#212529] mb-12">
            {{ $t("in the box") }}
          </h2>
          <ul>
            <li
              v-for="(item, index) in includedItems"
              :key="item.id || index"
              class="flex items-center gap-5"
            >
              <span class="text-[var(--design-orange)]"
                >{{ item.quantity }}x</span
              >
              <span>{{ $t(item.item) }}</span>
            </li>
          </ul>
        </aside>
      </Container>
    </section>
    <section class="gallery mt-20 mb-20" aria-labelledby="gallery-heading">
      <Container
        class="flex flex-col lg:flex-row gap-7 justify-center lg:h-[592px]"
      >
        <header>
          <h2 id="gallery-heading" class="sr-only">Product Gallery</h2>
        </header>
        <div class="flex flex-col gap-7 h-full justify-between">
          <figure class="lg:h-[445px] overflow-hidden lg:w-[445px]">
            <picture>
              <source
                media="(max-width:678px)"
                :srcset="galleryImages.first.mobile"
              />
              <img
                :src="galleryImages.first.desktop"
                class="object-contain rounded-md w-full"
                loading="lazy"
                width="445"
                height="445"
                :alt="`Gallery image 1 of ${productName}`"
              />
            </picture>
          </figure>
          <figure>
            <picture>
              <source
                media="(max-width:678px)"
                :srcset="galleryImages.second.mobile"
              />
              <img
                :src="galleryImages.second.desktop"
                class="object-contain rounded-md w-full lg:w-auto"
                loading="lazy"
                :alt="`Gallery image 2 of ${productName}`"
              />
            </picture>
          </figure>
        </div>
        <figure>
          <picture>
            <source
              media="(max-width:678px)"
              :srcset="galleryImages.third.mobile"
            />
            <img
              :src="galleryImages.third.desktop"
              class="object-contain rounded-md w-full lg:w-auto"
              loading="lazy"
              :alt="`Gallery image 3 of ${productName}`"
            />
          </picture>
        </figure>
      </Container>
    </section>
    <section
      class="other-products mt-20 mb-20"
      aria-labelledby="other-products-heading"
    >
      <Container>
        <h2
          id="other-products-heading"
          class="font-bold text-2xl uppercase text-[#212529] mb-12 text-center"
        >
          {{ $t("you may also like") }}
        </h2>
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-28 md:gap-4"
        >
          <article
            v-for="(otherProduct, index) in otherProducts"
            :key="otherProduct.id || index"
            class="flex flex-col items-center gap-5"
          >
            <figure class="img-container">
              <picture>
                <source
                  media="(max-width:678px)"
                  :srcset="otherProduct.image.mobile"
                />
                <img
                  :src="otherProduct.image.desktop"
                  class="object-contain rounded-md"
                  loading="lazy"
                  :alt="`${otherProduct.name} image`"
                />
              </picture>
            </figure>
            <h3 class="uppercase tracking-wider text-xl">
              {{ otherProduct.name }}
            </h3>
            <router-link
              :to="{ name: 'productPage', params: { slug: otherProduct.slug } }"
              class="uppercase py-2.5 sm:py-5 w-30 sm:w-40 text-sm sm:text-lg rounded-lg bg-[var(--design-orange)] text-white text-center hover:bg-[#f1ab83] duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--design-orange)]"
            >
              {{ $t("heroSection.button") }}
            </router-link>
          </article>
        </div>
      </Container>
    </section>
  </main>
  <ProductsCat />
  <AboutUs />
</template>
