export default defineEventHandler(async () => {
  const config = useRuntimeConfig(); // Достаём API-ключ из конфигурации

  try {
    const response = await $fetch('https://directus.api.hilltrigger.ru/items/posts', {
      headers: {
        Authorization: `Bearer ${config.apiKey}`, // Скрытый API-ключ
      },
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
