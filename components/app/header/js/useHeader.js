export function useHeader() {
	const modalStates = ref({
    ModalNavigation: false,
  });
	const {openModal, closeModal} = useModalAction(modalStates);
	const colorMode = useColorMode();

	const toggleColorMode = () => {
  	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	};

	return {
		toggleColorMode, openModal, closeModal, modalStates, colorMode
	};
}