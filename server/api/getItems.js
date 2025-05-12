export default defineEventHandler(async () => {
  const config = useRuntimeConfig(); // Достаём API-ключ из конфигурации

  try {
    const response = await $fetch(`${process.env.DIRECTUS_URL}/items/posts`, {
      // headers: {
      //   Authorization: `Bearer ${config.apiKey}`, // Скрытый API-ключ
			
      // },
			params: {
				sort: '-id', // Сортировка по убыванию ID
				// limit: 10,   // Ограничение количества записей (опционально)
				// fields: 'id,title,date,author.*' // Выбор нужных полей (опционально)
			}
    });

    if (!response || !response.data) {
      throw new Error('Некорректный ответ от API Directus');
    }

    return response.data; // Теперь возвращаем именно массив постов
  } catch (error) {
    console.error('Ошибка при получении постов:', error);

    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.response?.statusText || 'Internal Server Error',
    });
  }
});
