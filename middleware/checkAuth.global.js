// eslint-disable-next-line no-unused-vars
export default defineNuxtRouteMiddleware(async (to, from) => {
	const { $isAuthenticated, $authStore } = useNuxtApp();
	// if (to.path === '/') {return;}
  try {
    const user = await $isAuthenticated();
		
    if (user === false) {
      return;
    }
		console.log(user);
		
		$authStore.userId = user;
  } catch (error) {
    console.log('Ошибка при проверке аутентификации:', error);
    return;
	};
  // const { $isAuthenticated, $authStore } = useNuxtApp();
	// // if (to.path === '/sign-in') {return;}
  // try {
  //   const user = await $isAuthenticated();

  //   if (user === false) {
  //     return;
  //   }
	// 	$authStore.userId = user.id;
  // } catch (error) {
  //   console.log('Ошибка при проверке аутентификации:', error);
  //   // return '/sign-in';
	// };
});
