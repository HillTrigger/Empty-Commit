export default defineEventHandler(async (event) => {
  // Получаем токен из cookies
  const cookies = parseCookies(event);
  const directusData = cookies['directus-data'] 
    ? JSON.parse(cookies['directus-data']) 
    : null;

  if (!directusData?.access_token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: No access token provided'
    });
  }

  try {
    // Запрос к Directus API для получения данных текущего пользователя
    const userData = await $fetch('https://directus.api.hilltrigger.ru/users/me', {
      headers: {
        Authorization: `Bearer ${directusData.access_token}`
      }
    });

    return userData;
  } catch (error) {
    console.error('Error fetching current user:', error);
    
    if (error.response?.status === 401) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized: Invalid or expired token'
      });
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    });
  }
});