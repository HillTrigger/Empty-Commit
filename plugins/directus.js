import {
	createDirectus,
	readMe,
	rest,
	readItems,
	registerUser,
	authentication,
	refresh,
} from '@directus/sdk';

export default defineNuxtPlugin(() => {
	class NuxtCookieStorage {
			cookie = useCookie('directus-data');
			get() {
			return this.cookie.value;
			}
			set(data) {
			this.cookie.value = data;
			}
	}

	const storage = new NuxtCookieStorage();

	const directus = createDirectus(
			'https://directus.api.hilltrigger.ru',
	)
	.with(authentication('cookie', { credentials: 'include', storage }))
	.with(rest({ credentials: 'include' }));

	
	const refreshToken = async () => {
		return directus.request(
				refresh('cookie')
		);
	};

	const isAuthenticated = async () => {
		if (!import.meta.client) {
			return false;
		}
		try {
			const authData = await useCookie('directus-data').value;
			
			if (!authData) {
				return false;
			}
			
			const { expires_at } = authData;
			console.log(expires_at);
	
			if (Date.now() >= expires_at) {
				console.warn('Токен истёк, обновляем...');
				await refreshToken();
				return await isAuthenticated();
			}
	
			const me = await directus.request(readMe());
			return me;
		} catch (error) {
			console.error('Ошибка при проверке авторизации', error);
			return false;
		}
	};
	


	const logout = async () => {
    await directus.logout();
    navigateTo('/');
	};

	return {
		provide: { directus, readItems, registerUser, isAuthenticated,  logout },
	};
});