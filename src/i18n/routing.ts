import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro', 'it'],
  defaultLocale: 'en',
});
