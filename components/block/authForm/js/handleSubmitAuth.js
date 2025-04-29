export const handleSubmitAuth = async (isFullForm, signUp, signIn) => {
  try {
    if (isFullForm) {
      await signUp();
    } else {
      await signIn();
    }
    if (isFullForm) {
      navigateTo('/sign-in');
    } else {
      navigateTo('/');
    }
  } catch (error) {
    console.error('Auth error:', error);
  }
};