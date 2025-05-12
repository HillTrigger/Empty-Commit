<script setup>
import Message from './ui/message';
import MessageTitle from './ui/messageTitle';
import MessageLayout from './ui/messageLayout';

const route = useRoute();

const token = computed(() => route.query.token);
const { verifyEmail } = useEmptyCommitData();

definePageMeta({
  layout: 'empty',
});

const { data } = useAsyncData(
  'posts',
  async () => {
    try {
      const { success } = await verifyEmail(token.value);
      console.log(success);

      return success;
    } catch (err) {
      console.error('Ошибка при авторизации пользователя:', err);
      return null;
    }
  },
  {
    server: true,
  }
);
// <p>{{ data }}</p>
</script>

<template>
  <MessageLayout>
    <Message v-if="data">
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
      <BaseButton class="w-full" :is-link="true" to="/">
        Вернуться на главную
      </BaseButton>
    </Message>
  </MessageLayout>
</template>
