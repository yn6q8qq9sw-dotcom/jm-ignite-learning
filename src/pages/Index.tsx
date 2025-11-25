import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Academics } from "@/components/Academics";
import { Facilities } from "@/components/Facilities";
import { Campuses } from "@/components/Campuses";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Campuses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
