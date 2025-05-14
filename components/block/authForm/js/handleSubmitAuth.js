export const handleSubmitAuth = async (isFullForm, signUp, signIn) => {
  try {
    if (isFullForm) {
      const data = await signUp(); //возвращает email ввиде data.email
      if (data.status) {
        return await navigateTo({
          path: '/email-sent',
          query: { email: data.email },
        });
      }
    } else {
      const data = await signIn();
      if (data) {
        return await navigateTo('/');
      }
    }
  } catch (error) {
    console.log('Full error:', error);
  }
};
