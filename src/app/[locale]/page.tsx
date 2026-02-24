import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Principles from '@/components/Principles';
import BlogSection from '@/components/BlogSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <FAQ />
        <Principles />
        <BlogSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
