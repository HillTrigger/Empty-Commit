export function useModalAction(modalStates) {
	const openModal = (modalId) => {
    modalStates.value[modalId] = true;
  };
	const closeModal = (modalId) => {
    modalStates.value[modalId] = false;
  };
	return {
		openModal, closeModal
	};
}