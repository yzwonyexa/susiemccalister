export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How do I invite Susie to my server?",
    answer: "Click the 'Invite Bot' button on the homepage or navigation bar. You'll be redirected to Discord's authorization page where you can select your server and grant the necessary permissions.",
  },
  {
    question: "What permissions does Susie need?",
    answer: "Susie requires basic permissions to function: Send Messages, Embed Links, Read Message History, and Use External Emojis. Additional permissions may be needed for specific features like managing roles or channels.",
  },
  {
    question: "Is Susie free to use?",
    answer: "Yes! Susie's core features are completely free. Premium features are available for users who want enhanced capabilities and want to support the project's development.",
  },
  {
    question: "Susie isn't responding to commands. What should I do?",
    answer: "First, check that Susie has the required permissions in the channel. Make sure the bot's role is positioned above any role-restricted channels. If the issue persists, try re-inviting the bot or contacting our support server.",
  },
  {
    question: "How does the XP system work?",
    answer: "Users earn XP by sending messages in the server. The amount of XP earned per message varies. As users accumulate XP, they level up. You can check your level with /rank or /level.",
  },
  {
    question: "Can I reset my or someone else's data?",
    answer: "Server admins can use the /reset command to clear a user's XP and level data. This action cannot be undone, so use it carefully.",
  },
  {
    question: "Does Susie store my data?",
    answer: "Susie stores minimal data necessary for functionality: user IDs, server IDs, XP/level data, and economy balances. We do not store message content. See our Privacy Policy for full details.",
  },
  {
    question: "How do I report a bug or suggest a feature?",
    answer: "Join our support server on Discord and use the appropriate channel to report bugs or suggest features. Our team actively monitors feedback and uses it to improve Susie.",
  },
];
