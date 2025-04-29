import { createDirectus, rest, staticToken } from '@directus/sdk';

export const directusServer = createDirectus(process.env.DIRECTUS_URL)
  .with(staticToken(process.env.DIRECTUS_ADMIN_TOKEN || ''))
  .with(rest());