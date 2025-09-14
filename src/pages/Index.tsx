import WellnessHero from "@/components/WellnessHero";
import WellnessServices from "@/components/WellnessServices";
import MoodTracker from "@/components/MoodTracker";
import WellnessResources from "@/components/WellnessResources";
import WellnessFooter from "@/components/WellnessFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WellnessHero />
      <WellnessServices />
      <MoodTracker />
      <WellnessResources />
      <WellnessFooter />
    </div>
  );
};

export default Index;
