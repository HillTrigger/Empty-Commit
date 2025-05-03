import { defineStore } from 'pinia';


export const useAuthDataStore = defineStore('authDataStore', () => {
	const userIsAuthenticated = ref(null);
	const userId = ref(null);


  return { userIsAuthenticated, userId};
});


