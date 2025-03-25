// server/api/getUser.js

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(); // Получаем конфигурацию
  const query = getQuery(event);  // Извлекаем параметры из URL

  // Проверка на наличие параметра login
  if (!query.login) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Login is required' 
    });
  }

  // Проверка на наличие API-ключа в конфигурации
  if (!config.apiKey) {
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'API key is missing in configuration' 
    });
  }

  console.log('API Key:', config.apiKey);

  try {
    const response = await $fetch(`https://directus.api.hilltrigger.ru/items/users?filter[login][_eq]=${query.login}`, {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });

    // if (!response.data || !response.data.data || response.data.data.length === 0) {
    //   return null;
    // }

    return response.data[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Internal Server Error' 
    });
  }
});
