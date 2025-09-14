import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smile, Frown, Meh, Heart, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const moods = [
  { emoji: "😊", label: "Great", value: 5, color: "bg-green-500" },
  { emoji: "🙂", label: "Good", value: 4, color: "bg-blue-500" },
  { emoji: "😐", label: "Okay", value: 3, color: "bg-yellow-500" },
  { emoji: "🙁", label: "Low", value: 2, color: "bg-orange-500" },
  { emoji: "😢", label: "Difficult", value: 1, color: "bg-red-500" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isTracked, setIsTracked] = useState(false);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
  };

  const handleTrackMood = () => {
    if (selectedMood) {
      setIsTracked(true);
      setTimeout(() => setIsTracked(false), 3000);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-primary/2 to-background">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-large md:text-display text-foreground mb-6">
            Monitor Your <span className="text-gradient-primary">Wellness Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Professional-grade mood tracking and analytics to help you and your therapist understand patterns and progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Mood Assessment */}
          <div className="glass-card p-10">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Daily Wellness Check-In</h3>
            
            <div className="grid grid-cols-5 gap-3 mb-8">
              {moods.map((mood, index) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    selectedMood === mood.value
                      ? 'border-primary bg-primary/8 shadow-[var(--shadow-md)]'
                      : 'border-border/50 hover:border-primary/50 hover:bg-accent/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <div className="text-sm font-medium text-foreground">{mood.label}</div>
                </button>
              ))}
            </div>

            {selectedMood && (
              <div className="text-center animate-spring-in">
                <p className="text-muted-foreground mb-6">
                  Selected: <strong className="text-foreground">{moods.find(m => m.value === selectedMood)?.label}</strong>
                </p>
                <div className="space-y-4 mb-6">
                  <textarea 
                    className="w-full p-4 border border-border/50 rounded-xl bg-background/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all duration-300"
                    rows={3}
                    placeholder="Any specific thoughts, events, or feelings you'd like to track?"
                  />
                </div>
                <Button 
                  onClick={handleTrackMood}
                  variant="premium" 
                  size="lg"
                  disabled={isTracked}
                  className="w-full"
                >
                  {isTracked ? (
                    <>
                      <Heart className="w-5 h-5 mr-2" />
                      Check-In Saved!
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Save Check-In
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Professional Analytics Dashboard */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Wellness Analytics
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">This week's average</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                    Good (4.2/5)
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Consistency streak</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                    7 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-medium">Weekly improvement</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary font-medium">
                    +15%
                  </Badge>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Personalized Recommendations
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <span className="text-lg">📚</span>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Gratitude practice</p>
                    <p className="text-muted-foreground">Try journaling 3 things you're grateful for</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <span className="text-lg">🧘</span>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Mindfulness session</p>
                    <p className="text-muted-foreground">10-minute guided meditation recommended</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-primary/5">
                  <span className="text-lg">🚶</span>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Movement break</p>
                    <p className="text-muted-foreground">Light exercise can boost mood naturally</p>
                  </div>
                </div>
              </div>
              <Button variant="glass" className="w-full">
                View Therapy Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodTracker;