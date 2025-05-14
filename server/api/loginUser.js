export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body.email || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
      data: {
        fields: {
          email: !body.email,
          password: !body.password
        },
        message: 'Заполните все обязательные поля'
      }
    });
  }

  try {
    const response = await $fetch(`${config.public.directusUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password
      })
    });

    return { success: true, data: response };

  } catch (error) {
    console.error('Directus API error:', error);
    
    // Обработка ошибок от API Directus
    const errorData = {
      statusCode: error.response?.status || 500,
      data: error.response,
      isDirectusError: true
    };
    
    throw createError({
      statusCode: errorData.statusCode,
      statusMessage: errorData.message,
      data: errorData
    });
  }
});
