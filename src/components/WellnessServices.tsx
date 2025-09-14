import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Shield, Sparkles, Moon, Calendar } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Cognitive Therapy",
    description: "Evidence-based cognitive behavioral therapy to help reshape negative thought patterns and develop healthy coping strategies.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    description: "Learn to understand and manage your emotions through mindfulness, self-compassion, and emotional intelligence techniques.",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Group Support",
    description: "Connect with others who understand your journey in our supportive group therapy sessions and peer support circles.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Trauma Recovery",
    description: "Specialized trauma-informed care using EMDR, somatic therapy, and other proven approaches for healing and recovery.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Sparkles,
    title: "Stress Management",
    description: "Develop practical tools for managing daily stress, anxiety, and overwhelm through proven relaxation techniques.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Moon,
    title: "Sleep & Recovery",
    description: "Improve your sleep quality and recovery through sleep hygiene education and restorative wellness practices.",
    color: "from-indigo-500 to-blue-500"
  }
];

const WellnessServices = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-primary/2">
      <div className="container-max">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-large md:text-display text-foreground mb-6">
            Professional <span className="text-gradient-primary">Mental Health</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive, evidence-based treatment options designed to support your mental wellness journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass-card p-8 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="p-4 bg-primary/8 rounded-2xl mr-4 group-hover:bg-primary/12 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <div className="pt-4 border-t border-border/20">
                <Button variant="ghost" className="text-primary hover:bg-primary/5 p-0 font-medium">
                  Learn More
                  <span className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Professional Call to Action */}
        <div className="text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-large text-foreground mb-6 font-semibold">
              Take the First Step Towards Better Mental Health
            </h3>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Schedule a confidential consultation with our licensed mental health professionals. 
              Your journey to wellness starts with a single conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg">
                <Calendar className="w-5 h-5" />
                Book Consultation
              </Button>
              <Button variant="glass" size="lg">
                <Heart className="w-5 h-5" />
                (555) 123-CARE
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Most insurance plans accepted • Same-day appointments available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessServices;