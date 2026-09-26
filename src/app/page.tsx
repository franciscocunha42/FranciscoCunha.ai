import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        <Services />
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
