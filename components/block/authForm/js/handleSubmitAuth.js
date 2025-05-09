export const handleSubmitAuth = async (isFullForm, signUp, signIn) => {

  try {
    if (isFullForm) {
			await signUp();
    } else {
			await signIn();
    }

  } catch (error) {
		console.log('Full error:', error);
  }
};