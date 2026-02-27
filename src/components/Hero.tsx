'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LOGOS = [
  { name: 'Pigliacelli', src: '/logos/pigliacelli.svg' },
  { name: 'Gat Foods',   src: '/logos/gat-foods.svg'   },
  { name: 'Tuborg',      src: '/logos/tuborg.svg'       },
];

function Marquee() {
  const t = useTranslations('hero');
  return (
    <div className="relative bg-white border-t border-gray-100 overflow-hidden py-4">
      {/* Logos scroll edge-to-edge — 12 reps ensures seamless coverage up to QHD */}
      <div className="flex animate-marquee gap-16 items-center w-max">
        {Array.from({ length: 12 }, () => LOGOS).flat().map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            className="h-7 w-auto object-contain"
          />
        ))}
      </div>
      {/* "Trusted by:" pinned to the left, fading into the scroll */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pr-16 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-10">
        <span
          className="text-xs text-gray-400 font-medium whitespace-nowrap"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('trustedBy')}
        </span>
      </div>
    </div>
  );
}

function RotatingIndustry({ industries }: { industries: string[] }) {
  const [index, setIndex] = useState(0);
  const longest = industries.reduce((a, b) => b.length > a.length ? b : a, '');

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % industries.length);
    }, 2500);
    return () => clearInterval(id);
  }, [industries.length]);

  return (
    <div className="relative overflow-hidden w-max" style={{ height: '1.15em' }}>
      {/* Invisible sizer: sizes the container to the widest word */}
      <span className="invisible whitespace-nowrap">{longest}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 text-white whitespace-nowrap"
        >
          {industries[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  const t = useTranslations('hero');
  const industries = t.raw('industries') as string[];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Video background ─────────────────────────────── */}
      <div className="absolute inset-0">
        {/*
          Replace the src below with your actual video file path.
          Put the video in /public/hero.mp4 and it will work automatically.
          Example: <video src="/hero.mp4" ... />
        */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/hero.mp4"
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative flex-1 flex flex-col justify-end max-w-7xl mx-auto w-full px-6 pb-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12">

          {/* Left — headline block */}
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('headline')}
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-px bg-white/30 mb-6 origin-left"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('subheadline')}{' '}
              <span className="text-white font-semibold">{t('acronym')}</span>
            </motion.p>
          </div>

          {/* Right — "for Industry" rotating text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="md:text-right shrink-0"
          >
            <p
              className="text-white/60 text-lg md:text-2xl font-medium mb-1"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {t('for')}
            </p>
            <div
              className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <RotatingIndustry industries={industries} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Trusted by marquee ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative"
      >
        <Marquee />
      </motion.div>
    </section>
  );
}
