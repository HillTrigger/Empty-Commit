export default defineEventHandler(async (event) => {
  const body = await readBody(event);
	const config = useRuntimeConfig();

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
		console.log(body);

    const {data} = await $fetch(`${config.public.directusUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: body.refresh_token,
				mode: 'json'
      })
    });
		

    return { success: true, data };
  } catch (error) {
		console.log(error);
		
    console.error('Ошибка при рефреше токена:', error);

    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.message || 'Ошибка при обновлении токена',
      data: error.response || error
    });
  }
});
