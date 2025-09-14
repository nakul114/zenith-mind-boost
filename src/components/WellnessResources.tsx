import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Video, Headphones, Users, Download, ExternalLink } from "lucide-react";
import therapyImage from "@/assets/therapy-illustration.jpg";

const resources = [
  {
    icon: Book,
    title: "Self-Help Guides",
    description: "Evidence-based workbooks and guides for anxiety, depression, and stress management.",
    type: "Articles",
    count: "24",
    color: "bg-blue-500"
  },
  {
    icon: Video,
    title: "Therapy Sessions",
    description: "Educational videos on coping strategies, mindfulness, and emotional regulation.",
    type: "Videos",
    count: "15",
    color: "bg-purple-500"
  },
  {
    icon: Headphones,
    title: "Guided Meditations",
    description: "Relaxing audio sessions for stress relief, sleep, and mindfulness practice.",
    type: "Audio",
    count: "30",
    color: "bg-green-500"
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Connect with peers in our moderated online support communities.",
    type: "Community",
    count: "8",
    color: "bg-orange-500"
  }
];

const articles = [
  {
    title: "Understanding Anxiety: A Complete Guide",
    description: "Learn about anxiety symptoms, causes, and effective coping strategies.",
    readTime: "8 min read",
    category: "Anxiety"
  },
  {
    title: "Building Resilience in Difficult Times",
    description: "Practical techniques for developing emotional resilience and mental strength.",
    readTime: "6 min read",
    category: "Resilience"
  },
  {
    title: "The Science of Sleep and Mental Health",
    description: "How quality sleep impacts your mental wellness and mood.",
    readTime: "10 min read",
    category: "Sleep"
  }
];

const WellnessResources = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-calm mb-6">
            Wellness Resources & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of mental health resources, tools, and educational content.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <Card 
              key={resource.title}
              className="wellness-card group hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${resource.color} rounded-2xl mx-auto mb-4 p-4 group-hover:scale-110 transition-transform animate-breathe`}>
                  <resource.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {resource.description}
                </CardDescription>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{resource.type}</Badge>
                  <span className="text-sm text-primary font-semibold">{resource.count} items</span>
                </div>
                <Button variant="outline" className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gradient-wellness mb-8">
              Latest Articles & Insights
            </h3>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Card key={article.title} className="wellness-card group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="mb-2">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mb-4">
                      {article.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="default" size="lg">
                View All Resources
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="wellness-card p-8 text-center">
              <img 
                src={therapyImage} 
                alt="Therapy session illustration"
                className="w-full h-64 object-cover rounded-xl mb-6 animate-float"
              />
              <h4 className="text-2xl font-bold text-gradient-calm mb-4">
                Download Our Wellness App
              </h4>
              <p className="text-muted-foreground mb-6">
                Take your mental health journey on the go with our mobile app featuring guided meditations, mood tracking, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default">
                  <Download className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessResources;