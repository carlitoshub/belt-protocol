'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { label: t('about'), href: '#about' },
    { label: t('blog'), href: '#blog' },
    { label: t('contact'), href: '#contact' },
    { label: t('privacy'), href: '#' },
    { label: t('terms'), href: '#' },
  ];

  return (
    <footer className="bg-[#1b1d1f] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + tagline */}
        <div className="flex items-center gap-3">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="white" fillOpacity="0.1"/>
            <path d="M16 5L8 15.5H14L12 23L20 12.5H14L16 5Z" fill="white"/>
          </svg>
          <span
            className="text-white font-bold text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            BELT
          </span>
          <span className="text-white/20 mx-1">·</span>
          <span
            className="text-white/40 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('tagline')}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          className="text-white/25 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
