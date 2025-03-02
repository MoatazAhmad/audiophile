<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup></script>
<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline:15px;
}
@media (max-width: 768px) {
  .container {
    padding-inline: 10px;
  }
}
</style>
