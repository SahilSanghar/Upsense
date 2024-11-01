import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WhatWeDo from "@/components/WhatWeDo";
import WhoAreWe from "@/components/WhoAreWe";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      <Projects />
    </>
  );
}
