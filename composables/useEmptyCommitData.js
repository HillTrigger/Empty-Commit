export function useEmptyCommitData() {
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

  return { getItems, getUser, getItem, createUser };
}