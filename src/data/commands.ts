export interface Command {
  name: string;
  description: string;
  category: string;
  usage: string;
  parameters?: { name: string; description: string; required: boolean }[];
  permissions?: string[];
  example?: string;
}

export const commands: Command[] = [
  // AI Commands
  {
    name: "/ask",
    description: "Ask Susie a question and get an AI-powered response with her unique personality.",
    category: "AI",
    usage: "/ask <question>",
    parameters: [{ name: "question", description: "The question you want to ask Susie", required: true }],
    example: "/ask What's the meaning of life?",
  },
  {
    name: "/chat",
    description: "Start a conversation with Susie. She remembers context within the session.",
    category: "AI",
    usage: "/chat <message>",
    parameters: [{ name: "message", description: "Your message to Susie", required: true }],
    example: "/chat Tell me a joke about programming",
  },
  {
    name: "/imagine",
    description: "Generate an AI image based on your description.",
    category: "AI",
    usage: "/imagine <prompt>",
    parameters: [{ name: "prompt", description: "Description of the image to generate", required: true }],
    example: "/imagine A cyberpunk city at night with neon lights",
  },
  // Downloader Commands
  {
    name: "/download",
    description: "Download media from supported platforms.",
    category: "Downloader",
    usage: "/download <url>",
    parameters: [{ name: "url", description: "The media URL to download", required: true }],
    example: "/download https://youtube.com/watch?v=...",
  },
  {
    name: "/tiktok",
    description: "Download a TikTok video without watermark.",
    category: "Downloader",
    usage: "/tiktok <url>",
    parameters: [{ name: "url", description: "The TikTok video URL", required: true }],
    example: "/tiktok https://tiktok.com/@user/video/...",
  },
  {
    name: "/instagram",
    description: "Download media from an Instagram post or reel.",
    category: "Downloader",
    usage: "/instagram <url>",
    parameters: [{ name: "url", description: "The Instagram post URL", required: true }],
    example: "/instagram https://instagram.com/p/...",
  },
  // Leveling Commands
  {
    name: "/rank",
    description: "View your level card with XP progress and rank in the server.",
    category: "Leveling",
    usage: "/rank [user]",
    parameters: [{ name: "user", description: "The user to check (defaults to yourself)", required: false }],
    example: "/rank @someone",
  },
  {
    name: "/level",
    description: "Check your current level and XP progress.",
    category: "Leveling",
    usage: "/level [user]",
    parameters: [{ name: "user", description: "The user to check (defaults to yourself)", required: false }],
    example: "/level",
  },
  {
    name: "/xp",
    description: "View detailed XP statistics for a user.",
    category: "Leveling",
    usage: "/xp [user]",
    parameters: [{ name: "user", description: "The user to check (defaults to yourself)", required: false }],
    example: "/xp @someone",
  },
  // Economy Commands
  {
    name: "/balance",
    description: "Check your current balance and daily limit status.",
    category: "Economy",
    usage: "/balance [user]",
    parameters: [{ name: "user", description: "The user to check (defaults to yourself)", required: false }],
    example: "/balance",
  },
  {
    name: "/daily",
    description: "Claim your daily reward.",
    category: "Economy",
    usage: "/daily",
    example: "/daily",
  },
  {
    name: "/transfer",
    description: "Transfer balance to another user.",
    category: "Economy",
    usage: "/transfer <user> <amount>",
    parameters: [
      { name: "user", description: "The user to transfer to", required: true },
      { name: "amount", description: "Amount to transfer", required: true },
    ],
    example: "/transfer @someone 100",
  },
  // Leaderboard Commands
  {
    name: "/leaderboard",
    description: "View the server's local leaderboard ranked by XP.",
    category: "Leaderboard",
    usage: "/leaderboard [page]",
    parameters: [{ name: "page", description: "Page number to view", required: false }],
    example: "/leaderboard",
  },
  {
    name: "/globalboard",
    description: "View the global leaderboard across all servers.",
    category: "Leaderboard",
    usage: "/globalboard [page]",
    parameters: [{ name: "page", description: "Page number to view", required: false }],
    example: "/globalboard",
  },
  // Premium Commands
  {
    name: "/premium",
    description: "View your premium status and available premium features.",
    category: "Premium",
    usage: "/premium",
    example: "/premium",
  },
  {
    name: "/redeem",
    description: "Redeem a premium code.",
    category: "Premium",
    usage: "/redeem <code>",
    parameters: [{ name: "code", description: "Your premium redemption code", required: true }],
    example: "/redeem ABCD-1234-EFGH",
  },
  // Admin Commands
  {
    name: "/settings",
    description: "Configure Susie's settings for your server.",
    category: "Admin",
    usage: "/settings <option> <value>",
    parameters: [
      { name: "option", description: "The setting to configure", required: true },
      { name: "value", description: "The new value for the setting", required: true },
    ],
    permissions: ["Manage Server"],
    example: "/settings prefix !",
  },
  {
    name: "/reset",
    description: "Reset a user's XP and level data.",
    category: "Admin",
    usage: "/reset <user>",
    parameters: [{ name: "user", description: "The user to reset", required: true }],
    permissions: ["Manage Server"],
    example: "/reset @someone",
  },
];

export const commandCategories = [...new Set(commands.map((c) => c.category))];
