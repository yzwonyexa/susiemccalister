import { motion } from "framer-motion";
import { config } from "../lib/config";

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5FA] mb-2">Privacy Policy</h1>
          <p className="text-[#A1A1B5] text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">1. Introduction</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                This Privacy Policy describes how {config.siteName} ("we", "our", or "the bot") collects, uses, and handles information when you use our Discord bot. By using Susie McCalister, you agree to the practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">2. Information We Collect</h2>
              <p className="text-[#A1A1B5] leading-relaxed mb-3">We collect the following types of data:</p>
              <ul className="text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li><strong>Discord User IDs</strong> — To identify users and associate data such as XP, levels, and economy balances.</li>
                <li><strong>Discord Server (Guild) IDs</strong> — To store server-specific settings and leaderboard data.</li>
                <li><strong>XP and Level Data</strong> — Accumulated experience points and level information per user per server.</li>
                <li><strong>Economy Data</strong> — Virtual currency balances and transaction records.</li>
                <li><strong>Command Usage</strong> — Which commands are used and when, for operational purposes.</li>
              </ul>
              <p className="text-[#A1A1B5] leading-relaxed mt-3">
                We do <strong>not</strong> collect or store the content of your messages beyond what is necessary to process commands.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">3. How We Use Information</h2>
              <p className="text-[#A1A1B5] leading-relaxed mb-3">We use collected information to:</p>
              <ul className="text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li>Provide leveling, economy, and leaderboard functionality.</li>
                <li>Process AI conversations and media download requests.</li>
                <li>Maintain server-specific configurations and settings.</li>
                <li>Monitor bot performance and prevent abuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">4. Data Storage</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                Data is stored securely for the duration of the bot's operation. Specific storage methods and encryption details depend on our infrastructure. We take reasonable measures to protect stored data from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">5. Data Retention and Deletion</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                Data is retained as long as the bot is active in your server. If you wish to have your data deleted, please contact us through our support server. Server admins can use the <code className="text-[#42C8FF] bg-[#08080D] px-1 rounded text-sm">/reset</code> command to clear user data within their server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">6. Third-Party Services</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                Susie McCalister may use third-party services for AI processing and media downloading. These services have their own privacy policies. We do not share your personal data with third parties beyond what is necessary for command processing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">7. Changes to This Policy</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be communicated through our support server or updated on this page with a new revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">8. Contact</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please join our{" "}
                {config.discordSupportUrl ? (
                  <a href={config.supportUrl} target="_blank" rel="noopener noreferrer" className="text-[#9B5CFF] hover:underline">
                    support server
                  </a>
                ) : (
                  <span className="text-[#9B5CFF]">support server</span>
                )}{" "}
                on Discord.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
