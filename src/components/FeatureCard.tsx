import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group p-6 rounded-2xl bg-[#151521] border border-[#9B5CFF]/10 hover:border-[#9B5CFF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#9B5CFF]/5"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9B5CFF]/20 to-[#42C8FF]/20 flex items-center justify-center mb-4 group-hover:from-[#9B5CFF]/30 group-hover:to-[#42C8FF]/30 transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#F5F5FA] mb-2">{title}</h3>
      <p className="text-[#A1A1B5] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
