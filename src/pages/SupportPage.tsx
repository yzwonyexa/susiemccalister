import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, Shield, AlertTriangle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import { faqItems } from "../data/faq";
import { config } from "../lib/config";

export default function SupportPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Support"
          subtitle="Need help? Find answers to common questions or reach out to our team."
        />

        {/* Support Server CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#9B5CFF]/10 to-[#42C8FF]/10 border border-[#9B5CFF]/15 text-center">
            <MessageCircle className="w-12 h-12 text-[#9B5CFF] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#F5F5FA] mb-3">Join Our Support Server</h3>
            <p className="text-[#A1A1B5] max-w-lg mx-auto mb-6 leading-relaxed">
              Get direct help from our team and community. Report bugs, suggest features, or just hang out.
            </p>
            {config.discordSupportUrl ? (
              <a
                href={config.supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9B5CFF] to-[#42C8FF] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord Server
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#151521] border border-[#9B5CFF]/20 text-[#A1A1B5] font-medium">
                <AlertTriangle className="w-5 h-5 text-[#42C8FF]" />
                Support URL not configured
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Guides */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#F5F5FA] mb-6 flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#9B5CFF]" />
            Quick Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#151521] border border-[#9B5CFF]/10"
            >
              <h4 className="font-semibold text-[#F5F5FA] mb-3">Getting Started</h4>
              <ol className="text-sm text-[#A1A1B5] space-y-2 list-decimal list-inside">
                <li>Invite Susie to your Discord server using the Invite button.</li>
                <li>Ensure Susie has the required permissions in your server.</li>
                <li>Use <code className="text-[#42C8FF] bg-[#08080D] px-1 rounded text-xs">/</code> to see available slash commands.</li>
                <li>Configure settings with <code className="text-[#42C8FF] bg-[#08080D] px-1 rounded text-xs">/settings</code> if needed.</li>
                <li>Start using commands and enjoy!</li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-[#151521] border border-[#9B5CFF]/10"
            >
              <h4 className="font-semibold text-[#F5F5FA] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#42C8FF]" />
                Bot Not Responding?
              </h4>
              <ul className="text-sm text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li>Check if Susie has <strong>Send Messages</strong> permission in the channel.</li>
                <li>Verify Susie's role is above any role-restricted channels.</li>
                <li>Make sure the bot is online — check the member list.</li>
                <li>Try re-inviting the bot if the issue persists.</li>
                <li>Contact support if none of the above works.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-[#151521] border border-[#9B5CFF]/10"
            >
              <h4 className="font-semibold text-[#F5F5FA] mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#9B5CFF]" />
                Required Permissions
              </h4>
              <ul className="text-sm text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li><strong>Send Messages</strong> — Required for all commands.</li>
                <li><strong>Embed Links</strong> — Required for formatted responses.</li>
                <li><strong>Read Message History</strong> — Required for context.</li>
                <li><strong>Use External Emojis</strong> — For emoji reactions.</li>
                <li><strong>Manage Roles</strong> — Only for role-based features (optional).</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-[#151521] border border-[#9B5CFF]/10"
            >
              <h4 className="font-semibold text-[#F5F5FA] mb-3">Reporting Issues</h4>
              <p className="text-sm text-[#A1A1B5] leading-relaxed mb-3">
                If you encounter a bug or unexpected behavior:
              </p>
              <ol className="text-sm text-[#A1A1B5] space-y-2 list-decimal list-inside">
                <li>Describe what you were trying to do.</li>
                <li>Include the exact command you used.</li>
                <li>Share any error messages you received.</li>
                <li>Post in the support server's bug report channel.</li>
              </ol>
            </motion.div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-xl font-semibold text-[#F5F5FA] mb-6 flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#42C8FF]" />
            Frequently Asked Questions
          </h3>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </main>
  );
}
