<script setup lang="js">
const pageTitle = title[useRoute().path];

</script>

<template>
  <div class="flex items-center">
    <SvgLogo class="h-7"/>
    <span>{{ pageTitle }}</span>
  </div>
</template>