import { createDirectus, rest, authentication } from '@directus/sdk';

export const directus = createDirectus(process.env.DIRECTUS_URL || '')
  .with(authentication('cookie', {credentials: 'include', autoRefresh: true}))
  .with(rest());

