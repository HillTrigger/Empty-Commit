export const usePageInfo = (pageInfo) => {
	const pageHeader = computed(() => pageInfo.value?.h1 || '');
	const opengraph = computed(() => pageInfo.value?.opengraph || {});
	const title = computed(() => pageInfo.value?.title || '');

	useHead({
		title: () => pageInfo.value?.title || '',
		meta: [
			{ name: 'description', content: () => pageInfo.value?.description || '' },
			{ name: 'robots', content: () => pageInfo.value?.robots || '' },
			{ name: 'og:title', content: () => opengraph.value?.title || '' },
			{ name: 'og:image', content: () => opengraph.value?.image || '' },
			{ name: 'og:description', content: () => opengraph.value?.description || '' },
		],
		link: [
			{
				rel: 'canonical',
				href: () => pageInfo.value?.canonical || '',
			},
		],
	});

	return {
		pageHeader,
		opengraph,
		title,
	};
};
