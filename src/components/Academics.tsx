import { BookOpen, Globe, Microscope, Calculator, Palette, Languages } from "lucide-react";

export const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Pre-Primary",
      grades: "Nursery - UKG",
      description: "Play-based learning fostering creativity, curiosity, and social skills in a nurturing environment.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Microscope,
      title: "Primary",
      grades: "Grade 1 - 5",
      description: "Building strong foundations in core subjects with emphasis on experiential and activity-based learning.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Calculator,
      title: "Middle School",
      grades: "Grade 6 - 8",
      description: "Developing critical thinking and analytical skills through comprehensive CBSE curriculum.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Globe,
      title: "Secondary & Senior",
      grades: "Grade 9 - 12",
      description: "Stream selection with Science, Commerce, and Humanities preparing students for competitive exams.",
      color: "bg-accent/10 text-accent",
    },
  ];

  const specializations = [
    { icon: Languages, title: "Foreign Languages", description: "French, Spanish, German" },
    { icon: Palette, title: "Creative Arts", description: "Music, Dance, Visual Arts" },
    { icon: Globe, title: "Global Programs", description: "MUNs, Exchange Programs" },
  ];

  return (
    <section id="academics" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Academic Programs
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            CBSE Curriculum with Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            From Pre-Primary to Senior Secondary, our comprehensive programs nurture 
            academic excellence and holistic development at every stage.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {program.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">{program.grades}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <h3 className="font-display font-bold text-3xl text-foreground text-center mb-8">
            Beyond Academics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={32} />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
