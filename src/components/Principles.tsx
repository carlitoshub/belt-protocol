'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Principles() {
  const t = useTranslations('principles');
  const items = t.raw('items') as Array<{ number: string; title: string; text: string }>;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-[#1b1d1f] py-24 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-14"
        >
          {t('label')}
        </motion.p>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="border-t border-white/10 pt-8 pb-10 lg:pr-8 lg:border-r lg:last:border-r-0 last:border-r-0"
            >
              <span className="text-white/20 text-sm font-semibold mb-4 block">{item.number}</span>
              <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
