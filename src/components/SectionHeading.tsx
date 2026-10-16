import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, centered = true, children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5FA] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#A1A1B5] text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
