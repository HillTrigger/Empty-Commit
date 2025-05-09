//middleware/ban-if-not-auth.js
// eslint-disable-next-line no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $authStore } = useNuxtApp();
	if (to.path === '/') {return;}
  try {

    if ($authStore.userId !== null) {
      return '/';
    }
		
  } catch (error) {
    console.log('Ошибка при проверке аутентификации:', error);
    return '/';
	};
});
