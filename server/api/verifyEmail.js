export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
      data: {
        fields: {
          token: !body.token,
        },
        message: 'Missing token'
      }
    });
  }

  try {
    const response = await $fetch('https://directus.api.hilltrigger.ru/users/register/verify-email', {
      method: 'GET',
      query: {
        token: body.token
      }
    });

    return { success: true, data: response };

  } catch (error) {
    console.error('Directus API error:', error?.data || error);

    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.data?.message || 'Unknown Directus error',
      data: {
        error: error?.data || error,
        isDirectusError: true
      }
    });
  }
});
