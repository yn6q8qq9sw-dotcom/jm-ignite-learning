import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const Campuses = () => {
  const campuses = [
    {
      name: "Greater Noida West Campus",
      location: "Greater Noida West, Uttar Pradesh",
      description: "Our flagship campus with sprawling grounds, modern infrastructure, and comprehensive facilities for all grades.",
      phone: "+91 120 XXX XXXX",
      email: "grnoidawest@jmschool.com",
      highlights: ["Pre-Primary to Grade 12", "25+ Acres", "Smart Classrooms", "Olympic-size Pool"],
    },
    {
      name: "Dwarka Campus",
      location: "Dwarka, New Delhi",
      description: "Strategically located in West Delhi, offering world-class education with easy accessibility and modern amenities.",
      phone: "+91 11 XXXX XXXX",
      email: "dwarka@jmschool.com",
      highlights: ["Pre-Primary to Grade 12", "10+ Acres", "Indoor Sports Complex", "Digital Labs"],
    },
  ];

  return (
    <section id="campuses" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Locations
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Two Exceptional Campuses
          </h2>
          <p className="text-muted-foreground text-lg">
            Conveniently located in Delhi and Greater Noida, both campuses offer 
            world-class infrastructure and facilities.
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {campuses.map((campus, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8 space-y-6">
                {/* Header */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {campus.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>{campus.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {campus.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {campus.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-primary/5 rounded-lg text-sm font-medium text-foreground text-center"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone size={16} className="text-primary" />
                    <span>{campus.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail size={16} className="text-primary" />
                    <span>{campus.email}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="default" className="w-full">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
