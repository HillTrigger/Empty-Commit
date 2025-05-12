export function getTitle(path) {
	switch (true) {
		case path === '/':
			return 'Главная';
		case path === '/about':
			return 'О проекте';
		case path.startsWith('/post/'): {
			const number = path.split('/').pop();
			return `Пост ${number}`;
		};
		case path === '/iam':
			return 'Личный кабинет';
		case path === '/sign-in':
			return 'Войти';
		case path === '/sign-up':
			return 'Зарегистрироваться';
		case path === '/email-sent':
			return 'Ссылка отправлена';
		case path.startsWith('/users/register/verify-email'): {
			return 'Подтверждение почты';
		};
		default:
			return 'Страница не найдена';
	}
}