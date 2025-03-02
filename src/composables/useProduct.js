import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import productsData from "../../public/data.json";

const findProductData = (slug) => {
  return productsData.find((product) => product.slug === slug);
};

const setProductData = (product) => {
  if (!product) {
    console.warn("Product not found for the given slug.");
    return;
  }
  productImageDesktop.value = product.image?.desktop || "";
  productImageMobile.value = product.image?.mobile || "";
  productNew.value = product.new ?? false;
  productName.value = product.name || "";
  productDesc.value = product.description || "";
  productPrice.value = product.price ?? 0;
  productFeatures.value = product.features || [];
  includedItems.value = product.includes || [];
  galleryImages.value = product.gallery || {};
  otherProducts.value = product.others || [];

  Object.assign(currentProduct, product);
};
const currentProduct = reactive({});
const productImageDesktop = ref("");
const productImageMobile = ref("");
const productNew = ref(false);
const productName = ref("");
const productDesc = ref("");
const productPrice = ref(0);
const productFeatures = ref([]);
const includedItems = ref([]);
const galleryImages = ref({});
const otherProducts = ref([]);

const count = ref(1);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 1) count.value--;
};

export function useProduct() {
  const route = useRoute();

  const initialProduct = findProductData(route.params.slug);
  setProductData(initialProduct);

  watch(
    () => route.params.slug,
    (newSlug, oldSlug) => {
      if (newSlug !== oldSlug) {
        const updatedProduct = findProductData(newSlug);
        setProductData(updatedProduct);
        count.value = 1;
      }
    },
    { immediate: true }
  );

  // Watch for any route changes and reset the count
  watch(
    () => route.fullPath,
    () => {
      count.value = 1;
    }
  );

  return {
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
    setProductData,
    findProductData,
  };
}