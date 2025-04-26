// eslint-disable-next-line no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $isAuthenticated } = useNuxtApp();

  try {
    const user = await $isAuthenticated();

    if (!user) {
      console.log('Пользователь не авторизован.');
      return null;
    }

    console.log('Пользователь авторизован', user);
  } catch (error) {
    console.error('Ошибка при проверке аутентификации:', error);
    return null;
	};
});
