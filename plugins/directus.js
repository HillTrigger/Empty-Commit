import {
	createDirectus,
	rest,
	readItems,
	registerUser,
	authentication,
} from '@directus/sdk';


export default defineNuxtPlugin(() => {
	const { $authStore } = useNuxtApp();
	
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
	.with(authentication('json', { credentials: 'include', storage }))
	.with(rest({ credentials: 'include' }));

	
	const refreshToken = async (refresh_token) => {
		try {
			const { data } = await $fetch('/api/refreshToken', {
				method: 'POST',
				body: {
					refresh_token: refresh_token,
				},
			});

			if (!data) {
				console.error('Не получили данные при обновлении токена');
				return false;
			}
			

			const directusData = useCookie('directus-data');
			directusData.value = {
				access_token: data.access_token,
				refresh_token: data.refresh_token,
				expires_at: Date.now() + data.expires, 
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
			// authDataStore.userIsAuthenticated.value = false;
			// $authStore.userIsAuthenticated = false;
			return false;
		}
		try {
			const authData = useCookie('directus-data').value;
			
			if (!authData || !authData.access_token ) {
				// authDataStore.userIsAuthenticated.value = false;
			$authStore.userIsAuthenticated = false;
			return false;
			}
			
			const { expires_at } = authData;
			console.log(expires_at);
	
			if (Date.now() >= expires_at) {
				console.warn('Токен истёк, обновляем...');
				if(await refreshToken(authData.refresh_token)) {
					return await isAuthenticated();
				}else {
			$authStore.userIsAuthenticated = false;
			return false;
				}
			}

			
			// authDataStore.userIsAuthenticated.value = true;
			$authStore.userIsAuthenticated = true;
			const {data: me} = await $fetch('/api/readMe');
			return me;
		} catch (error) {
			// authDataStore.userIsAuthenticated.value = true;
			console.error('Ошибка при проверке авторизации', error);
			return false;
		}
	};
	


	const logout = () => {
			directus.logout();
			$authStore.userIsAuthenticated = false;
	};

	return {
		provide: { directus, readItems, registerUser, isAuthenticated,  logout },
	};
});