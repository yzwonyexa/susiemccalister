import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Glitch Effect 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-black text-gradient">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 text-[#9B5CFF]/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#F5F5FA] mb-3">Page Not Found</h2>
          <p className="text-[#A1A1B5] max-w-md mx-auto mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            It might have been lost in the digital void.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9B5CFF] to-[#42C8FF] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#9B5CFF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#42C8FF]/5 rounded-full blur-3xl" />
      </div>
    </main>
  );
}
