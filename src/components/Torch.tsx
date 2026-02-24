'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);

export default function Torch() {
  const t = useTranslations('torch');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const points = [
    t('pointOne'),
    t('pointTwo'),
    t('pointThree'),
    t('pointFour'),
  ];

  return (
    <section id="torch" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0099ff]/5 blur-[120px]" />
      </div>

      {/* Divider */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#0099ff] text-sm font-semibold uppercase tracking-widest mb-4">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-heading)] tracking-tight leading-[1.1]">
              {t('headline')}
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              {t('subheadline')}
            </p>

            {/* Feature points */}
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 text-white/70 text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-[#0099ff]/10 border border-[#0099ff]/20 flex items-center justify-center text-[#0099ff] shrink-0">
                    {checkIcon}
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/15 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all duration-200"
            >
              {t('cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </motion.div>

          {/* Right — Torch mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass rounded-2xl p-1" style={{ boxShadow: '0 0 60px rgba(0,153,255,0.08)' }}>
              <div className="bg-[#1e2022] rounded-xl p-6">
                {/* Torch header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-md bg-[#0099ff] flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-sm font-[var(--font-heading)]">Torch</span>
                    </div>
                    <p className="text-white/30 text-xs">Performance Analytics</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                    <span className="text-white/30 text-xs">Live</span>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="mb-6">
                  <div className="flex items-end justify-between gap-1 h-24">
                    {[55, 72, 48, 85, 63, 91, 78, 95, 70, 88].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div
                          className="rounded-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background: i >= 8
                              ? 'linear-gradient(180deg, #0099ff, #0099ff80)'
                              : 'rgba(255,255,255,0.08)',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((m) => (
                      <span key={m} className="text-white/20 text-[10px]">{m}</span>
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Uptime', value: '99.9%', delta: '+0.1%' },
                    { label: 'Incidents', value: '2', delta: '-86%' },
                    { label: 'Reports', value: '47', delta: '+12' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/3 rounded-lg p-3 border border-white/5">
                      <p className="text-white/30 text-[10px] mb-1">{s.label}</p>
                      <p className="text-white font-semibold text-sm font-[var(--font-heading)]">{s.value}</p>
                      <p className="text-[#22c55e] text-[10px] mt-0.5">{s.delta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2.5 flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Zero incidents</p>
                <p className="text-white/40 text-[10px]">Last 30 days</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ideal for note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/30 text-sm text-center max-w-2xl mx-auto mt-16 leading-relaxed"
        >
          {t('idealFor')}
        </motion.p>
      </div>
    </section>
  );
}
