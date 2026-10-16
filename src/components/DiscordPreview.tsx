import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

interface DiscordPreviewProps {
  type?: "ai" | "rank" | "download";
}

export default function DiscordPreview({ type = "ai" }: DiscordPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-[#1a1a2e] border border-[#9B5CFF]/10 overflow-hidden max-w-lg mx-auto"
    >
      {/* Discord Header */}
      <div className="px-4 py-3 bg-[#151521] border-b border-[#9B5CFF]/10 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#9B5CFF]" />
        <span className="text-sm font-medium text-[#F5F5FA]">#general</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4">
        {type === "ai" && (
          <>
            {/* User Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#42C8FF]/20 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-[#42C8FF]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#42C8FF]">User</span>
                  <span className="text-xs text-[#A1A1B5]/50">Today at 3:42 PM</span>
                </div>
                <p className="text-sm text-[#F5F5FA]/80">/ask What's the best way to learn programming?</p>
              </div>
            </div>

            {/* Bot Response */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B5CFF] to-[#42C8FF] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#9B5CFF]">Susie McCalister</span>
                  <span className="text-[10px] bg-[#9B5CFF]/20 text-[#9B5CFF] px-1.5 py-0.5 rounded font-medium">BOT</span>
                </div>
                <div className="bg-[#151521] rounded-lg p-3 border border-[#9B5CFF]/10">
                  <p className="text-sm text-[#F5F5FA]/90 leading-relaxed">
                    Great question! 🚀 The best way to learn programming is by <strong>doing</strong>. Start with a beginner-friendly language like Python, work on small projects, and gradually increase complexity. Consistency beats intensity — even 30 minutes daily will get you far!
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {type === "rank" && (
          <>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#42C8FF]/20 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-[#42C8FF]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#42C8FF]">User</span>
                  <span className="text-xs text-[#A1A1B5]/50">Today at 3:42 PM</span>
                </div>
                <p className="text-sm text-[#F5F5FA]/80">/rank</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B5CFF] to-[#42C8FF] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#9B5CFF]">Susie McCalister</span>
                  <span className="text-[10px] bg-[#9B5CFF]/20 text-[#9B5CFF] px-1.5 py-0.5 rounded font-medium">BOT</span>
                </div>
                <div className="bg-[#151521] rounded-lg p-4 border border-[#9B5CFF]/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9B5CFF] to-[#42C8FF] flex items-center justify-center text-white font-bold">
                      12
                    </div>
                    <div>
                      <p className="font-semibold text-[#F5F5FA]">User</p>
                      <p className="text-xs text-[#A1A1B5]">Level 12 • Rank #3</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-[#A1A1B5]">
                      <span>XP Progress</span>
                      <span>2,450 / 3,000</span>
                    </div>
                    <div className="w-full h-2 bg-[#08080D] rounded-full overflow-hidden">
                      <div className="h-full w-[82%] bg-gradient-to-r from-[#9B5CFF] to-[#42C8FF] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {type === "download" && (
          <>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#42C8FF]/20 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-[#42C8FF]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#42C8FF]">User</span>
                  <span className="text-xs text-[#A1A1B5]/50">Today at 3:42 PM</span>
                </div>
                <p className="text-sm text-[#F5F5FA]/80">/download https://youtube.com/watch?v=...</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B5CFF] to-[#42C8FF] flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-[#9B5CFF]">Susie McCalister</span>
                  <span className="text-[10px] bg-[#9B5CFF]/20 text-[#9B5CFF] px-1.5 py-0.5 rounded font-medium">BOT</span>
                </div>
                <div className="bg-[#151521] rounded-lg p-3 border border-[#9B5CFF]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-10 bg-[#08080D] rounded flex items-center justify-center">
                      <span className="text-lg">🎬</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#F5F5FA]">Video Downloaded</p>
                      <p className="text-xs text-[#A1A1B5]">1080p • 24.5 MB • Ready!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
