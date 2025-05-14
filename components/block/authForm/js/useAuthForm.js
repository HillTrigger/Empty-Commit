const config = useRuntimeConfig();


export function useAuthForm(modalStates) {
  const { createUser, loginUser } = useEmptyCommitData();

  const loading = ref(false);
  const errorsText = ref([]);

  const signUp = async () => {
    loading.value = true;

    try {
      if (
        firstNameErrors.value.length > 0 ||
        emailErrors.value.length > 0 ||
        passwordErrors.value.length > 0 ||
        repeatPasswordErrors.value.length > 0
      ) {
        throw createError({
          statusCode: 401,
          message: 'Поля заполнены некорректно',
        });
      }

      const response = await createUser({
        firstName: firstName.value,
        email: email.value,
        password: password.value,
      });
      return true;
    } catch (error) {
      errorsText.value = [];
      if (error.data) {
        errorsText.value = error.data.errors.map((el) => el.message);
      } else {
        errorsText.value = [...errorsText.value, error.message];
      }
      modalStates.value.ModalError = true;
			return false;
    } finally {
      loading.value = false;
    }
  };

  const signIn = async () => {
    loading.value = true;

    try {
      if (emailErrors.value.length > 0 || passwordErrors.value.length > 0) {
        throw createError({
          statusCode: 401,
          message: 'Поля заполнены некорректно',
        });
      }

      const { data } = await loginUser(email.value, password.value);
      const authData = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + data.expires,
      };

      useCookie('directus-data', {
        maxAge: 7 * 24 * 60 * 60,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Lax',
      }).value = authData;

      return true;
    } catch (error) {
      errorsText.value = [];
      if (error.data) {
        errorsText.value = error.data.errors.map((el) => el.message);
      } else {
        console.log('JIFDSFFDF');

        errorsText.value = [...errorsText.value, error.message];
      }
      modalStates.value.ModalError = true;
			return false;
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
    if (firstName.value.length < 3) {
      errors.push('Не меньше 3 символов');
    }
    if (/[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(firstName.value)) {
      errors.push('Запрещены специальные символы');
    }
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

      if (
        !domainPart ||
        !domainPart.includes('.') ||
        domainPart.split('.')[1].length < 2
      ) {
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

    if (!/[\W_]/.test(password.value)) {
      // \W — не буквы и не цифры
      errors.push(
        'Пароль должен содержать хотя бы один спецсимвол (например, !@#$%)'
      );
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

  const repeatPassword = ref('');
  const repeatPasswordErrors = computed(() => {
    const errors = [];

    if (!repeatPassword.value) {
      errors.push('Повтор обязателен');
      return errors;
    }

    if (repeatPassword.value !== password.value) {
      errors.push('Пароли не совпадают');
    }

    return errors;
  });

  return {
    firstName,
    firstNameErrors,
    email,
    emailErrors,
    password,
    passwordErrors,
    signUp,
    signIn,
    loading,
    errorsText,
    repeatPassword,
    repeatPasswordErrors,
  };
}
