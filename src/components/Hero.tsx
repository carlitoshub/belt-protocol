'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8481c]/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0099ff]/5 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8481c] animate-pulse" />
          {t('badge')}
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 font-[var(--font-heading)]"
        >
          {t('headline')}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t('subheadline')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 bg-[#e8481c] text-white font-semibold rounded-xl hover:bg-[#d43d14] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-sm"
          >
            {t('cta')}
          </a>
          <a
            href="#features"
            className="px-7 py-3.5 text-white/70 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 text-sm flex items-center gap-2"
          >
            {t('ctaSecondary')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 relative"
        >
          <div className="glass rounded-2xl p-1 max-w-4xl mx-auto glow-orange">
            <div className="bg-[#242729] rounded-xl overflow-hidden">
              {/* Mockup title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#e8481c]/70" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md h-5 max-w-[200px] mx-auto" />
                </div>
              </div>
              {/* Mockup content */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { label: 'Safety Score', value: '98.4%', color: '#e8481c' },
                  { label: 'Incidents Today', value: '0', color: '#0099ff' },
                  { label: 'Compliance', value: '100%', color: '#22c55e' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/3 rounded-xl p-4 border border-white/5">
                    <p className="text-white/40 text-xs mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold font-[var(--font-heading)]" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                    <div className="mt-3 h-1 bg-white/5 rounded-full">
                      <div className="h-1 rounded-full w-4/5" style={{ background: stat.color, opacity: 0.5 }} />
                    </div>
                  </div>
                ))}
                <div className="col-span-3 bg-white/3 rounded-xl p-4 border border-white/5">
                  <p className="text-white/40 text-xs mb-3">Activity — Last 7 Days</p>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm opacity-70"
                        style={{
                          height: `${h}%`,
                          background: i === 5 ? '#e8481c' : 'rgba(255,255,255,0.15)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1b1d1f] to-transparent rounded-b-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
