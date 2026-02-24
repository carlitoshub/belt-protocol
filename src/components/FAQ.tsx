'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const items = t.raw('items') as Array<{ question: string; answer: string }>;
  const [open, setOpen] = useState<number | null>(null);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="bg-[#1b1d1f] py-24">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
        >
          {t('intro')}
        </motion.p>

        {/* Accordion */}
        <div className="divide-y divide-white/8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              >
                <span className="text-white text-base md:text-lg font-medium leading-snug group-hover:text-white/80 transition-colors pr-4">
                  {item.question}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center mt-0.5 transition-all duration-200 ${open === i ? 'bg-white border-white' : 'group-hover:border-white/40'}`}>
                  <svg
                    width="10" height="10" viewBox="0 0 24 24" fill="none"
                    stroke={open === i ? '#1b1d1f' : 'white'} strokeWidth="2.5"
                    className={`transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}
                  >
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50 text-sm md:text-base leading-relaxed pb-6 max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
