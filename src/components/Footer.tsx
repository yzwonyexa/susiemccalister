import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { config } from "../lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#9B5CFF]/10 bg-[#08080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9B5CFF] to-[#42C8FF] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-[#F5F5FA]">{config.siteName}</span>
            </Link>
            <p className="text-[#A1A1B5] text-sm leading-relaxed">
              Your Discord companion for AI conversations, media downloads, rewards, and more.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#F5F5FA] mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Features</Link></li>
              <li><Link to="/commands" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Commands</Link></li>
              <li><Link to="/support" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#F5F5FA] mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Discord */}
          <div>
            <h3 className="font-semibold text-[#F5F5FA] mb-4 text-sm uppercase tracking-wider">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={config.botInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors"
                >
                  Invite Bot
                </a>
              </li>
              {config.discordSupportUrl && (
                <li>
                  <a
                    href={config.supportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A1B5] hover:text-[#9B5CFF] text-sm transition-colors"
                  >
                    Support Server
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#9B5CFF]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#A1A1B5] text-sm">
            © {year} {config.siteName}. All rights reserved.
          </p>
          <p className="text-[#A1A1B5] text-xs">
            Made with ❤️ for the Discord community
          </p>
        </div>
      </div>
    </footer>
  );
}
