'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const pillars = [
    { key: 'mission' as const },
    { key: 'approach' as const },
    { key: 'belief' as const },
  ];

  return (
    <section id="about" className="bg-white text-[#1b1d1f] py-24">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b1d1f]/50 tracking-widest uppercase border border-[#1b1d1f]/15 rounded-full px-4 py-1.5">
            [ {t('label')} ]
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-[#1b1d1f] mb-16 max-w-3xl leading-[1.05] tracking-tight"
        >
          {t('headline')}
        </motion.h2>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="border-t-2 border-[#1b1d1f]/10 pt-6"
            >
              <h3 className="text-base font-bold text-[#1b1d1f] mb-3 uppercase tracking-wide">
                {t(`${pillar.key}.title`)}
              </h3>
              <p className="text-[#1b1d1f]/60 text-sm leading-relaxed">
                {t(`${pillar.key}.text`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats + link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
        >
          {/* Stat 1 */}
          <div>
            <p className="text-5xl font-bold text-[#1b1d1f] leading-none mb-1">{t('stat1Value')}</p>
            <p className="text-[#1b1d1f]/50 text-sm uppercase tracking-widest">{t('stat1Label')}</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#1b1d1f]/10" />

          {/* Stat 2 */}
          <div>
            <p className="text-5xl font-bold text-[#1b1d1f] leading-none mb-1">{t('stat2Value')}</p>
            <p className="text-[#1b1d1f]/50 text-sm uppercase tracking-widest">{t('stat2Label')}</p>
          </div>

          <div className="hidden sm:block flex-1" />

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b1d1f] border border-[#1b1d1f]/20 rounded-full px-5 py-2.5 hover:bg-[#1b1d1f] hover:text-white transition-all duration-200"
          >
            {t('moreLink')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
