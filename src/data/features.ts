export interface Feature {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  example?: string;
}

export const features: Feature[] = [
  {
    id: "ai-chatbot",
    icon: "Brain",
    title: "AI Chatbot",
    shortDescription: "Converse with Susie using advanced AI with a unique personality.",
    fullDescription: "Susie uses advanced AI to hold natural, engaging conversations. She has her own personality — witty, helpful, and always ready to chat. Ask questions, brainstorm ideas, or just have fun conversations.",
    category: "AI & Conversations",
    example: "/ask What's the best programming language for beginners?",
  },
  {
    id: "ai-imagine",
    icon: "Sparkles",
    title: "AI Image Generation",
    shortDescription: "Generate stunning images from text descriptions.",
    fullDescription: "Describe what you want to see and Susie will generate it. From cyberpunk landscapes to cute animals, the AI image generator brings your imagination to life.",
    category: "AI & Conversations",
    example: "/imagine A futuristic city with flying cars at sunset",
  },
  {
    id: "smart-downloader",
    icon: "Download",
    title: "Smart Downloader",
    shortDescription: "Download media from supported platforms directly in Discord.",
    fullDescription: "Quickly download videos and media from supported platforms. Just paste a link and Susie handles the rest. No need to leave Discord.",
    category: "Media & Downloads",
    example: "/download https://youtube.com/watch?v=...",
  },
  {
    id: "leveling-xp",
    icon: "TrendingUp",
    title: "Leveling & XP",
    shortDescription: "Earn XP by being active and level up in your server.",
    fullDescription: "Every message you send earns XP. Level up to unlock recognition and show your dedication to the community. Beautiful rank cards display your progress.",
    category: "Leveling & Economy",
    example: "/rank — View your level card",
  },
  {
    id: "rewards-economy",
    icon: "Coins",
    title: "Rewards & Economy",
    shortDescription: "Earn balance, claim daily rewards, and manage your economy.",
    fullDescription: "Susie comes with a built-in economy system. Earn balance through activity, claim daily rewards, and transfer funds to friends. A fun way to engage your community.",
    category: "Leveling & Economy",
    example: "/daily — Claim your daily reward",
  },
  {
    id: "local-leaderboard",
    icon: "Trophy",
    title: "Local Leaderboard",
    shortDescription: "See who's the most active member in your server.",
    fullDescription: "Track and display the most active members in your server. Compete with friends and climb the ranks to become the top contributor.",
    category: "Leveling & Economy",
    example: "/leaderboard — View server rankings",
  },
  {
    id: "global-leaderboard",
    icon: "Globe",
    title: "Global Leaderboard",
    shortDescription: "Compete with users across all servers using Susie.",
    fullDescription: "See how you rank against users from every server that uses Susie. The global leaderboard shows the most dedicated users across the entire Susie network.",
    category: "Leveling & Economy",
    example: "/globalboard — View global rankings",
  },
  {
    id: "premium",
    icon: "Crown",
    title: "Premium Features",
    shortDescription: "Unlock additional capabilities with Susie Premium.",
    fullDescription: "Premium users get access to enhanced features including higher rate limits, priority AI responses, exclusive commands, and more. Support the development while getting the best experience.",
    category: "Premium",
    example: "/premium — Check your premium status",
  },
  {
    id: "community-tools",
    icon: "Users",
    title: "Community Tools",
    shortDescription: "Useful utilities to enhance your Discord community.",
    fullDescription: "From server settings management to user data administration, Susie provides tools that help server admins manage their communities effectively.",
    category: "Community & Utilities",
    example: "/settings — Configure server options",
  },
];

export const featureCategories = [...new Set(features.map((f) => f.category))];
