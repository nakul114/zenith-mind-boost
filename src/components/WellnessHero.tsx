import { Button } from "@/components/ui/button";
import { Heart, Brain, Shield } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const WellnessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey to
            <span className="block text-gradient-wellness">Mental Wellness</span>
            Starts Here
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional mental health support tailored to your unique needs. 
            Find peace, build resilience, and discover your inner strength.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5" />
              Start Your Healing
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white/30 hover:bg-white/10">
              <Brain className="w-5 h-5" />
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Licensed Therapists</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>Confidential & Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            <span>Evidence-Based</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default WellnessHero;