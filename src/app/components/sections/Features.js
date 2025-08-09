import { FaComment, FaUsers, FaBolt } from "react-icons/fa";
import FeatureCard from "../commons/FeatureCard";

export default function Features() {
  return (
    <section id="featuresSection" className="py-10 md:py-20 md:px-40 bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="container mx-auto px-4 md:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What UniBot does ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            Icon={FaComment}
            title="Instant Answers"
            description="Get immediate responses to your academic and campus questions"
          />
          <FeatureCard
            Icon={FaUsers}
            title="Academic Support"
            description="Access personalized resources and study tips tailored to your needs"
          />
          <FeatureCard
            Icon={FaBolt}
            title="24/7 Guidance"
            description="Receive round-the-clock assistance for all your university queries"
          />
        </div>
      </div>
    </section>
  );
}
