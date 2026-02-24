'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const locales = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale = locales.find((l) => l.code === locale)!;

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const navLinks = [
    { key: 'about' as const, href: '#about' },
    { key: 'blog' as const, href: '#blog' },
    { key: 'contact' as const, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}`} className="flex items-center gap-2.5">
          {/* BELT lightning bolt icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="white" fillOpacity="0.12"/>
            <path d="M16 5L8 15.5H14L12 23L20 12.5H14L16 5Z" fill="white"/>
          </svg>
          <span
            className="text-white font-bold text-xl tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            BELT
          </span>
        </a>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.06em' }}
            >
              {t(link.key)}
            </a>
          ))}

          {/* Language pill */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 bg-white text-[#1b1d1f] text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {currentLocale.label}
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  {locales.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => switchLocale(loc.code)}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${
                        loc.code === locale
                          ? 'bg-gray-100 text-gray-900 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{loc.flag}</span>
                      {loc.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen
              ? <path d="M18 6 6 18M6 6l12 12"/>
              : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white text-sm uppercase tracking-widest py-3 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc.code}
                    onClick={() => { switchLocale(loc.code); setMenuOpen(false); }}
                    className={`flex-1 py-2 text-xs rounded-lg transition-colors ${
                      loc.code === locale
                        ? 'bg-white text-gray-900 font-semibold'
                        : 'text-white/60 hover:text-white border border-white/10'
                    }`}
                  >
                    {loc.flag} {loc.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
