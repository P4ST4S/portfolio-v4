import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SEOContent from "@/components/SEOContent";
import Skills from "@/components/Skills";

export default function App() {
  return (
    <div className="bg-[#1A1A1A] text-slate-300 font-sans leading-normal tracking-tight">
      <SEOContent />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
