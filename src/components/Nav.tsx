'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const localeLabels: Record<string, string> = {
  en: 'EN',
  ro: 'RO',
  it: 'IT',
};

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setLangOpen(false);
  };

  const navLinks = [
    { key: 'features', href: '#features' },
    { key: 'torch', href: '#torch' },
    { key: 'about', href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-300 ${
          scrolled
            ? 'glass rounded-2xl mx-4 lg:mx-auto'
            : ''
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#e8481c] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[var(--font-heading)]">B</span>
            </div>
            <span className="text-white font-semibold text-lg font-[var(--font-heading)] tracking-tight">
              BELT
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 font-[var(--font-body)]"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-white/5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                {localeLabels[locale]}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-28 glass rounded-xl overflow-hidden"
                  >
                    {Object.entries(localeLabels).map(([loc, label]) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          loc === locale
                            ? 'text-white bg-white/10'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {label === 'EN' ? '🇬🇧 English' : label === 'RO' ? '🇷🇴 Română' : '🇮🇹 Italiano'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-[#e8481c] rounded-lg hover:bg-[#d43d14] transition-colors duration-200"
            >
              {t('getStarted')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white p-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12"/>
              ) : (
                <><path d="M4 6h16M4 12h16M4 18h16"/></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-white text-sm py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex gap-2">
                {Object.entries(localeLabels).map(([loc, label]) => (
                  <button
                    key={loc}
                    onClick={() => { switchLocale(loc); setMenuOpen(false); }}
                    className={`flex-1 py-2 text-xs rounded-lg transition-colors ${
                      loc === locale
                        ? 'bg-white/10 text-white'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-2.5 text-center text-sm font-medium text-white bg-[#e8481c] rounded-lg hover:bg-[#d43d14] transition-colors"
              >
                {t('getStarted')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
