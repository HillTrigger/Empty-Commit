<script setup lang="js">
definePageMeta({
  layout: 'empty'
});
</script>

<template>
  <BlockAuthForm
    title="Sign up to Empty Commit"
    button-text="Войти"
    :on-submit="(formData) => console.log(formData)"
    link-text="На главную"
    link-description="Описание"
    link-href="/"
    :is-full-form="false"/>
</template>