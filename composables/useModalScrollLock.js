export function useModalScrollLock(props, modal) {
	
	const body = ref();
	
	const isLocked = useScrollLock(body);
	
	watch(
		() => props.flag,
		() => {
			if (props.flag) {
				const paddingRight = window.innerWidth - document.querySelector('body').clientWidth;
				document.querySelector('body').style.paddingRight = paddingRight + 'px';

				setTimeout(() => {
				modal.value.style.paddingRight = paddingRight + 16 + 'px';
				});
				
				isLocked.value = true;
				
			} else {
				isLocked.value = false;
				document.querySelector('body').style.paddingRight = null;
				modal.value.style.paddingRight = null;
			}
		}
	);

	onMounted(() => {
		body.value = window;
	});

	return;
}