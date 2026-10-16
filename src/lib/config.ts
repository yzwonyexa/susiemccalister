// Centralized configuration module
// All environment variables and configuration constants are managed here.

export const config = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://susiemccalister.vercel.app",
  siteName: "Susie McCalister",
  siteDescription: "Your Discord companion for AI conversations, media downloads, rewards, and more.",

  // Discord configuration
  discordClientId: import.meta.env.VITE_DISCORD_CLIENT_ID || "",
  discordInviteUrl: import.meta.env.VITE_DISCORD_INVITE_URL || "",
  discordSupportUrl: import.meta.env.VITE_DISCORD_SUPPORT_URL || "",

  // Bot invite URL — auto-generated if client ID is available but invite URL is not
  get botInviteUrl(): string {
    if (this.discordInviteUrl) return this.discordInviteUrl;
    if (this.discordClientId) {
      const permissions = "274877991936"; // Basic bot permissions
      const scopes = "bot%20applications.commands";
      return `https://discord.com/api/oauth2/authorize?client_id=${this.discordClientId}&permissions=${permissions}&scope=${scopes}`;
    }
    return "#"; // Placeholder when no config is available
  },

  get supportUrl(): string {
    return this.discordSupportUrl || "#";
  },
};
