import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  let messages: Record<string, unknown>;

  if (locale === 'en') {
    const [nav, hero, about, faq, principles, blog, cta, footer] = await Promise.all([
      import('../../messages/en/nav.json').then((m) => m.default),
      import('../../messages/en/hero.json').then((m) => m.default),
      import('../../messages/en/about.json').then((m) => m.default),
      import('../../messages/en/faq.json').then((m) => m.default),
      import('../../messages/en/principles.json').then((m) => m.default),
      import('../../messages/en/blog.json').then((m) => m.default),
      import('../../messages/en/cta.json').then((m) => m.default),
      import('../../messages/en/footer.json').then((m) => m.default),
    ]);
    messages = { nav, hero, about, faq, principles, blog, cta, footer };
  } else {
    messages = (await import(`../../messages/${locale}.json`)).default;
  }

  return { locale, messages };
});
