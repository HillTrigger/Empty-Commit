//middleware/ban-if-not-auth.js
// eslint-disable-next-line no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $isAuthenticated } = useNuxtApp();
	if (to.path === '/') {return;}
  try {
    const user = await $isAuthenticated();

    if (user !== false) {
      return '/';
    }
		
  } catch (error) {
    console.log('Ошибка при проверке аутентификации:', error);
    return '/';
	};
});
