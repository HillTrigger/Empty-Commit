export const handleSubmitAuth = async (isFullForm, signUp, signIn) => {

  try {
    if (isFullForm) {
      await signUp();
      navigateTo('/sign-in');
    } else {
      await signIn();
      navigateTo('/');
    }

  } catch (error) {
		console.log('Full error:', error);
  }
};