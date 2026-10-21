import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Download,
  TrendingUp,
  Coins,
  Trophy,
  Globe,
  Crown,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import DiscordPreview from "../components/DiscordPreview";
import CTASection from "../components/CTASection";
import { config } from "../lib/config";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-[#9B5CFF]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#42C8FF]" />,
  Download: <Download className="w-6 h-6 text-[#9B5CFF]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#42C8FF]" />,
  Coins: <Coins className="w-6 h-6 text-[#9B5CFF]" />,
  Trophy: <Trophy className="w-6 h-6 text-[#42C8FF]" />,
  Globe: <Globe className="w-6 h-6 text-[#9B5CFF]" />,
  Crown: <Crown className="w-6 h-6 text-[#42C8FF]" />,
  Users: <Users className="w-6 h-6 text-[#9B5CFF]" />,
};

const overviewFeatures = [
  { icon: "Brain", title: "AI Chatbot", description: "Converse with Susie using advanced AI with her unique personality." },
  { icon: "Download", title: "Smart Downloader", description: "Download media from supported platforms directly in Discord." },
  { icon: "TrendingUp", title: "Leveling & XP", description: "Earn XP by being active and level up in your server." },
  { icon: "Coins", title: "Rewards & Economy", description: "Earn balance, claim daily rewards, and manage your economy." },
  { icon: "Trophy", title: "Local Leaderboard", description: "See who's the most active member in your server." },
  { icon: "Globe", title: "Global Leaderboard", description: "Compete with users across all servers using Susie." },
  { icon: "Crown", title: "Premium Features", description: "Unlock additional capabilities with Susie Premium." },
  { icon: "Users", title: "Community Tools", description: "Useful utilities to enhance your Discord community." },
];

const steps = [
  { number: "01", title: "Invite Susie", description: "Add Susie to your Discord server with one click." },
  { number: "02", title: "Set Up & Configure", description: "Configure permissions and settings for your server." },
  { number: "03", title: "Enjoy Features", description: "Start using slash commands and enjoy all features." },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9B5CFF]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#42C8FF]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9B5CFF]/10 border border-[#9B5CFF]/20 mb-8"
            >
              <Zap className="w-4 h-4 text-[#9B5CFF]" />
              <span className="text-sm text-[#9B5CFF] font-medium">Discord AI Companion</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F5FA] mb-6 leading-tight">
              Meet{" "}
              <span className="text-gradient">Susie McCalister</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-[#A1A1B5] max-w-3xl mx-auto mb-4 leading-relaxed">
              Your Discord companion for AI conversations, media downloads, rewards, and more.
            </p>
            <p className="text-base md:text-lg text-[#A1A1B5]/70 max-w-2xl mx-auto mb-10">
              Bring smarter conversations, useful tools, and a little personality to your Discord community.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={config.botInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9B5CFF] to-[#42C8FF] text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-[#9B5CFF]/20"
              >
                <MessageSquare className="w-5 h-5" />
                Invite to Discord
              </a>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#9B5CFF]/30 text-[#F5F5FA] font-semibold text-lg hover:bg-[#9B5CFF]/10 transition-colors"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/commands"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#42C8FF]/30 text-[#F5F5FA] font-semibold text-lg hover:bg-[#42C8FF]/10 transition-colors"
              >
                View Commands
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 lg:mt-20"
          >
            <div className="relative max-w-md mx-auto">
              {/* Orb */}
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#9B5CFF]/30 to-[#42C8FF]/30 blur-2xl animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#9B5CFF]/20 to-[#42C8FF]/20 blur-xl" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#151521] to-[#08080D] border border-[#9B5CFF]/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 text-[#9B5CFF] mx-auto mb-2 animate-float" />
                    <p className="text-sm font-medium text-[#A1A1B5]">AI Powered</p>
                  </div>
                </div>
                {/* Orbiting dots */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-[#9B5CFF] -translate-x-1/2" />
                </div>
                <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-[#42C8FF] -translate-x-1/2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Powerful Features"
            subtitle="Everything you need to make your Discord server smarter, more engaging, and more fun."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {overviewFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-[#9B5CFF] font-medium hover:text-[#42C8FF] transition-colors"
            >
              View all features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101018]/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Get started with Susie in three simple steps."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center p-8 rounded-2xl bg-[#151521] border border-[#9B5CFF]/10"
              >
                <div className="text-5xl font-bold text-gradient mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-[#F5F5FA] mb-2">{step.title}</h3>
                <p className="text-[#A1A1B5] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Preview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="See Susie in Action"
            subtitle="A preview of how Susie interacts in your Discord server."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DiscordPreview type="ai" />
            <DiscordPreview type="rank" />
            <DiscordPreview type="download" />
          </div>
          <p className="text-center text-xs text-[#A1A1B5]/50 mt-6">
            * Preview is for demonstration purposes. Actual output may vary.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
