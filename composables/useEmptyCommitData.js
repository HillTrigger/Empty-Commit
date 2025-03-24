import axios from 'axios';

export function useEmptyCommitData() {
	
	const getItems = async () => {
		try {
			const {data} = await axios.get('https://directus.api.hilltrigger.ru/items/posts');
			const items = data.data;			
      return items;
		} catch (error) {
			console.error('Error fetching data:', error);
			return error;
		}
	};

	const getUser = async (login) => {
		try {
			const {data} = await axios.get(`https://directus.api.hilltrigger.ru/items/users?filter[login][_eq]=${login}`, 
			{
				headers: {
					'Authorization': 'Bearer KQrdPLbGG9kBoezV7eQDWrI19_YyaJz4', // ← Твой API-ключ
				},
			});
      return data.data[0];
		} catch (error) {
			console.error('Error fetching data:', error);
			return null;
		}
	};

	return {
		getItems, getUser
	};
}