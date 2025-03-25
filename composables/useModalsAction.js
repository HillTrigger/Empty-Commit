export function useModalAction(modalStates) {
	const openModal = (modalId) => {
    modalStates.value[modalId] = true;
  };
	const closeModal = (modalId, e) => {
    if (e.currentTarget !== e.target) {
        modalStates.value[modalId] = false;
    }
	};
	return {
		openModal, closeModal
	};
}