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

  const getUser = async (login) => {
    try {
      const data = await $fetch(`/api/getUser?login=${login}`);
      return data || null;  // Возвращаем null, если пользователь не найден
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
      return null;  // Возвращаем null в случае ошибки
    }
  };

  return { getItems, getUser, getItem };
}
