export const handleSubmitAuth = async (isFullForm, signUp, signIn) => {

  try {
    if (isFullForm) {
			const data = await signUp();
			if(data) {
				return await navigateTo('/sign-in');;
			}
    } else {
			const data = await signIn();
			if(data) {
				return await navigateTo('/');
			}
    }

  } catch (error) {
		console.log('Full error:', error);
  }
};