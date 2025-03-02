import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homePage.vue";
import HeadphonesProducts from "@/views/HeadphonesProducts.vue"
import SpeakersProducts from "@/views/SpeakersProducts.vue";
import EarphonesProducts  from "@/views/EarphonesProducts.vue" ;
import Checkout  from "@/views/Checkout.vue" ;
import Product  from "@/views/dynamicPage/product.vue" ;
import NotFound  from "@/views/NotFound.vue" ;


const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Audiophile - Home",
      metaTags: [
        {
          name: "description",
          content:
            "Welcome to Audiophile. Discover the best audio products including headphones, speakers, and earphones. Experience high-quality sound and premium products.",
        },
        {
          property: "og:title",
          content: "Audiophile - Home of Premium Audio Products",
        },
        {
          property: "og:description",
          content:
            "Welcome to Audiophile. Discover the best audio products including headphones, speakers, and earphones. Experience high-quality sound and premium products.",
        },
        {
          property: "og:image",
          content: "https://example.com/default-og-image.jpg",
        },
        {
          property: "og:url",
          content: "https://yourusername.github.io/your-repo",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/headphones",
    component: HeadphonesProducts,
    meta: {
      title: "Audiophile - Headphones",
      metaTags: [
        {
          name: "description",
          content:
            "Explore our wide range of high-quality headphones at Audiophile. Find the perfect headphones to suit your style and sound preference.",
        },
        {
          property: "og:title",
          content: "Audiophile - High-Quality Headphones",
        },
        {
          property: "og:description",
          content:
            "Explore our wide range of high-quality headphones at Audiophile. Find the perfect headphones to suit your style and sound preference.",
        },
        {
          property: "og:image",
          content: "https://example.com/headphones-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/headphones" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/speakers",
    component: SpeakersProducts,
    meta: {
      title: "Audiophile - Speakers",
      metaTags: [
        {
          name: "description",
          content:
            "Discover premium speakers at Audiophile. Experience powerful sound and exceptional audio quality with our top-of-the-line speakers.",
        },
        { property: "og:title", content: "Audiophile - Premium Speakers" },
        {
          property: "og:description",
          content:
            "Discover premium speakers at Audiophile. Experience powerful sound and exceptional audio quality with our top-of-the-line speakers.",
        },
        {
          property: "og:image",
          content: "https://example.com/speakers-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/speakers" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/earphones",
    component: EarphonesProducts,
    meta: {
      title: "Audiophile - Earphones",
      metaTags: [
        {
          name: "description",
          content:
            "Shop the best earphones at Audiophile. Enjoy superior sound quality and comfort with our selection of high-performance earphones.",
        },
        {
          property: "og:title",
          content: "Audiophile - High-Performance Earphones",
        },
        {
          property: "og:description",
          content:
            "Shop the best earphones at Audiophile. Enjoy superior sound quality and comfort with our selection of high-performance earphones.",
        },
        {
          property: "og:image",
          content: "https://example.com/earphones-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/earphones" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/checkout",
    component: Checkout,
    meta: {
      title: "Audiophile - Checkout",
      metaTags: [
        {
          name: "description",
          content:
            "Complete your purchase at Audiophile. Review your order and proceed to checkout for the best audio products available.",
        },
        { property: "og:title", content: "Audiophile - Checkout" },
        {
          property: "og:description",
          content:
            "Complete your purchase at Audiophile. Review your order and proceed to checkout for the best audio products available.",
        },
        {
          property: "og:image",
          content: "https://example.com/checkout-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/checkout" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/product/:slug",
    name: "productPage",
    component: Product,
    meta: {
      title: "Audiophile - Product Details",
      metaTags: [
        {
          name: "description",
          content:
            "Get detailed information about our audio products at Audiophile. Read reviews, specifications, and more about your favorite products.",
        },
        { property: "og:title", content: "Audiophile - Product Details" },
        {
          property: "og:description",
          content:
            "Get detailed information about our audio products at Audiophile. Read reviews, specifications, and more about your favorite products.",
        },
        {
          property: "og:image",
          content: "https://example.com/product-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/product" },
        { property: "og:type", content: "website" },
      ],
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Audiophile - Page Not Found",
      metaTags: [
        {
          name: "description",
          content:
            "The page you are looking for does not exist. Please check the URL or return to the Audiophile homepage.",
        },
        { property: "og:title", content: "Audiophile - Page Not Found" },
        {
          property: "og:description",
          content:
            "The page you are looking for does not exist. Please check the URL or return to the Audiophile homepage.",
        },
        {
          property: "og:image",
          content: "https://example.com/notfound-og-image.jpg",
        },
        { property: "og:url", content: "https://example.com/notfound" },
        { property: "og:type", content: "website" },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Audiophile";
});

export default router;
