import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CommandCard from "../components/CommandCard";
import { commands, commandCategories } from "../data/commands";

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCommands = useMemo(() => {
    return commands.filter((cmd) => {
      const matchesSearch =
        search === "" ||
        cmd.name.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || cmd.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Commands"
          subtitle="Browse all available slash commands. Search by name or description, or filter by category."
        />

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 space-y-4"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1B5]" />
            <input
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#151521] border border-[#9B5CFF]/10 text-[#F5F5FA] placeholder-[#A1A1B5]/50 text-sm focus:outline-none focus:border-[#9B5CFF]/30 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-[#A1A1B5]" />
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === "All"
                  ? "bg-[#9B5CFF]/20 text-[#9B5CFF] border border-[#9B5CFF]/30"
                  : "bg-[#151521] text-[#A1A1B5] border border-[#9B5CFF]/10 hover:border-[#9B5CFF]/20"
              }`}
            >
              All
            </button>
            {commandCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[#9B5CFF]/20 text-[#9B5CFF] border border-[#9B5CFF]/30"
                    : "bg-[#151521] text-[#A1A1B5] border border-[#9B5CFF]/10 hover:border-[#9B5CFF]/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-[#A1A1B5] mb-6">
          Showing {filteredCommands.length} of {commands.length} commands
        </p>

        {/* Commands Grid */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCommands.map((cmd, index) => (
              <CommandCard key={cmd.name} command={cmd} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[#A1A1B5] text-lg mb-2">No commands found</p>
            <p className="text-[#A1A1B5]/60 text-sm">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-4 rounded-xl bg-[#151521] border border-[#42C8FF]/10"
        >
          <p className="text-xs text-[#A1A1B5] leading-relaxed">
            <span className="text-[#42C8FF] font-medium">Note:</span> This command list is a reference guide. 
            Some commands may require specific permissions or server configuration. 
            Use <code className="text-[#F5F5FA] bg-[#08080D] px-1 rounded">/</code> in Discord to see available commands.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
