import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Shield, Sparkles, Moon } from "lucide-react";
import meditationIcon from "@/assets/meditation-icon.jpg";

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
    <section className="py-20 px-6 calm-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-wellness mb-6">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our holistic approach combines evidence-based therapies with compassionate care to support your mental wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="wellness-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 animate-breathe group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="calm" className="w-full group-hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="wellness-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-gradient-calm mb-4">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Take the first step towards better mental health with a confidential consultation.
            </p>
            <Button variant="default" size="lg" className="px-8">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessServices;