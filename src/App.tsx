import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEOContent from "@/components/SEOContent";
import PerformanceDashboard from "@/components/PerformanceDashboard";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Collaborators = lazy(() => import("@/components/Collaborators"));
const Projects = lazy(() => import("@/components/Projects"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function App() {
  return (
    <div className="bg-[#1A1A1A] text-slate-300 font-sans leading-normal tracking-tight">
      <SEOContent />
      <Header />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <About />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <Skills />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <Projects />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <Collaborators />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <Pricing />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-20 flex justify-center">
              <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
            </div>
          }
        >
          <Contact />
        </Suspense>
      </main>
      <Suspense
        fallback={
          <div className="py-10 flex justify-center">
            <div className="animate-spin w-6 h-6 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
          </div>
        }
      >
        <Footer />
      </Suspense>

      {process.env.NODE_ENV === "development" && <PerformanceDashboard />}
    </div>
  );
}
