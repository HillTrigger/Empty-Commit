export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.refresh_token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing refresh token',
      data: {
        message: 'Не передан refresh токен'
      }
    });
  }

  try {
    const response = await $fetch('https://directus.api.hilltrigger.ru/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: body.refresh_token
      })
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Ошибка при рефреше токена:', error);

    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.message || 'Ошибка при обновлении токена',
      data: error.response || error
    });
  }
});
