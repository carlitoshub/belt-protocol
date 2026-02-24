'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BlogSection() {
  const t = useTranslations('blog');
  const posts = t.raw('posts') as Array<{
    date: string;
    category: string;
    title: string;
    excerpt: string;
  }>;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="blog" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1b1d1f]/50 tracking-widest uppercase border border-[#1b1d1f]/15 rounded-full px-4 py-1.5 mb-5">
              [ {t('label')} ]
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1b1d1f] leading-tight tracking-tight">
              {t('headline')}
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#1b1d1f]/60 hover:text-[#1b1d1f] transition-colors"
          >
            {t('readAll')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border-t-2 border-[#1b1d1f]/10 pt-6 cursor-pointer"
            >
              {/* Meta */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#1b1d1f]/40 text-xs">{post.date}</span>
                <span className="text-[#1b1d1f]/20">/</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1b1d1f]/50">{post.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-[#1b1d1f] text-lg font-bold mb-3 leading-snug group-hover:text-[#1b1d1f]/70 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#1b1d1f]/50 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read more */}
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#1b1d1f] group-hover:gap-3 transition-all duration-200">
                {t('readMore')}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </span>
            </motion.article>
          ))}
        </div>

        {/* Mobile read all */}
        <div className="mt-10 md:hidden">
          <a href="#" className="text-sm font-semibold text-[#1b1d1f]/60 hover:text-[#1b1d1f] flex items-center gap-2">
            {t('readAll')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
