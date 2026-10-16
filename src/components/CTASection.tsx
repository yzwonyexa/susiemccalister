import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../lib/config";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9B5CFF]/20 via-[#151521] to-[#42C8FF]/20" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F5FA] mb-4">
              Ready to meet <span className="text-gradient">Susie</span>?
            </h2>
            <p className="text-[#A1A1B5] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Bring Susie McCalister to your Discord server and explore what she can do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={config.botInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9B5CFF] to-[#42C8FF] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Invite Bot
                <ArrowRight className="w-4 h-4" />
              </a>
              {config.discordSupportUrl && (
                <a
                  href={config.supportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-[#9B5CFF]/30 text-[#F5F5FA] font-semibold hover:bg-[#9B5CFF]/10 transition-colors"
                >
                  Join Support Server
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
