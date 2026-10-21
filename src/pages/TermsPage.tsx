import { motion } from "framer-motion";
import { config } from "../lib/config";

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5FA] mb-2">Terms of Service</h1>
          <p className="text-[#A1A1B5] text-sm mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">1. Acceptance of Terms</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                By inviting and using {config.siteName} ("the Bot") in your Discord server, you agree to these Terms of Service. If you do not agree, please remove the bot from your server.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">2. Acceptable Use</h2>
              <p className="text-[#A1A1B5] leading-relaxed mb-3">You agree to use the Bot in a reasonable and lawful manner. Specifically:</p>
              <ul className="text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li>Use the Bot for its intended purpose — AI conversations, media downloads, leveling, and community engagement.</li>
                <li>Comply with Discord's Terms of Service and Community Guidelines.</li>
                <li>Not attempt to exploit, abuse, or overload the Bot's systems.</li>
                <li>Not use the Bot to distribute malicious content or spam.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">3. Prohibited Actions</h2>
              <p className="text-[#A1A1B5] leading-relaxed mb-3">The following actions are prohibited:</p>
              <ul className="text-[#A1A1B5] space-y-2 list-disc list-inside">
                <li>Attempting to reverse-engineer or decompile the Bot.</li>
                <li>Using automated scripts to spam commands.</li>
                <li>Using the Bot to harass, threaten, or harm other users.</li>
                <li>Attempting to access data of other users without authorization.</li>
                <li>Using the Bot for any illegal purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">4. Service Availability</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                We strive to keep the Bot available at all times, but we do not guarantee uninterrupted service. The Bot may be temporarily unavailable due to maintenance, updates, technical issues, or circumstances beyond our control. We are not liable for any disruptions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">5. Premium Features</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                Premium features may be available for users who choose to support the project. Premium benefits, pricing, and terms are subject to change. We reserve the right to modify or discontinue premium features with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">6. Changes to the Service</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                We reserve the right to modify, add, or remove features at any time. We will make reasonable efforts to communicate significant changes through our support server. Continued use of the Bot after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">7. Limitation of Liability</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                The Bot is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use the Bot, including but not limited to data loss, server disruption, or indirect damages. Our total liability shall not exceed the amount you have paid for premium features, if any.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">8. Termination</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                We reserve the right to restrict or terminate access to the Bot for any user or server that violates these terms. Users may remove the Bot from their server at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F5F5FA] mb-3">9. Contact</h2>
              <p className="text-[#A1A1B5] leading-relaxed">
                For questions about these Terms of Service, please join our{" "}
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
