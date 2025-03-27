export function useModalAction(modalStates) {
	const openModal = (modalId) => {
    modalStates.value[modalId] = true;
  };
	const closeModal = (modalId, e) => {
		if(typeof e === 'undefined') {
			modalStates.value[modalId] = false;
			return;
		}
    if (e.currentTarget === e.target) {
			modalStates.value[modalId] = false;
			return;
    }
	};
	return {
		openModal, closeModal
	};
}