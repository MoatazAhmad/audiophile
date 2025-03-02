<script setup>
import Container from "./Container.vue";
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
import { useCartStore } from "@/stores/cartLogic";
const cartStore = useCartStore();

const isModalOpen = ref(false);
const modal = ref(null);
const isNavOpen = ref(false);
const navList = ref(null);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const updateDocumentDirection = () => {
  document.documentElement.setAttribute(
    "dir",
    locale.value === "ar" ? "rtl" : "ltr"
  );
};

const handleClickOutside = (event) => {
  const cartIcon = document.querySelector(".cart-icon");
  if (cartIcon && cartIcon.contains(event.target)) return;
  if (modal.value && !modal.value.contains(event.target)) {
    isModalOpen.value = false;
  }
};

function handleModalKeydown(event) {
  if (event.key === "Escape" && isModalOpen.value) {
    isModalOpen.value = false;
  }
}

const handleNavOutsideClick = (event) => {
  if (
    navList.value &&
    !navList.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    isNavOpen.value = false;
    document.body.classList.remove("overflow-hidden");
    window.removeEventListener("click", handleNavOutsideClick);
  }
};

const toggleNavList = () => {
  isNavOpen.value = !isNavOpen.value;
  if (isNavOpen.value) {
    document.body.classList.add("overflow-hidden");
    window.addEventListener("click", handleNavOutsideClick);
  } else {
    document.body.classList.remove("overflow-hidden");
    window.removeEventListener("click", handleNavOutsideClick);
  }
};

const selectedLocale = ref(locale.value);
updateDocumentDirection();
function changeLocale() {
  locale.value = selectedLocale.value;
  try {
    localStorage.setItem("preferredLanguage", selectedLocale.value);
  } catch (error) {
    console.error("Error saving preferred language to localStorage", error);
  }
  updateDocumentDirection();
}

const totalQuantity = computed(() =>
  cartStore.items.reduce((total, item) => total + item.quantity, 0)
);
const totalPrice = computed(() =>
  cartStore.items.length === 0 ? 0 : cartStore.totalPrice
);

onMounted(() => {
  document.addEventListener("click", handleClickOutside, true);
  document.addEventListener("keydown", handleModalKeydown);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside, true);
  document.removeEventListener("keydown", handleModalKeydown);
});
const decrementItem = (item) => {
  if (item.quantity >1) {
    cartStore.updateItemQuantity(item.id, item.quantity - 1)
  } else {
    cartStore.removeFromCart(item.id)
  }
}
const incrementItem = (item) => {
  cartStore.updateItemQuantity(item.id, item.quantity + 1)
}
</script>

<template>
  <header class="bg-[var(--design-black)] relative">
    <Container
      class="text-white flex justify-between items-center relative py-5 border-b border-solid border-b-[#4b4a4a]"
    >
      <button
        class="cursor-pointer lg:hidden"
        @click="toggleNavList"
        aria-label="Toggle navigation"
      >
        <img src="../assets/images/icon-hamburger.svg" alt="Menu" />
      </button>
      <img src="../assets/images/logo.svg" alt="Company Logo" />
      <nav>
        <ul
          ref="navList"
          :class="[
            isNavOpen ? 'flex' : 'hidden',
            'lg:flex lg:gap-5 uppercase lg:text-sm absolute lg:relative left-0 rtl:left-auto rtl:right-0 top-full bg-[var(--design-black)] lg:bg-transparent h-screen w-1/2 lg:w-auto lg:h-auto gap-12 flex-col lg:flex-row justify-start items-center pt-10 lg:pt-0 text-xl text-right z-1',
          ]"
        >
          <li>
            <label class="sr-only" for="locale-select">Select Language</label>
            <select
              id="locale-select"
              class="text-black bg-white rounded-2xl"
              v-model="selectedLocale"
              @change="changeLocale"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </li>
          <li>
            <router-link
              to="/"
              class="hover:text-[var(--design-orange)] duration-500"
            >
              {{ $t("home") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/headphones"
              class="hover:text-[var(--design-orange)] duration-500"
            >
              {{ $t("headphones") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/speakers"
              class="hover:text-[var(--design-orange)] duration-500"
            >
              {{ $t("speakers") }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/earphones"
              class="hover:text-[var(--design-orange)] duration-500"
            >
              {{ $t("earphones") }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button
        class="cart-icon flex gap-1 items-center cursor-pointer group"
        @click="toggleModal"
        aria-label="View cart"
      >
        <svg
          class="duration-500 fill-white group-hover:fill-design-orange"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20px"
          height="20px"
          viewBox="0 0 902.86 902.86"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path
                  d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                ></path>
                <path
                  d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <p class="text-xs group-hover:text-[var(--design-orange)] duration-500">
          <span>({{ totalQuantity }})</span>
        </p>
      </button>
    </Container>
  </header>
  <div
    v-if="isModalOpen"
    class="cart absolute right-0 w-screen h-full z-10 bg-[#80808075]"
    role="dialog"
    aria-modal="true"
    aria-label="Shopping cart"
  >
    <Container class="flex justify-center md:justify-end">
      <div
        id="cartInfo"
        @click.stop
        ref="modal"
        class="cart-info mt-8 w-[400px] bg-white p-4 flex flex-col gap-2.5 rounded-2xl"
      >
        <div class="flex justify-between">
          <h3 class="uppercase font-bold">
            {{ $t("cart") }} ({{ totalQuantity }})
          </h3>
          <button
            @click="cartStore.clearCart"
            class="uppercase hover:text-[var(--design-orange)] duration-500 cursor-pointer"
          >
            {{ $t("remove all") }}
          </button>
        </div>
        <div v-if="cartStore.items.length === 0">
          <p class="text-center">No items</p>
        </div>
        <div v-else>
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex gap-5 items-center h-[80px] justify-start mb-4"
          >
            <figure class="img-container w-28 h-20">
              <img
                :src="item.image"
                :alt="`Product image of ${item.name}`"
                class="w-full h-full rounded-lg"
              />
            </figure>
            <div class="flex justify-between items-center h-full w-full">
              <div class="flex flex-col h-full justify-between">
                <h3 class="text-sm">{{ item.name }}</h3>
                <p>{{ `$${item.price}` }}</p>
              </div>
              <div class="flex gap-2 font-bold">
                <button
                  @click="decrementItem(item)"
                  class="cursor-pointer bg-[var(--light-gray)] w-[25px] h-[25px] rounded-full"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  @click="incrementItem(item)"
                  class="cursor-pointer bg-[var(--light-gray)] w-[25px] h-[25px] rounded-full"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <h3 class="uppercase font-bold">{{ $t("total") }}</h3>
          <span>{{ `$${totalPrice.toFixed(2)}` }}</span>
        </div>
        <router-link
          @click="toggleModal"
          to="/checkout"
          class="uppercase py-5 rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500 text-center"
        >
          {{ $t("checkout.checkout") }}
        </router-link>
      </div>
    </Container>
  </div>
</template>
