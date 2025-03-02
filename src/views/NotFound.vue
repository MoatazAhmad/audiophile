<template>
  <main role="main" class="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
    <h1 class="text-6xl font-extrabold mb-4">404 - Page Not Found</h1>
    <p class="text-xl mb-8">The page you are looking for does not exist.</p>
    <router-link
      to="/"
      aria-label="Return to Home page"
      class="inline-block uppercase py-5 w-40 rounded-lg bg-[var(--design-orange)] text-white hover:bg-[#f1ab83] duration-500 text-center"
    >
      Return Home
    </router-link>
  </main>
</template>
