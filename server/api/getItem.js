// server/api/getUser.js

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);
	

  if (!query.postId) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'PostId is required' 
    });
  }

  if (!config.apiKey) {
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'API key is missing in configuration' 
    });
  }
  try {
    const response = await $fetch(`${process.env.DIRECTUS_URL}/items/posts/${query.postId}`, {
      // headers: {
      //   Authorization: `Bearer ${config.apiKey}`,
      // },
    });

    if (!response.data) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw createError({ 
      statusCode: 500, 
      statusMessage: 'Internal Server Error' 
    });
  }
});
