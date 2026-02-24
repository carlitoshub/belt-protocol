'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-[#1b1d1f] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <a href={`/${locale}`} className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="white" fillOpacity="0.1"/>
                <path d="M16 5L8 15.5H14L12 23L20 12.5H14L16 5Z" fill="white"/>
              </svg>
              <span className="text-white font-bold text-lg">BELT</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">{t('tagline')}</p>
            <p className="text-white/30 text-sm mt-3">
              <a href={`mailto:${t('email')}`} className="hover:text-white/60 transition-colors">
                {t('email')}
              </a>
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16 flex-wrap">
            {/* Quick links */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">{t('quickLinks')}</p>
              <div className="flex flex-col gap-3">
                <a href="#about" className="text-white/40 hover:text-white text-sm transition-colors">{t('about')}</a>
                <a href="#blog"  className="text-white/40 hover:text-white text-sm transition-colors">{t('blog')}</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">{t('socialMedia')}</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {t('substack')}
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {t('linkedin')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6">
          <p className="text-white/25 text-xs">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
