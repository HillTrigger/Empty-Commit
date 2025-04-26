import { createDirectus, rest, readItems, registerUser, authentication } from '@directus/sdk';

const directus = createDirectus('https://directus.api.hilltrigger.ru').with(authentication('json'))
.with(rest());

export default defineNuxtPlugin(() => {
    return {
        provide: { directus, readItems, registerUser },
    };
});
