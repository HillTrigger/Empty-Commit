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

  const getUser = async (email) => {
    try {
      const data = await $fetch(`/api/getUser?email=${email}`);
			if(data.length === 0) {return null;}
      return data || null;
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
      return null;
    }
  };

  return { getItems, getUser, getItem };
}
