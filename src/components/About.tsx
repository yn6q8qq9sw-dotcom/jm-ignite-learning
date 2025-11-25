import campusImage from "@/assets/campus-building.jpg";
import { Award, Users, BookOpen, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistently ranked among top CBSE schools with outstanding board results",
    },
    {
      icon: Users,
      title: "Holistic Development",
      description: "Nurturing minds, bodies, and character through comprehensive programs",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Innovative teaching methods blending tradition with contemporary education",
    },
    {
      icon: Target,
      title: "Future Ready",
      description: "Preparing students for global challenges and opportunities",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={campusImage}
                alt="JM International School Campus"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-strong max-w-xs">
              <p className="text-4xl font-display font-bold">21st</p>
              <p className="text-lg font-semibold">Century Learning</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
                Welcome to a Progressive School of the 21st Century
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Envisioned by the finest educationists of India, JM International School 
                is guided by its Academic Council and Advisory Board. We aim to nurture 
                overall excellence among children, fostering transformational pedagogy and 
                integrating modern teaching methodologies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-card hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
