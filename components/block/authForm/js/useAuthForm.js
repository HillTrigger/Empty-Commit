export function useAuthForm(modalStates) {
const {createUser} = useEmptyCommitData();

	const loading = ref(false);
	const errorsText = ref([]);
	
	const signUp = async () => {
		if (firstNameErrors.value.length > 0 || 
				lastNameErrors.value.length > 0 || 
				emailErrors.value.length > 0 || 
				passwordErrors.value.length > 0) {
			console.error('Исправьте ошибки перед отправкой');
			return;
		}

		loading.value = true;
//  TODO вынести логику в пропс
		try {
			const response = await createUser({
				firstName: firstName.value,
				lastName: lastName.value,
				email: email.value,
				password: password.value
			});
			console.log(response);
			
			return response;
		} catch (error) {
			console.log(error.data);
			errorsText.value = error.data.errors.map(el => el.message);
			modalStates.value.ModalError = true;
			// for (const error of error.data.errors) {
				
			// }
			
		} finally {
			loading.value = false;
		}
	};

	const firstName = ref('');
	const firstNameErrors = computed(() => {
		const errors = [];
		if (!firstName.value) {
			errors.push('Имя обязательно');
			return errors;
		}
		if (firstName.value.length < 3) {errors.push('Не меньше 3 символов');}
		if (!/^[a-zA-Zа-яА-Я]+$/.test(firstName.value)) {errors.push('Только буквы');}
		return errors;
	});
	
	const lastName = ref('');
	const lastNameErrors = computed(() => {
		const errors = [];
		if (!lastName.value) {
			errors.push('Фамилия обязательна');
			return errors;
		}
		if (lastName.value.length < 3) {errors.push('Не меньше 3 символов');}
		if (!/^[a-zA-Zа-яА-Я]+$/.test(lastName.value)) {errors.push('Только буквы');}
		return errors;
	});
	
	const email = ref('');
	const emailErrors = computed(() => {
		const errors = [];
		
		if (!email.value) {
			errors.push('Email обязателен');
			return errors;
		}
	
		if (email.value.length < 5) {
			errors.push('Email слишком короткий (минимум 5 символов)');
		}
	
		if (!email.value.includes('@')) {
			errors.push('Email должен содержать @');
		} else {
			const [localPart, domainPart] = email.value.split('@');
			
			if (!localPart || localPart.length < 1) {
				errors.push('Некорректная часть перед @');
			}
	
			if (!domainPart || !domainPart.includes('.') || domainPart.split('.')[1].length < 2) {
				errors.push('Некорректный домен (пример: example.com)');
			}
	
			// if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
			//   errors.push('Некорректный формат email');
			// }
		}
	
		return errors;
	});
	
	const password = ref('');
	const passwordErrors = computed(() => {
		const errors = [];
		
		if (!password.value) {
			errors.push('Пароль обязателен');
			return errors;
		}
	
		if (password.value.length < 8) {
			errors.push('Пароль слишком короткий (минимум 8 символов)');
		}
	
		if (!/\d/.test(password.value)) {
			errors.push('Пароль должен содержать хотя бы одну цифру');
		}
	
		if (!/[A-Z]/.test(password.value)) {
			errors.push('Пароль должен содержать хотя бы одну заглавную букву');
		}
		if (!/[a-z]/.test(password.value)) {
			errors.push('Пароль должен содержать хотя бы одну строчную букву');
		}
	
		if (!/[\W_]/.test(password.value)) { // \W — не буквы и не цифры
			errors.push('Пароль должен содержать хотя бы один спецсимвол (например, !@#$%)');
		}
	
		if (/\s/.test(password.value)) {
			errors.push('Пароль не должен содержать пробелов');
		}
	
		const weakPasswords = ['123456', 'password', 'qwerty', '123456789'];
		if (weakPasswords.includes(password.value.toLowerCase())) {
			errors.push('Пароль слишком простой');
		}
	
		return errors;
	});

	return {
		firstName, firstNameErrors, lastName, lastNameErrors, email, emailErrors, password, passwordErrors, signUp, loading,  errorsText
	};
}