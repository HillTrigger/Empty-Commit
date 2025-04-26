import {
	createDirectus,
	readMe,
	rest,
	readItems,
	registerUser,
	authentication,
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

	
	const refreshToken = async (refresh_token) => {
		try {
			const { data } = await $fetch('/api/refreshToken', {
				method: 'POST',
				body: {
					refresh_token: refresh_token,
				},
			});
			console.log(data.data);
			

			const directusData = useCookie('directus-data');
			directusData.value = {
				access_token: data.data.access_token,
				refresh_token: data.data.refresh_token,
				expires_at: Date.now() + data.data.expires, 
			};


			console.log('Токен успешно обновлён: ', directusData);
			return true;
		} catch (error) {
			console.error('Ошибка при обновлении токена', error);
			return false;
		}
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
				if(await refreshToken(authData.refresh_token)) {
					return await isAuthenticated();
				}else {
					return false;
				}
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