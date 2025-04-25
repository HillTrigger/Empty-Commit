// server/api/getUser.js

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  if (!query.key) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Key User is required' 
    });
  }

  if (!config.apiKey) {
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'API key is missing in configuration' 
    });
  }
  try {
    const response = await $fetch(`https://directus.api.hilltrigger.ru/users/${query.key}`, {
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });

    // if (!response.data || !response.data.data || response.data.data.length === 0) {
    //   return null;
    // }

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Internal Server Error' 
    });
  }
});
