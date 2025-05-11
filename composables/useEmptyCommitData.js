export function useEmptyCommitData() {
	// const { $authStore } = useNuxtApp();


  const getItems = async () => {
    try {
      const data = await $fetch('/api/getItems');
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return null;
    }
  };

  const getItem = async (postId) => {
    try {
      const data = await $fetch(`/api/getItem?postId=${postId}`);
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return null;
    }
  };

  const getUser = async (key) => {
    try {
      const data = await $fetch(`/api/getUser?key=${key}`);
      if (data?.length === 0) {return null;}
      return data || null;
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
      return null;
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await $fetch('/api/createUser', {
        method: 'POST',
        body: JSON.stringify(userData),
      });

      if (response?.status === 204) {
        return { success: true };
      }

      return response || { success: true };
    } catch (error) {

			throw createError({
				data: error.data.data.data._data // Передаём дополнительные данные об ошибке
			});
    }
  };

	const loginUser = async (email, password) => {
		try {
			const response = await $fetch('/api/loginUser', {
				method: 'POST',
				body: JSON.stringify({ email, password }),
			});

			if (response?.success) {
				return response.data;
			}

			throw new Error('Ошибка при авторизации');
		} catch (error) {
			console.error('Ошибка при авторизации:', error);
			throw createError({
				statusCode: 401,
				message: 'Неверный логин или пароль',
			});
		}
	};

	const verifyEmail = async (token) => {
		try {
			const {success} = await $fetch('/api/verifyEmail', {
				method: 'POST',
				body: { token } // <== без JSON.stringify
			});


			return {success};
		} catch (error) {
			console.error('Ошибка при подтверждении почты:', error);
			throw createError({
				statusCode: 500,
				message: 'Ошибка подтверждения почты, попробуйте ещё раз позже',
			});
		}
	};

	// const getUserId = async () => {
	// 	if($authStore.userId) {return;}
	// 	const data = await $fetch('/api/readMe');
	// 	return data;
	// };

  return { getItems, getUser, getItem, createUser, loginUser, verifyEmail };
}