<template>
  <footer class="mt-auto border-t border-borderColor p-4 flex items-center gap-4">
    <p>Проект создан с целью изучения Vue и Nuxt. Автор: <NuxtLink
      class="font-medium text-textAccent"
      to="https://github.com/HillTrigger" 
      target="_blank" 
      rel="noopener noreferrer"
      external
    >HillTrigger</NuxtLink>
    </p>
    <NuxtLink target="_blank" to="rss" class="hover:text-orange-500">
      <SvgRss class="w-4 h-4 min-w-4 min-h-4"/>
    </NuxtLink>
  </footer>
</template>