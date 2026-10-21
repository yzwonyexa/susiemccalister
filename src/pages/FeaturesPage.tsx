import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Download,
  TrendingUp,
  Coins,
  Trophy,
  Globe,
  Crown,
  Users,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { features, featureCategories } from "../data/features";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8 text-[#9B5CFF]" />,
  Sparkles: <Sparkles className="w-8 h-8 text-[#42C8FF]" />,
  Download: <Download className="w-8 h-8 text-[#9B5CFF]" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-[#42C8FF]" />,
  Coins: <Coins className="w-8 h-8 text-[#9B5CFF]" />,
  Trophy: <Trophy className="w-8 h-8 text-[#42C8FF]" />,
  Globe: <Globe className="w-8 h-8 text-[#9B5CFF]" />,
  Crown: <Crown className="w-8 h-8 text-[#42C8FF]" />,
  Users: <Users className="w-8 h-8 text-[#9B5CFF]" />,
};

export default function FeaturesPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Features"
          subtitle="Explore everything Susie McCalister has to offer for your Discord server."
        />

        {featureCategories.map((category) => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-[#F5F5FA] mb-6 flex items-center gap-3"
            >
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#9B5CFF] to-[#42C8FF]" />
              {category}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features
                .filter((f) => f.category === category)
                .map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-[#151521] border border-[#9B5CFF]/10 hover:border-[#9B5CFF]/25 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9B5CFF]/20 to-[#42C8FF]/20 flex items-center justify-center flex-shrink-0">
                        {iconMap[feature.icon]}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-[#F5F5FA] mb-2">{feature.title}</h4>
                        <p className="text-[#A1A1B5] text-sm leading-relaxed mb-3">{feature.fullDescription}</p>
                        {feature.example && (
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1B5]/60">Example</span>
                            <code className="text-xs text-[#42C8FF] font-mono bg-[#08080D] px-2 py-1 rounded">
                              {feature.example}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
