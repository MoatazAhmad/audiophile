<script setup>
import Container from "./Container.vue";
</script>

<template>
  <footer class="bg-black" role="contentinfo">
    <Container class="text-white flex flex-col gap-10 justify-between items-center relative">
      <div class="sm:w-full lg:flex lg:justify-between lg:items-center">
        <img
          src="../assets/images/logo.svg"
          loading="lazy"
          alt="Company Logo"
          width="150"
          height="50"
          class="border-t-[5px] border-t-solid border-t-[var(--design-orange)] h-full py-10"
        />
        <nav aria-label="Footer Navigation">
          <ul
            id="navList"
            class="text-center flex gap-4 flex-col sm:flex-row uppercase text-sm lg:text-lg"
          >
            <li>
              <router-link
                to="/"
                class="hover:text-[var(--design-orange)] duration-500"
              >{{ $t("home") }}</router-link>
            </li>
            <li>
              <router-link
                to="/headphones"
                class="hover:text-[var(--design-orange)] duration-500"
              >{{ $t("headphones") }}</router-link>
            </li>
            <li>
              <router-link
                to="/speakers"
                class="hover:text-[var(--design-orange)] duration-500"
              >{{ $t("speakers") }}</router-link>
            </li>
            <li>
              <router-link
                to="/earphones"
                class="hover:text-[var(--design-orange)] duration-500"
              >{{ $t("earphones") }}</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <p class="text-[var(--medium-gray)] text-center sm:text-left rtl:text-right">
        {{ $t("footer.description") }}
      </p>

      <div class="text-[var(--medium-gray)] w-full flex flex-col gap-5 pb-5 sm:flex-row sm:justify-between">
        <small class="text-center font-bold">
          Copyright 2021. All Rights Reserved
        </small>
        <nav aria-label="Social Media Links">
          <ul class="flex justify-center gap-5">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src="../assets/images/icon-facebook.svg"
                  alt="Facebook Icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src="../assets/images/icon-twitter.svg"
                  alt="Twitter Icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img
                  loading="lazy"
                  src="../assets/images/icon-instagram.svg"
                  alt="Instagram Icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </footer>
</template>