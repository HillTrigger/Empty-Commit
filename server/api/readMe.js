export default defineEventHandler(async (event) => {
  // Получаем токен из cookies
  const { access_token } = getQuery(event);
  
  if (!access_token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User access_token is required'
    });
  }

  // if (!access_token) {
  //   throw createError({
  //     statusCode: 401,
  //     statusMessage: 'Unauthorized: No access token provided'
  //   });
  // }

  try {
    // Запрос к Directus API для получения данных текущего пользователя
    const userData = await $fetch('https://directus.api.hilltrigger.ru/users/me', {
      headers: {
        Authorization: `Bearer ${access_token}`
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