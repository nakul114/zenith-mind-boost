import { Button } from "@/components/ui/button";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const WellnessFooter = () => {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 wellness-gradient rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gradient-wellness">MindWell</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dedicated to supporting your mental health journey with compassionate, 
              evidence-based care and innovative wellness solutions.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Individual Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Group Sessions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trauma Recovery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Anxiety Treatment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Depression Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stress Management</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Self-Help Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Meditation Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wellness Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Insurance Info</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-WELL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@mindwell.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>123 Wellness Way<br />Peaceful City, PC 12345</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium text-foreground mb-2">Crisis Support</h5>
              <p className="text-sm text-muted-foreground">
                Available 24/7: <span className="font-medium text-primary">(555) 911-HELP</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MindWell. All rights reserved. Licensed mental health professionals.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">HIPAA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WellnessFooter;