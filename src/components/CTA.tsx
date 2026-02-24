'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const t = useTranslations('cta');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 relative">
      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* BG glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#e8481c]/8 blur-[100px]" />
          </div>

          {/* Orange accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[#e8481c] rounded-full" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[var(--font-heading)] tracking-tight">
              {t('headline')}
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto mb-10">
              {t('subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@beltprotocol.com"
                className="px-8 py-3.5 bg-[#e8481c] text-white font-semibold rounded-xl hover:bg-[#d43d14] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                {t('button')}
              </a>
              <a
                href="mailto:hello@beltprotocol.com"
                className="px-8 py-3.5 text-white/70 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 text-sm"
              >
                {t('buttonSecondary')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
