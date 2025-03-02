<script setup>
import { ref, computed } from "vue";
import Container from "@/components/Container.vue";
import FormField from "@/components/FormField.vue";
import { useCartStore } from "@/stores/cartLogic";
const cartStore = useCartStore();

const paymentMethod = ref("");
const showEMoneyDetails = computed(() => paymentMethod.value === "e-money");

const name = ref("");
const email = ref("");
const phone = ref("");
const address = ref("");
const zipCode = ref("");
const city = ref("");
const country = ref("");
const eMoneyNumber = ref("");
const eMoneyPin = ref("");

function handleSubmit() {
  console.log("Form submitted");
}
</script>
<template>
  <main class="bg-[var(--light-gray)]">
    <Container class="flex justify-center items-start">
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col lg:flex-row gap-5 pb-5 lg:gap-[5%] lg:p-20 w-full"
      >
        <section
          class="w-full lg:w-[65%] bg-white py-16 px-12 flex flex-col gap-5"
        >
          <h1 class="font-bold text-3xl uppercase text-[#212529]">
            {{ $t("checkout.checkout") }}
          </h1>
          <section aria-labelledby="billing-details-heading">
            <h2
              id="billing-details-heading"
              class="text-[var(--design-orange)] text-[1.1rem] tracking-widest uppercase my-3 font-bold"
            >
              {{ $t("checkout.billingDetails") }}
            </h2>
            <div class="flex flex-wrap gap-2">
              <div class="w-full lg:w-[calc(50%-4px)]">
                <FormField
                  id="nameInput"
                  :label="$t('checkout.name')"
                  placeholder="Enter your name"
                  required
                  autocomplete="name"
                  v-model="name"
                />
              </div>
              <div class="w-full lg:w-[calc(50%-4px)]">
                <FormField
                  id="emailInput"
                  :label="$t('checkout.emailAddress')"
                  type="email"
                  placeholder="Enter your email"
                  required
                  autocomplete="email"
                  v-model="email"
                />
              </div>
              <div class="w-full lg:w-[calc(50%-4px)]">
                <FormField
                  id="phoneNumInput"
                  :label="$t('checkout.phoneNumber')"
                  type="tel"
                  placeholder="01212345678"
                  required
                  autocomplete="tel"
                  v-model="phone"
                />
              </div>
            </div>
          </section>
          <section aria-labelledby="shipping-info-heading">
            <h2
              id="shipping-info-heading"
              class="text-[var(--design-orange)] text-[1.1rem] tracking-widest uppercase my-4 font-bold"
            >
              {{ $t("checkout.shippingInfo") }}
            </h2>
            <div class="flex flex-col gap-2 my-5">
              <FormField
                id="addressInput"
                :label="$t('checkout.address')"
                placeholder="شارع مصنع السمكة"
                required
                autocomplete="street-address"
                v-model="address"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              <div class="w-[calc(50%-4px)]">
                <FormField
                  id="zipCodeInput"
                  :label="$t('checkout.zipCode')"
                  placeholder="10002"
                  required
                  autocomplete="postal-code"
                  v-model="zipCode"
                />
              </div>
              <div class="w-[calc(50%-4px)]">
                <FormField
                  id="cityInput"
                  :label="$t('checkout.city')"
                  placeholder="City"
                  required
                  autocomplete="address-level2"
                  v-model="city"
                />
              </div>
              <div class="w-[calc(50%-4px)]">
                <FormField
                  id="countryInput"
                  :label="$t('checkout.country')"
                  placeholder="Country"
                  required
                  autocomplete="country"
                  v-model="country"
                />
              </div>
            </div>
          </section>
          <section aria-labelledby="payment-details-heading">
            <h2
              id="payment-details-heading"
              class="text-[var(--design-orange)] text-[1.1rem] tracking-widest uppercase my-4 font-bold"
            >
              {{ $t("checkout.paymentDetails") }}
            </h2>
            <div class="flex flex-col gap-5">
              <fieldset class="flex flex-col gap-2">
                <legend class="my-4">{{ $t("checkout.paymentMethod") }}</legend>
                <label
                  for="payment-eMoney"
                  class="p-2.5 border border-solid border-[#c7c7c7] rounded-sm flex items-center gap-7"
                >
                  <input
                    type="radio"
                    id="payment-eMoney"
                    name="paymentMethod"
                    value="e-money"
                    required
                    v-model="paymentMethod"
                  />
                  <span>{{ $t("checkout.eMoney") }}</span>
                </label>
                <label
                  for="payment-cash"
                  class="p-2.5 border border-solid border-[#c7c7c7] rounded-sm flex items-center gap-7"
                >
                  <input
                    type="radio"
                    id="payment-cash"
                    name="paymentMethod"
                    value="cash-on-delivery"
                    v-model="paymentMethod"
                  />
                  <span>{{ $t("checkout.cashOnDelivery") }}</span>
                </label>
              </fieldset>
              <div
                class="e-money-details flex flex-col gap-5"
                v-if="showEMoneyDetails"
              >
                <div>
                  <FormField
                    id="eMoneyNumber"
                    :label="$t('checkout.eMoneyNumber')"
                    placeholder="232123442312"
                    inputmode="numeric"
                    required
                    v-model="eMoneyNumber"
                  />
                </div>
                <div>
                  <FormField
                    id="eMoneyPin"
                    :label="$t('checkout.eMoneyPin')"
                    type="password"
                    placeholder="6574"
                    inputmode="numeric"
                    required
                    v-model="eMoneyPin"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        <aside
          class="w-full lg:w-[30%] bg-white pt-16 pb-12 px-10 flex flex-col gap-4"
        >
          <h2 class="font-bold text-3xl uppercase text-[#212529] mb-2">
            {{ $t("checkout.summary") }}
          </h2>
          <div class="items-container">
            <div v-if="cartStore.items.length === 0">
              <span class="text-center capitalize">{{
                $t("checkout.noItems")
              }}</span>
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
                    alt="Product image of {{ item.name }}"
                    class="w-full h-full rounded-lg"
                  />
                </figure>
                <div class="flex justify-between items-center h-full w-full">
                  <div class="flex flex-col h-full justify-between">
                    <h3 class="text-sm">{{ item.name }}</h3>
                    <p>{{ `$${item.price}` }}</p>
                  </div>
                  <div class="flex gap-2 font-bold">
                    <span>{{ `${item.quantity}x` }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600 uppercase">{{
              $t("checkout.total")
            }}</span>
            <span>{{
              cartStore.items.length === 0
                ? "$0.00"
                : `$${cartStore.totalPrice.toFixed(2)}`
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600 uppercase">{{
              $t("checkout.shipping")
            }}</span>
            <span>{{ `$${cartStore.shipping.toFixed(2)}` }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600 uppercase">{{
              $t("checkout.tax")
            }}</span>
            <span>{{
              cartStore.items.length === 0
                ? "$0.00"
                : `$${cartStore.tax.toFixed(2)}`
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600 uppercase">{{
              $t("checkout.grandTotal")
            }}</span>
            <span class="text-[var(--design-orange)]">
              {{
                cartStore.items.length === 0
                  ? "$0.00"
                  : `$${cartStore.grandTotal.toFixed(2)}`
              }}
            </span>
          </div>
          <button
            type="submit"
            class="uppercase py-5 rounded-lg bg-[var(--design-orange)] text-white cursor-pointer hover:bg-[#f1ab83] duration-500"
          >
            {{ $t("checkout.continueAndPay") }}
          </button>
        </aside>
      </form>
    </Container>
  </main>
</template>
