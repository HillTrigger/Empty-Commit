import { defineStore } from 'pinia';


export const useAuthDataStore = defineStore('authDataStore', () => {
	const userIsAuthenticated = ref(false);


  return { userIsAuthenticated};
});


