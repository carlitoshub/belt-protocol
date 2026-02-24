'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const columns = [
    {
      label: t('product'),
      links: [
        { label: t('features'), href: `/${locale}#features` },
        { label: t('torch'), href: `/${locale}#torch` },
        { label: t('pricing'), href: '#' },
        { label: t('changelog'), href: '#' },
      ],
    },
    {
      label: t('company'),
      links: [
        { label: t('about'), href: '#' },
        { label: t('blog'), href: '#' },
        { label: t('careers'), href: '#' },
        { label: t('contact'), href: '#' },
      ],
    },
    {
      label: t('legal'),
      links: [
        { label: t('privacy'), href: '#' },
        { label: t('terms'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#e8481c] flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-white font-semibold text-lg font-[var(--font-heading)]">BELT</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-[180px]">
              {t('tagline')}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.label}>
              <p className="text-white/70 text-sm font-semibold mb-4">{col.label}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">{t('copyright')}</p>
          <div className="flex items-center gap-5">
            {/* Social icons */}
            {[
              {
                label: 'Twitter/X',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
              },
              {
                label: 'LinkedIn',
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
