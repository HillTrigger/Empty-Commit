<script setup lang="js">
import { useAuthForm } from './js/useAuthForm';
const { $isAuthenticated } = useNuxtApp();

const props = defineProps({
	isFullForm: {
		type: Boolean,
		default: true
	},
	title: {
		type: String,
		default: ''
	}
});

const modalStates = ref({
    ModalError: false,
  });
const { closeModal } = useModalAction(modalStates);


const {firstName, firstNameErrors, lastName, lastNameErrors, email, emailErrors, password, passwordErrors, signUp, signIn, loading, errorsText} = useAuthForm(modalStates, props.isFullForm);


// const result = ref(false);

// const login = async () => {
//     const response = await $directus.login(email.value, password.value);
//     localStorage.setItem('directus_auth', JSON.stringify(response));
//     result.value = true;
// };
const handleSubmit = async () => {
  try {
    if (props.isFullForm) {
      await signUp();
    } else {
      await signIn();
    }
    // const isAuth = await $isAuthenticated();
    // if (!isAuth) {
    //   throw new Error('Authentication failed');
    // }
    if (props.isFullForm) {
      navigateTo('/sign-in');
    } else {
      navigateTo('/');
    }
  } catch (error) {
    console.error('Auth error:', error);
  }
};
</script>

<template>
  <!-- <div v-if="result">Авторизован</div> -->
  <form
    class="lg:max-w-96 mx-auto items-center absolute top-0 bottom-0 left-0 right-0 flex p-4 flex-col justify-center lg:mt-16 lg:rounded-xl lg:relative"
    @submit.prevent="handleSubmit"
  >
    <h4 class="text-3xl mb-8">{{ title }}</h4>
    <div class="w-full flex flex-col gap-2 mb-4">
      <BaseInput
        v-if="isFullForm"
        v-model="firstName"
        placeholder="Введите имя"
        label="Ваше Имя"
        :errors="firstNameErrors"
        :success="firstNameErrors.length === 0"
        :disabled="loading"
      />
      <BaseInput
        v-if="isFullForm"
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
      {{ isFullForm ? 'Зарегистрироваться' : 'Войти' }}
    </BaseButton>
    <BaseButton
      v-if="isFullForm"
      :is-link="true"
      to="/sign-in"
      class="w-full h-12 mt-2"
    >
      Уже зарегистрированы? <span class="text-textAccent">Войти</span>
    </BaseButton>
    <BaseButton
      v-else
      :is-link="true"
      to="/sign-up"
      class="w-full h-12 mt-2">
      Нет аккаунта? <span class="text-textAccent">Зарегистрироваться</span>
    </BaseButton>
    <BaseButton :is-link="true" to="/" class="w-full h-12 mt-2">
      На главную
    </BaseButton>
    <teleport to="body">
      <ModalError
        v-model:flag="modalStates.ModalError"
        :errors="errorsText"
        @close-modal="(e) => closeModal('ModalError', e)"
      />
    </teleport>
  </form>
</template>
