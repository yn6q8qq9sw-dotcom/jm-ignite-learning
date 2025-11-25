import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="JM International School Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground font-semibold text-sm border border-secondary/30">
              🏆 Ranked #4 by Times School Survey 2024
            </span>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-primary-foreground leading-tight text-balance">
            Creating a Revolution in Education
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto text-balance font-light">
            Learn · Work · Play · Think · Live
          </p>
          
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            A progressive CBSE school nurturing excellence, innovation, and holistic development 
            at our Delhi and Greater Noida campuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="secondary" className="group">
              Explore Admissions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
