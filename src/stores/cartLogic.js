import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useCartStore = defineStore(
  "cartLogic",
  () => {
    
    const items = ref([]);

    function addToCart(product) {
      if (!product || typeof product !== "object" || !product.id) {
        console.error("Invalid product object:", product);
        return;
      }
      const existingItem = items.value.find((item) => item.id === product.id);
      if (existingItem) {
        const quantityToAdd = Number(product.quantity) || 0;
        existingItem.quantity += quantityToAdd;
      } else {
        items.value.push({ ...product });
      }
    }


    function updateItemQuantity(id, newQuantity) {
      const item = items.value.find((i) => i.id === id);
      if (item) {
        const qty = Number(newQuantity);
        if (isNaN(qty) || qty < 0) {
          console.error("Invalid quantity provided:", newQuantity);
          return;
        }
        item.quantity = qty;
      } else {
        console.warn("Item not found for update with id:", id);
      }
    }

    
    function removeFromCart(id) {
      items.value = items.value.filter((i) => i.id !== id);
    }

    
    function clearCart() {
      items.value = [];
    }

    const totalPrice = computed(() =>
      items.value.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        return total + price * quantity;
      }, 0)
    );

    const tax = computed(() => totalPrice.value * 0.07);

    const shipping = 19.95;

    const grandTotal = computed(() => totalPrice.value + tax.value + shipping);

    return {
      items,
      addToCart,
      updateItemQuantity,
      removeFromCart,
      clearCart,
      totalPrice,
      tax,
      shipping,
      grandTotal,
    };
  },
  {
    persist: true,
  }
);
