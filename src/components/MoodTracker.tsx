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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-wellness mb-6">
            Track Your Daily Mood
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding your emotional patterns is the first step toward better mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mood Tracker */}
          <Card className="wellness-card p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold mb-2">
                How are you feeling today?
              </CardTitle>
              <CardDescription>
                Select the mood that best represents how you're feeling right now
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-4 mb-8">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => handleMoodSelect(mood.value)}
                    className={`
                      p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-110
                      ${selectedMood === mood.value 
                        ? 'border-primary bg-primary/10 shadow-[var(--shadow-gentle)]' 
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <div className="text-sm font-medium text-foreground">{mood.label}</div>
                  </button>
                ))}
              </div>

              {selectedMood && (
                <div className="text-center animate-fade-in-up">
                  <p className="text-muted-foreground mb-4">
                    You selected: <strong>{moods.find(m => m.value === selectedMood)?.label}</strong>
                  </p>
                  <Button 
                    onClick={handleTrackMood}
                    variant="default" 
                    size="lg"
                    disabled={isTracked}
                    className="w-full"
                  >
                    {isTracked ? (
                      <>
                        <Heart className="w-5 h-5 mr-2 text-red-400" />
                        Mood Tracked!
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Track My Mood
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Insights */}
          <div className="space-y-6">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">This week's average</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Good (4.2/5)
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Streak</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      7 days
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Improvement</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      +15% from last week
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📚 Try the gratitude journaling exercise today</p>
                  <p>🧘 Consider a 10-minute mindfulness session</p>
                  <p>🚶 A short walk outside could boost your mood</p>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodTracker;