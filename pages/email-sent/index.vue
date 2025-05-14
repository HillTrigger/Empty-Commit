<script setup>
definePageMeta({
  layout: 'empty',
  middleware: ['ban-if-auth'], // Только для этой страницы
  suspense: true,
});

const route = useRoute();
const email = computed(() => route.query.email);
</script>

<template>
  <div
    class="flex flex-grow flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:justify-normal sm:pt-60 lg:pt-20"
  >
    <div>
      <SvgEmail class="h-32 min-h-32 w-32 min-w-32" />
    </div>
    <h3 class="text-xl font-semibold">Регистрация прошла успешно!</h3>
    <p class="lg:max-w-xl">
      На ваш email <span>{{ email }}</span> отправлено письмо с подтверждением.
      Пожалуйста, проверьте почту и перейдите по ссылке, чтобы активировать
      аккаунт. После этого вы сможете авторизоваться.
    </p>
    <BaseButton
      class="mt-4 h-full w-full p-2 lg:max-w-xl"
      :is-link="true"
      to="/sign-in"
    >
      Войти
    </BaseButton>
  </div>
</template>
