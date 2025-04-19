import { getTitle } from '~/layouts/js/getTitle';

export function useMetaTags({description, image, url}) {
	const pageTitle = getTitle(useRoute().path);
	const metaTags = [
		{ name: 'description', content: description },
		{ property: 'og:title', content: pageTitle },
		{ property: 'og:description', content: description },
		{ property: 'og:url', content: url },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'Empty Commit' },
		{ property: 'og:locale', content: 'ru_RU' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
	];

	if (image) {
    metaTags.push(
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: description },
      { name: 'twitter:image', content: image }
    );
  }
	
	useHead({
		title: pageTitle,
		meta: metaTags
	});
}