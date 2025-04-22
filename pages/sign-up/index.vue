<script setup>
import { useSingUp } from './js/useSignUp';

// function signUp(e) {
	
// }

definePageMeta({
  layout: 'empty'
});

const {firstName, firstNameErrors, lastName, lastNameErrors, email, emailErrors, password, passwordErrors, signUp, loading} = useSingUp();

</script>

<template>
  <form class="items-center bg-bgSecondary300 absolute top-0 bottom-0 left-0 right-0 flex p-4 flex-col justify-center sm:rounded-xl" @submit.prevent="signUp">
    <h4 class="text-3xl mb-8">Sign up to Empty Commit</h4>
    <div class="w-full flex flex-col gap-2 mb-4">
      <BaseInput
        v-model="firstName"
        placeholder="Введите имя"
        label="Ваше Имя"
        :errors="firstNameErrors"
        :success="firstNameErrors.length === 0"
        :disabled="loading"
      />
      <BaseInput
        v-model="lastName"
        placeholder="Введите фамилию"
        label="Ваша фамилия"
        :errors="lastNameErrors"
        :success="lastNameErrors.length === 0"
        :disabled="loading"
      />
      <BaseInput
        v-model="email"
        placeholder="Введите email"
        label="Ваш email"
        :errors="emailErrors"
        :success="emailErrors.length === 0"
        :disabled="loading"
      />
      <BaseInput
        v-model="password"
        placeholder="Введите пароль"
        label="Ваш пароль"
        type="password"
        :errors="passwordErrors"
        :success="passwordErrors.length === 0"
        :disabled="loading"
      />
    </div>
    <BaseButton type="submit" class="w-full h-12">
      Зарегистрироваться
    </BaseButton>
  </form>
</template>