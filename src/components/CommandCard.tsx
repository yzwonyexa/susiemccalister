import { motion } from "framer-motion";
import { Command } from "../data/commands";
import { ChevronRight, Shield } from "lucide-react";

interface CommandCardProps {
  command: Command;
  index: number;
}

export default function CommandCard({ command, index }: CommandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="p-5 rounded-xl bg-[#151521] border border-[#9B5CFF]/10 hover:border-[#9B5CFF]/25 transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <code className="text-[#9B5CFF] font-mono font-semibold text-sm bg-[#9B5CFF]/10 px-2 py-1 rounded">
            {command.name}
          </code>
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#42C8FF] bg-[#42C8FF]/10 px-2 py-0.5 rounded-full">
            {command.category}
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-[#A1A1B5] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-[#A1A1B5] text-sm mb-3 leading-relaxed">{command.description}</p>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1B5]/60">Usage</span>
          <code className="text-xs text-[#F5F5FA] font-mono bg-[#08080D] px-2 py-1 rounded">
            {command.usage}
          </code>
        </div>

        {command.example && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1B5]/60">Example</span>
            <code className="text-xs text-[#42C8FF] font-mono bg-[#08080D] px-2 py-1 rounded">
              {command.example}
            </code>
          </div>
        )}

        {command.parameters && command.parameters.length > 0 && (
          <div className="mt-2 pt-2 border-t border-[#9B5CFF]/5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A1A1B5]/60 block mb-1">Parameters</span>
            <div className="flex flex-wrap gap-1">
              {command.parameters.map((p) => (
                <span key={p.name} className="text-xs text-[#A1A1B5] bg-[#08080D] px-2 py-0.5 rounded">
                  {p.required ? "" : "["}{p.name}{p.required ? "" : "]"}
                </span>
              ))}
            </div>
          </div>
        )}

        {command.permissions && command.permissions.length > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <Shield className="w-3 h-3 text-[#42C8FF]" />
            <span className="text-xs text-[#42C8FF]">
              {command.permissions.join(", ")}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
