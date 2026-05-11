import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Outcomes from "@/components/Outcomes";
import Differentiator from "@/components/Differentiator";
import Framework from "@/components/Framework";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <Problem />
        <Outcomes />
        <Differentiator />
        <Framework />
        <CaseStudies />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
