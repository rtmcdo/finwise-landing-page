import React from 'react';
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        {/* <Section
          id="testimonials"
          title="Hear From Fellow Players"
          description="Real pickleball enthusiasts sharing their experience with the app."
        >
          <Testimonials />
        </Section> */}
      </Container>

      {/* Visual break between Benefits and FAQ - spans full page width */}
      <div className="w-full h-16 bg-gray-200 my-16"></div>

      <Container>
        <FAQ />
        
        {/* <CTA /> */}
      </Container>
    </>
  );
};

export default HomePage;
