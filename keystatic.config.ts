import { config, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'carlitoshub',
      name: 'belt-protocol',
    },
  },
  ui: {
    brand: { name: 'BELT CMS' },
  },
  singletons: {
    nav: singleton({
      label: 'Navigation',
      path: 'messages/en/nav',
      format: { data: 'json' },
      schema: {
        about: fields.text({ label: 'About' }),
        blog: fields.text({ label: 'Blog' }),
        contact: fields.text({ label: 'Contact' }),
        language: fields.text({ label: 'Language label' }),
      },
    }),

    hero: singleton({
      label: 'Hero',
      path: 'messages/en/hero',
      format: { data: 'json' },
      schema: {
        headline: fields.text({ label: 'Headline', multiline: true }),
        for: fields.text({ label: '"for" prefix' }),
        industries: fields.array(
          fields.text({ label: 'Industry' }),
          { label: 'Rotating industries', itemLabel: (props) => props.value || 'Industry' },
        ),
        subheadline: fields.text({ label: 'Subheadline', multiline: true }),
        acronym: fields.text({ label: 'Acronym expansion', multiline: true }),
        trustedBy: fields.text({ label: '"Trusted by" label' }),
      },
    }),

    about: singleton({
      label: 'About',
      path: 'messages/en/about',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        headline: fields.text({ label: 'Headline' }),
        mission: fields.object({
          title: fields.text({ label: 'Title' }),
          text: fields.text({ label: 'Text', multiline: true }),
        }),
        approach: fields.object({
          title: fields.text({ label: 'Title' }),
          text: fields.text({ label: 'Text', multiline: true }),
        }),
        belief: fields.object({
          title: fields.text({ label: 'Title' }),
          text: fields.text({ label: 'Text', multiline: true }),
        }),
        stat1Value: fields.text({ label: 'Stat 1 — value' }),
        stat1Label: fields.text({ label: 'Stat 1 — label' }),
        stat2Value: fields.text({ label: 'Stat 2 — value' }),
        stat2Label: fields.text({ label: 'Stat 2 — label' }),
        moreLink: fields.text({ label: '"More about us" link text' }),
      },
    }),

    faq: singleton({
      label: 'FAQ',
      path: 'messages/en/faq',
      format: { data: 'json' },
      schema: {
        intro: fields.text({ label: 'Intro text', multiline: true }),
        items: fields.array(
          fields.object({
            question: fields.text({ label: 'Question', multiline: true }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          { label: 'FAQ items' },
        ),
      },
    }),

    principles: singleton({
      label: 'Principles',
      path: 'messages/en/principles',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        items: fields.array(
          fields.object({
            number: fields.text({ label: 'Number (e.g. "1/")' }),
            title: fields.text({ label: 'Title' }),
            text: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Principle items' },
        ),
      },
    }),

    blog: singleton({
      label: 'Blog',
      path: 'messages/en/blog',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        headline: fields.text({ label: 'Headline' }),
        readAll: fields.text({ label: '"Read all blog" button' }),
        readMore: fields.text({ label: '"Read more" link' }),
        posts: fields.array(
          fields.object({
            date: fields.text({ label: 'Date (e.g. "Oct 11, 2025")' }),
            category: fields.text({ label: 'Category' }),
            title: fields.text({ label: 'Title' }),
            excerpt: fields.text({ label: 'Excerpt', multiline: true }),
          }),
          { label: 'Blog posts' },
        ),
      },
    }),

    cta: singleton({
      label: 'CTA',
      path: 'messages/en/cta',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        headline: fields.text({ label: 'Headline', multiline: true }),
        button: fields.text({ label: 'Button text' }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'messages/en/footer',
      format: { data: 'json' },
      schema: {
        tagline: fields.text({ label: 'Tagline' }),
        quickLinks: fields.text({ label: '"Quick links" heading' }),
        about: fields.text({ label: 'About link' }),
        blog: fields.text({ label: 'Blog link' }),
        socialMedia: fields.text({ label: '"Social media" heading' }),
        substack: fields.text({ label: 'Substack link' }),
        linkedin: fields.text({ label: 'LinkedIn link' }),
        copyright: fields.text({ label: 'Copyright text' }),
        email: fields.text({ label: 'Email address' }),
      },
    }),
  },
});
