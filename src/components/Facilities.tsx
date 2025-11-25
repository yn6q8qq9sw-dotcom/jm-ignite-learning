import scienceLabImage from "@/assets/science-lab.jpg";
import libraryImage from "@/assets/library.jpg";
import sportsImage from "@/assets/sports-facility.jpg";
import { GraduationCap, FlaskConical, BookMarked, Trophy, Music, Palette } from "lucide-react";

export const Facilities = () => {
  const facilities = [
    {
      title: "State-of-the-Art Science Labs",
      description: "Modern laboratories equipped with advanced instruments for Physics, Chemistry, and Biology practical learning.",
      image: scienceLabImage,
      icon: FlaskConical,
      color: "bg-accent",
    },
    {
      title: "Comprehensive Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces fostering a love for reading and research.",
      image: libraryImage,
      icon: BookMarked,
      color: "bg-primary",
    },
    {
      title: "Sports & Recreation",
      description: "World-class sports facilities including cricket, football, basketball courts, and indoor games for physical excellence.",
      image: sportsImage,
      icon: Trophy,
      color: "bg-secondary",
    },
  ];

  const additionalFacilities = [
    { icon: GraduationCap, title: "Smart Classrooms", description: "Technology-enabled learning spaces" },
    { icon: Music, title: "Music & Dance", description: "Dedicated studios for performing arts" },
    { icon: Palette, title: "Art Studio", description: "Creative spaces for artistic expression" },
  ];

  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            World-Class Infrastructure
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Facilities That Inspire Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            Our campuses are equipped with modern facilities designed to provide 
            a comprehensive learning experience beyond academics.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 ${facility.color} text-white rounded-full flex items-center justify-center`}>
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Facilities */}
        <div className="grid sm:grid-cols-3 gap-6">
          {additionalFacilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
