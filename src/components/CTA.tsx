'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const t = useTranslations('cta');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="bg-[#1b1d1f] py-24 relative">
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          {/* Left */}
          <div>
            <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-4">
              {t('label')}
            </p>
            <p className="text-white text-2xl md:text-4xl font-bold max-w-xl leading-snug tracking-tight">
              {t('headline')}
            </p>
          </div>

          {/* CTA button */}
          <a
            href="mailto:info@beltprotocol.com"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[#1b1d1f] font-bold px-7 py-3.5 rounded-full text-sm hover:bg-white/90 transition-colors duration-200"
          >
            {t('button')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
