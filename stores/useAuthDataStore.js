import { defineStore } from 'pinia';


export const useAuthDataStore = defineStore('authDataStore', () => {
	const userIsAuthenticated = ref(null);


  return { userIsAuthenticated};
});


