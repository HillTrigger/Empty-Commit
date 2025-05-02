export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const response = await $fetch('https://directus.api.hilltrigger.ru/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
        first_name: body.firstName,
        last_name: '--'
      })
    });

    return { success: true, data: response };

  } catch (error) {
    console.error('Directus API error:', error);
    
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