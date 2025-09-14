import { Button } from "@/components/ui/button";
import { Heart, Brain, Shield } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const WellnessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Refined Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Glass orbs for depth */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-gentle-float" />
      <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-gentle-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 container-max text-center px-6">
        <div className="animate-spring-in">
          <h1 className="text-display md:text-[4.5rem] text-foreground mb-8 leading-[1.05] tracking-[-0.025em]">
            Professional
            <span className="block text-gradient-primary">Mental Health</span>
            Support
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Evidence-based therapy and wellness resources designed by licensed professionals. 
            Your journey to better mental health starts with the right support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg">
              <Heart className="w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              <Brain className="w-5 h-5" />
              Explore Resources
            </Button>
          </div>
        </div>
        
        {/* Professional Trust Indicators */}
        <div className="glass-card max-w-4xl mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Licensed Professionals</h3>
              <p className="text-sm text-muted-foreground">Board-certified therapists and counselors</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Your privacy and security guaranteed</p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Evidence-Based</h3>
              <p className="text-sm text-muted-foreground">Research-backed therapeutic approaches</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-1/3 left-16 w-3 h-3 bg-primary/20 rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse-subtle" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default WellnessHero;