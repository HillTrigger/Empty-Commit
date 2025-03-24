<script setup lang="js">
import {title} from '@/utils/constans';
const pageTitle = title['/'];
</script>

<template>
  <div class="flex items-center">
    <SvgLogo class="h-7"/>
    <!-- <img class="w-12 h-12 object-cover" src="/img/logo.webp" alt="logo" > -->
    <span>{{ pageTitle }}</span>
  </div>
</template>