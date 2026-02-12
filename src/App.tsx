import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ScrollScene from "@/components/ScrollScene";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Collaborators = lazy(() => import("@/components/Collaborators"));
const Projects = lazy(() => import("@/components/Projects"));
// const Pricing = lazy(() => import("@/components/Pricing"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function App() {
  return (
    <div className="bg-white text-slate-900 dark:bg-[#1A1A1A] dark:text-slate-300 font-sans leading-normal tracking-tight">
      <Header />
      <main className="apple-scroll-stage">
        <Hero />
        <ScrollScene index={0}>
          <Suspense
            fallback={
              <div className="py-20 flex justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
              </div>
            }
          >
            <About />
          </Suspense>
        </ScrollScene>
        <ScrollScene index={1}>
          <Suspense
            fallback={
              <div className="py-20 flex justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
              </div>
            }
          >
            <Skills />
          </Suspense>
        </ScrollScene>
        <ScrollScene index={2}>
          <Suspense
            fallback={
              <div className="py-20 flex justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
              </div>
            }
          >
            <Projects />
          </Suspense>
        </ScrollScene>
        <ScrollScene index={3}>
          <Suspense
            fallback={
              <div className="py-20 flex justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
              </div>
            }
          >
            <Collaborators />
          </Suspense>
        </ScrollScene>
        <ScrollScene index={4} isLast>
          <Suspense
            fallback={
              <div className="py-20 flex justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-[#00C4B3] border-t-transparent rounded-full"></div>
              </div>
            }
          >
            <Contact />
          </Suspense>
        </ScrollScene>
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
