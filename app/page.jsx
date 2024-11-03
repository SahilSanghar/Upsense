import Believe from "@/components/Believe";
import Discussion from "@/components/Discussion";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";
import WhoAreWe from "@/components/WhoAreWe";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      <Projects />
      <Testimonials />
      <Believe />
      <Discussion />
      <Footer />
    </>
  );
}
