<template>
  <div class="flex flex-col items-center justify-center flex-grow sm:justify-normal lg:pt-20 sm:pt-60 text-center gap-2 py-8 px-4">
    <div>
      <SvgEmail class="w-32 h-32 min-w-32 min-h-32 "/>
    </div>
    <h3 class="text-xl font-semibold">Регистрация прошла успешно!</h3>
    <p class="lg:max-w-xl">
      На ваш email <span>example@gmail.com</span> отправлено письмо с подтверждением.
      Пожалуйста, проверьте почту и перейдите по ссылке, чтобы активировать аккаунт. После этого вы сможете авторизоваться.
    </p>
    <BaseButton class=" p-2 h-full w-full mt-4 lg:max-w-xl" :is-link="true" to="/sign-in">
      Войти
    </BaseButton>
  </div>
</template>