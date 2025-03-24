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
			const {data} = await axios.get(`https://directus.api.hilltrigger.ru/items/users?filter[login][_eq]=${login}`);
			const items = data.data;			
      return items;
		} catch (error) {
			console.error('Error fetching data:', error);
			return error;
		}
		
	};

	return {
		getItems, getUser
	};
}