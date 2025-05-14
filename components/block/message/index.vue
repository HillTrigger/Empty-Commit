<script setup>
import Message from './ui/message';
import MessageTitle from './ui/messageTitle';
import MessageLayout from './ui/messageLayout';

defineProps({
	confirm: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
  <MessageLayout>
    <Message v-if="confirm">
      <MessageTitle>Почта успешна подтверждена</MessageTitle>
      <p>Перенаправляем на страницу входа...</p>
    </Message>
    <Message v-else>
      <MessageTitle>Ошибка подтверждения почты</MessageTitle>
      <p>
        Произошла ошибка, попробуйте ещё раз позже. Если ошибка повторяется,
        пожалуйста, напишите на почту
        <BaseLink href="mailto:email@hilltrigger.ru">
          email@hilltrigger.ru
        </BaseLink>
      </p>
      <BaseButton class=" p-2 h-full w-full mt-4 lg:max-w-xl" :is-link="true" to="/">
        Вернуться на главную
      </BaseButton>
    </Message>
  </MessageLayout>
</template>