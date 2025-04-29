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
		default:
			return 'Страница не найдена';
	}
}